> Pinned source for Vast.ai main: [sdk/python/serverless/endpoint.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/serverless/endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/endpoint

# Endpoint

## Import

```python
from vastai import Endpoint
```

## Constructor

```python
Endpoint(
    client,
    name,
    id,
    api_key
)
```

**Property (type: Any; required)**

client

**Property (type: Any; required)**

name

**Property (type: Any; required)**

id

**Property (type: Any; required)**

api\_key

## Methods

### request

```python
request(
    route,
    payload,
    serverless_request = None,
    cost: int = 100,
    retry: bool = True,
    stream: bool = False,
    timeout: float = None,
    session: 'Session' = None
)
```

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

**Property (type: float)**

timeout

**Property (type: 'Session')**

session

### close\_session

```python
close_session(session: 'Session')
```

**Property (type: 'Session'; required)**

session

### session\_healthcheck

```python
async session_healthcheck(session: 'Session')
```

**Property (type: 'Session'; required)**

session

### get\_session

```python
get_session(session_id: int, session_auth: dict, timeout: float = 10)
```

**Property (type: int; required)**

session\_id

**Property (type: dict; required)**

session\_auth

**Property (type: float)**

timeout

### session

```python
session(
    cost: int = 100,
    lifetime: float = 60,
    on_close_route: str = None,
    on_close_payload: dict = None,
    timeout: float = None
) -> 'Session'
```

**Property (type: int)**

cost

**Property (type: float)**

lifetime

**Property (type: str)**

on\_close\_route

**Property (type: dict)**

on\_close\_payload

**Property (type: float)**

timeout

### get\_workers

```python
get_workers()
```
