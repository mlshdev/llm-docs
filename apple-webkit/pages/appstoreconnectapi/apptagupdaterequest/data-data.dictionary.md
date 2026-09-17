> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apptagupdaterequest/data-data.dictionary

# AppTagUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

The data wrapper for an app tag update request, containing the resource type and attributes.

## Declaration

```
object AppTagUpdateRequest.Data
```

## Properties

- `attributes` — `AppTagUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appTags`

## Topics

### Dictionaries

- [AppTagUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The updateable attributes of an app tag, including its territory associations.
