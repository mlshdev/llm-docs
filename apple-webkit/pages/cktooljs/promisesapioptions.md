> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/promisesapioptions](https://developer.apple.com/documentation/cktooljs/promisesapioptions)

# PromisesApiOptions

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

A dictionary of options for promises API classes.

## Declaration

```
dictionary PromisesApiOptions {
	Configuration configuration;
	Security? security;
};
```

## Topics

### Instance Properties

- [configuration](promisesapioptions/configuration.md): A `Configuration` instance returned from `createConfiguration`.
- [security](promisesapioptions/security.md): A dictionary of your authorization tokens.

## See Also

### Initialization

- [PromisesApi](promisesapi/promisesapi.md): Creates a `PromisesApi` object.
- [Security](security.md): A dictionary of your authorization tokens.
