> Pinned source for Vast.ai main: [sdk/python/serverless/serverless.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/serverless/serverless.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/serverless/serverless

# Serverless

## Import

```python
from vastai import Serverless
```

## Constructor

```python
Serverless(
    api_key: Optional[str] = os.environ.get('VAST_API_KEY', None),
    *,
    debug: bool = False,
    instance: str = 'prod',
    connection_limit: int = 500,
    default_request_timeout: float = 600.0,
    max_poll_interval: float = 5.0
)
```

**Property (type: Optional\[str])**

api\_key

**Property (type: bool)**

debug

**Property (type: str)**

instance

**Property (type: int)**

connection\_limit

**Property (type: float)**

default\_request\_timeout

**Property (type: float)**

max\_poll\_interval

## Methods

### is\_open

```python
is_open()
```

### close

```python
async close()
```

### get\_ssl\_context

```python
async get_ssl_context() -> ssl.SSLContext
```

Download Vast.ai root cert and build SSL context (cached).

### get\_endpoint

```python
async get_endpoint(name = '') -> Endpoint
```

**Property (type: Any)**

name

### get\_endpoints

```python
async get_endpoints() -> list[Endpoint]
```

### get\_endpoint\_workers

```python
async get_endpoint_workers(endpoint: Endpoint) -> List[Worker]
```

**Property (type: Endpoint; required)**

endpoint

### get\_endpoint\_session

```python
async get_endpoint_session(
    endpoint,
    session_id: int,
    session_auth: str,
    timeout: float = 10.0
)
```

**Property (type: Any; required)**

endpoint

**Property (type: int; required)**

session\_id

**Property (type: str; required)**

session\_auth

**Property (type: float)**

timeout

### end\_endpoint\_session

```python
async end_endpoint_session(session: Session, timeout: float = 10.0)
```

**Property (type: Session; required)**

session

**Property (type: float)**

timeout

### start\_endpoint\_session

```python
async start_endpoint_session(
    endpoint: Endpoint,
    cost: int = 100,
    lifetime: float = 60,
    on_close_route: str = None,
    on_close_payload: dict = None,
    timeout: float = None
) -> Session
```

**Property (type: Endpoint; required)**

endpoint

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

### queue\_endpoint\_request

```python
queue_endpoint_request(
    endpoint: Endpoint,
    worker_route: str,
    worker_payload: dict,
    session: Session = None,
    serverless_request: Optional[ServerlessRequest] = None,
    cost: int = 100,
    timeout: Optional[float] = None,
    worker_timeout: Optional[float] = 600,
    retry: bool = True,
    max_retries: int = None,
    stream: bool = False
) -> ServerlessRequest
```

Return a Future that will resolve once the request completes.

**Property (type: Endpoint; required)**

endpoint

**Property (type: str; required)**

worker\_route

**Property (type: dict; required)**

worker\_payload

**Property (type: Session)**

session

**Property (type: Optional\[ServerlessRequest])**

serverless\_request

**Property (type: int)**

cost

**Property (type: Optional\[float])**

timeout

**Property (type: Optional\[float])**

worker\_timeout

**Property (type: bool)**

retry

**Property (type: int)**

max\_retries

**Property (type: bool)**

stream
