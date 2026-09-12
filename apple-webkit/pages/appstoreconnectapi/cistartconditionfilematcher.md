> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cistartconditionfilematcher](https://developer.apple.com/documentation/appstoreconnectapi/cistartconditionfilematcher)

# CiStartConditionFileMatcher

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A path pattern filter applied to an Xcode Cloud workflow start condition, restricting triggers to changes in specific files or directories.

## Declaration

```
object CiStartConditionFileMatcher
```

## Properties

- `directory` — `string`: The directory you configure for a custom start condition’s Files and Folders setting.
- `fileExtension` — `string`: The file extension you configure for a custom start condition’s Files and Folders setting.
- `fileName` — `string`: The filename you configure for a custom start condition’s Files and Folders setting.
