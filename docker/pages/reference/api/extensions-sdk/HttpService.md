> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/HttpService.md](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/content/reference/api/extensions-sdk/HttpService.md)

# Interface: HttpService

**`Since`**

0.2.0

## Methods

### get

▸ **get**(`url`): `Promise`<`unknown`>

Performs an HTTP GET request to a backend service.

```typescript
ddClient.extension.vm.service
 .get("/some/service")
 .then((value: any) => console.log(value)
```

#### Parameters

| Name  | Type     | Description                     |
| :---- | :------- | :------------------------------ |
| `url` | `string` | The URL of the backend service. |

#### Returns

`Promise`<`unknown`>

***

### post

▸ **post**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP POST request to a backend service.

```typescript
ddClient.extension.vm.service
 .post("/some/service", { ... })
 .then((value: any) => console.log(value));
```

#### Parameters

| Name   | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `url`  | `string` | The URL of the backend service. |
| `data` | `any`    | The body of the request.        |

#### Returns

`Promise`<`unknown`>

***

### put

▸ **put**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PUT request to a backend service.

```typescript
ddClient.extension.vm.service
 .put("/some/service", { ... })
 .then((value: any) => console.log(value));
```

#### Parameters

| Name   | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `url`  | `string` | The URL of the backend service. |
| `data` | `any`    | The body of the request.        |

#### Returns

`Promise`<`unknown`>

***

### patch

▸ **patch**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PATCH request to a backend service.

```typescript
ddClient.extension.vm.service
 .patch("/some/service", { ... })
 .then((value: any) => console.log(value));
```

#### Parameters

| Name   | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `url`  | `string` | The URL of the backend service. |
| `data` | `any`    | The body of the request.        |

#### Returns

`Promise`<`unknown`>

***

### delete

▸ **delete**(`url`): `Promise`<`unknown`>

Performs an HTTP DELETE request to a backend service.

```typescript
ddClient.extension.vm.service
 .delete("/some/service")
 .then((value: any) => console.log(value));
```

#### Parameters

| Name  | Type     | Description                     |
| :---- | :------- | :------------------------------ |
| `url` | `string` | The URL of the backend service. |

#### Returns

`Promise`<`unknown`>

***

### head

▸ **head**(`url`): `Promise`<`unknown`>

Performs an HTTP HEAD request to a backend service.

```typescript
ddClient.extension.vm.service
 .head("/some/service")
 .then((value: any) => console.log(value));
```

#### Parameters

| Name  | Type     | Description                     |
| :---- | :------- | :------------------------------ |
| `url` | `string` | The URL of the backend service. |

#### Returns

`Promise`<`unknown`>

***

### request

▸ **request**(`config`): `Promise`<`unknown`>

Performs an HTTP request to a backend service.

```typescript
ddClient.extension.vm.service
 .request({ url: "/url", method: "GET", headers: { 'header-key': 'header-value' }, data: { ... }})
 .then((value: any) => console.log(value));
```

#### Parameters

| Name     | Type                                                                                   | Description                     |
| :------- | :------------------------------------------------------------------------------------- | :------------------------------ |
| `config` | [`RequestConfig`](https://docs.docker.com/reference/api/extensions-sdk/RequestConfig/) | The URL of the backend service. |

#### Returns

`Promise`<`unknown`>
