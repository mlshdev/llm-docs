> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/filelocation](https://developer.apple.com/documentation/appstoreconnectapi/filelocation)

# FileLocation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A source code location reference indicating the file path, line number, and column of an issue in an Xcode Cloud build.

## Declaration

```
object FileLocation
```

## Properties

- `lineNumber` — `integer`: The line number of a file that contains code.
- `path` — `string`: The path to the file that caused an issue.

## See Also

### Objects

- [CiIssue](ciissue.md): A warning or error produced during an Xcode Cloud build action, associated with a source file location.
- [CiIssueResponse](ciissueresponse.md): The response body for endpoints that read a single issue from an Xcode Cloud build action.
