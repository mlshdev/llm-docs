> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildupdaterequest/data-data.dictionary/attributes-data.dictionary)

# BuildUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Attributes whose values you’re changing as part of the update request.

## Declaration

```
object BuildUpdateRequest.Data.Attributes
```

## Properties

- `expired` — `boolean`: A Boolean value that indicates if the build has expired. An expired build is unavailable for testing.
- `usesNonExemptEncryption` — `boolean`: A Boolean value that indicates whether the build uses non-exempt encryption.

## See Also

### Objects

- [BuildUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
