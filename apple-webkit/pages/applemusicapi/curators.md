> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/curators](https://developer.apple.com/documentation/applemusicapi/curators)

# Curators

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a curator.

## Declaration

```
object Curators
```

## Properties

- `id` — `string` (required): The identifier for the curator.
- `type` — `string` (required): This value must always be `curators`.
  **Allowed values:** `curators`
- `href` — `string` (required): The relative location for the curator resource.
- `attributes` — `Curators.Attributes`: The attributes for the curator.
- `relationships` — `Curators.Relationships`: The relationships for the curator.

## Topics

### Related Objects

- [Curators.Attributes](curators/attributes-data.dictionary.md): The attributes for a curator resource.
- [Curators.Relationships](curators/relationships-data.dictionary.md): The relationships for a curator resource.

## See Also

### Handling the Response

- [AppleCurators](applecurators.md): A resource object that represents an Apple curator.
- [AppleCuratorsResponse](applecuratorsresponse.md): The response to a request for Apple curators.
- [CuratorsResponse](curatorsresponse.md): The response to a request for curators.
