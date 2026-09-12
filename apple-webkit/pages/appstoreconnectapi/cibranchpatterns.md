> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibranchpatterns](https://developer.apple.com/documentation/appstoreconnectapi/cibranchpatterns)

# CiBranchPatterns

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

Case-sensitive patterns Xcode Cloud uses to determine if a change meets branch names you configure for a workflow’s start condition.

## Declaration

```
object CiBranchPatterns
```

## Properties

- `isAllMatch` — `boolean`: ​A Boolean value that indicates whether a start condition’s settings apply to all branches. If `true`, the `patterns` attribute isn’t expected. If `false`, the `patterns` attribute is required.
- `patterns` — `[CiBranchPatterns.Patterns]`: The list of case-sensitive patterns Xcode Cloud uses to determine if a change meets branch names you configure for a workflow’s start condition.

## Topics

### Objects

- [CiBranchPatterns.Patterns](cibranchpatterns/patterns-data.dictionary.md): A case-sensitive pattern Xcode Cloud uses to determine if a change meets branch names you configure for a workflow’s start condition.
