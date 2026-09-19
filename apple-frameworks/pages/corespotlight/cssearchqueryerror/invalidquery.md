> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/cssearchqueryerror/invalidquery

# invalidQuery

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The query is syntactically invalid or specifies items that your app doesn’t have access to.

## Declaration

```swift
static var invalidQuery: CSSearchQueryError.Code { get }
```

## See Also

### Getting the error codes

- [cancelled](cancelled.md): The query stopped because someone canceled it.
- [indexUnreachable](indexunreachable.md): The index is unreachable.
- [unknown](unknown.md): An unknown error occurred.
