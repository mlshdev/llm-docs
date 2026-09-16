> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/buildbundlefilesize/attributes-data.dictionary

# BuildBundleFileSize.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The attributes that describe a Build Bundle File Sizes resource.

## Declaration

```
object BuildBundleFileSize.Attributes
```

## Properties

- `deviceModel` — `string`: A string that identifies the Apple device model.
- `downloadBytes` — `integer`: An integer value that represents the download size of the build bundle in bytes.
- `installBytes` — `integer`: An integer value that represents the installation size of the build bundle in bytes.
- `osVersion` — `string`: A string that identifies the OS version supported by the app or App Clip.
