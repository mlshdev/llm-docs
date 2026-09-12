> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciissue/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciissue/attributes-data.dictionary)

# CiIssue.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe an Issues resource.

## Declaration

```
object CiIssue.Attributes
```

## Properties

- `category` — `string`: ​A string representing the issue’s category; for example, the name of the build phase where the issue occurred.
- `fileSource` — `FileLocation`: The file and line number where Xcode Cloud encountered an issue.
- `issueType` — `string`: A string that indicates what kind of issue Xcode Cloud encountered.
  **Allowed values:** `ANALYZER_WARNING`, `ERROR`, `TEST_FAILURE`, `WARNING`
- `message` — `string`: Information about the issue that occurred.
