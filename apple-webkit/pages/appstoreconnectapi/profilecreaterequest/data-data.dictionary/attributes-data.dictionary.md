> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profilecreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/profilecreaterequest/data-data.dictionary/attributes-data.dictionary)

# ProfileCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

Attributes that you set that describe the new resource.

## Declaration

```
object ProfileCreateRequest.Data.Attributes
```

## Properties

- `name` — `string` (required):
- `profileType` — `string` (required): **Allowed values:** `IOS_APP_DEVELOPMENT`, `IOS_APP_STORE`, `IOS_APP_ADHOC`, `IOS_APP_INHOUSE`, `MAC_APP_DEVELOPMENT`, `MAC_APP_STORE`, `MAC_APP_DIRECT`, `TVOS_APP_DEVELOPMENT`, `TVOS_APP_STORE`, `TVOS_APP_ADHOC`, `TVOS_APP_INHOUSE`, `MAC_CATALYST_APP_DEVELOPMENT`, `MAC_CATALYST_APP_STORE`, `MAC_CATALYST_APP_DIRECT`

## See Also

### Objects

- [ProfileCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
