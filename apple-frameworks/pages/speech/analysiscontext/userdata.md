> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/analysiscontext/userdata

# userData

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A dictionary of application-specific contextual information.

## Declaration

```swift
final var userData: [AnalysisContext.UserDataTag : any Sendable] { get set }
```

## See Also

### Preserving app-specific context

- [AnalysisContext.UserDataTag](userdatatag.md)
