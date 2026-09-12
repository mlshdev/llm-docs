> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/applecurators](https://developer.apple.com/documentation/applemusicapi/applecurators)

# AppleCurators

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents an Apple curator.

## Declaration

```
object AppleCurators
```

## Properties

- `id` — `string` (required): The identifier for the Apple curator.
- `type` — `string` (required): This value must always be `apple-curators`.
  **Allowed values:** `apple-curators`
- `href` — `string` (required): The relative location for the Apple curator resource.
- `attributes` — `AppleCurators.Attributes`: The attributes for the Apple curator.
- `relationships` — `AppleCurators.Relationships`: The relationships for the Apple curator.

## Topics

### Related Objects

- [AppleCurators.Attributes](applecurators/attributes-data.dictionary.md): The attributes for an Apple curator resource.
- [AppleCurators.Relationships](applecurators/relationships-data.dictionary.md): The relationships for an Apple curator resource.

## See Also

### Handling the Response

- [AppleCuratorsResponse](applecuratorsresponse.md): The response to a request for Apple curators.
- [Curators](curators.md): A resource object that represents a curator.
- [CuratorsResponse](curatorsresponse.md): The response to a request for curators.
