> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/promisesapi/promisesapi](https://developer.apple.com/documentation/cktooljs/promisesapi/promisesapi)

# PromisesApi

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Initializer  
**Availability:** CKTool JS 1.2.15+

Creates a `PromisesApi` object.

## Declaration

```
new defaultOptions(
	PromisesApiOptions defaultOptions
);
```

## Parameters

- `defaultOptions`: A dictionary as described in the Discussion section.

<a id="Discussion"></a>

## Discussion

You create an instance of `PromisesApi` in order to interact with the API. Methods on this class return promises that complete with a response object.

```javascript
import { PromisesApi } from "@apple/cktool.database";
import { createConfiguration } from "@apple/cktool.target.nodejs";
 
const api = new PromisesApi({
  configuration: createConfiguration(),
  security: { “ManagementTokenAuth”: “YOUR_MANAGEMENT_TOKEN” }
});
```

The `defaultOptions` dictionary has the following properties:

```javascript
dictionary PromisesApiOptions {
  Configuration: configuration;
  Security?: security;
}
```

- `configuration`: The `Configuration` instance created with `createConfiguration`.
- `security`: The dictionary of your authorization tokens.

## See Also

### Initialization

- [PromisesApiOptions](../promisesapioptions.md): A dictionary of options for promises API classes.
- [Security](../security.md): A dictionary of your authorization tokens.
