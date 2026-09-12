> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/appending(_:)-60fwk](https://developer.apple.com/documentation/system/filepath/appending(_:)-60fwk)

# appending(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Non-mutating version of `append(_:C)`.

## Declaration

```swift
func appending<C>(_ components: C) -> FilePath where C : Collection, C.Element == FilePath.Component
```
