> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary)

# CiBuildRunCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data element of the request you use to start a new Xcode Cloud build.

## Declaration

```
object CiBuildRunCreateRequest.Data
```

## Properties

- `attributes` — `CiBuildRunCreateRequest.Data.Attributes`: The attributes that describe the request that creates a Build Runs resource.
- `relationships` — `CiBuildRunCreateRequest.Data.Relationships`: The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciBuildRuns`

## Topics

### Objects

- [CiBuildRunCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
