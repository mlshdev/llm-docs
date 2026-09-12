> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciissue](https://developer.apple.com/documentation/appstoreconnectapi/ciissue)

# CiIssue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A warning or error produced during an Xcode Cloud build action, associated with a source file location.

## Declaration

```
object CiIssue
```

## Properties

- `attributes` — `CiIssue.Attributes`: The attributes that describe the Issues resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an Issues resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciIssues`

## Topics

### Objects

- [CiIssue.Attributes](ciissue/attributes-data.dictionary.md): The attributes that describe an Issues resource.

## See Also

### Objects

- [FileLocation](filelocation.md): A source code location reference indicating the file path, line number, and column of an issue in an Xcode Cloud build.
- [CiIssueResponse](ciissueresponse.md): The response body for endpoints that read a single issue from an Xcode Cloud build action.
