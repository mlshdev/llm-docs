> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciissueresponse](https://developer.apple.com/documentation/appstoreconnectapi/ciissueresponse)

# CiIssueResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single issue from an Xcode Cloud build action.

## Declaration

```
object CiIssueResponse
```

## Properties

- `data` — `CiIssue` (required): The resource data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiIssue](ciissue.md): A warning or error produced during an Xcode Cloud build action, associated with a source file location.
- [FileLocation](filelocation.md): A source code location reference indicating the file path, line number, and column of an issue in an Xcode Cloud build.
