> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncandwait(execute:)-52p9n

# asyncAndWait(execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

## Declaration

```swift
func asyncAndWait<T>(execute work: () throws -> T) rethrows -> T
```
