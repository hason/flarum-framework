<?php namespace Flarum\Support;

use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\EmptyResponse;
use Zend\Diactoros\Response\RedirectResponse;

abstract class Action
{
    /**
     * @param Request $request
     * @param array $routeParams
     * @return \Psr\Http\Message\ResponseInterface
     */
    abstract public function handle(Request $request, array $routeParams = []);

    /**
     * @return EmptyResponse
     */
    protected function success()
    {
        return new EmptyResponse();
    }

    /**
     * @param string $url
     * @return RedirectResponse
     */
    protected function redirectTo($url)
    {
        $content = sprintf('
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="1;url=%1$s" />

        <title>Redirecting to %1$s</title>
    </head>
    <body>
        Redirecting to <a href="%1$s">%1$s</a>.
    </body>
</html>', htmlspecialchars($url, ENT_QUOTES, 'UTF-8'));

        $response = new RedirectResponse($url);
        $response->getBody()->write($content);

        return $response;
    }
}
