> Pinned source for Vast.ai main: [sdk/python/serverless/session.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/serverless/session.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/session

# Session

## Import

```python
from vastai.serverless.client.session import Session
```

## Constructor

```python
Session(
    endpoint: Endpoint,
    session_id: str,
    lifetime: float,
    expiration: str,
    url: str,
    auth_data: dict,
    on_close_route: str = None,
    on_close_payload: dict = None
)
```

**Property (type: Endpoint; required)**

endpoint

**Property (type: str; required)**

session\_id

**Property (type: float; required)**

lifetime

**Property (type: str; required)**

expiration

**Property (type: str; required)**

url

**Property (type: dict; required)**

auth\_data

**Property (type: str)**

on\_close\_route

**Property (type: dict)**

on\_close\_payload

## Methods

### is\_open

```python
async is_open()
```

### close

```python
async close()
```

Explicit close for non-async contexts.
Returns an awaitable if async work is required.

### request

```python
request(
    route,
    payload,
    serverless_request = None,
    cost: int = 100,
    retry: bool = True,
    stream: bool = False
)
```

Forward requests to the endpoint

**Property (type: Any; required)**

route

**Property (type: Any; required)**

payload

**Property (type: Any)**

serverless\_request

**Property (type: int)**

cost

**Property (type: bool)**

retry

**Property (type: bool)**

stream
