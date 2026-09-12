> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cixcodeversion/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversion/attributes-data.dictionary)

# CiXcodeVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe an Xcode Versions resource.

## Declaration

```
object CiXcodeVersion.Attributes
```

## Properties

- `name` — `string`: The name of the Xcode version.
- `testDestinations` — `[CiXcodeVersion.Attributes.TestDestinations]`: A list of the Xcode version’s available test destinations.
- `version` — `string`: The Xcode version.

## Topics

### Objects

- [CiXcodeVersion.Attributes.TestDestinations](attributes-data.dictionary/testdestinations-data.dictionary.md): The test destinations available for an Xcode version.

## See Also

### Objects

- [CiXcodeVersion.Relationships](relationships-data.dictionary.md): The relationships of the Xcode Versions resource you included in the request and those on which you can operate.
