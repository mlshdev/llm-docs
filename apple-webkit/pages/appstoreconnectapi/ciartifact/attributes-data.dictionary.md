> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciartifact/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciartifact/attributes-data.dictionary)

# CiArtifact.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe the output of an artifact resource.

## Declaration

```
object CiArtifact.Attributes
```

## Properties

- `downloadUrl` — `uri`: The URL you use to download the Xcode Cloud build artifact.
- `fileName` — `string`: The artifact’s filename as a string.
- `fileSize` — `integer`: An integer value that represents the artifact’s file size.
- `fileType` — `string`: A string that describes the type of the artifact.
  **Allowed values:** `ARCHIVE`, `ARCHIVE_EXPORT`, `LOG_BUNDLE`, `RESULT_BUNDLE`, `TEST_PRODUCTS`, `XCODEBUILD_PRODUCTS`, `STAPLED_NOTARIZED_ARCHIVE`

## Mentioned In

- [App Store Connect API 3.2 release notes](../app-store-connect-api-3-2-release-notes.md)
