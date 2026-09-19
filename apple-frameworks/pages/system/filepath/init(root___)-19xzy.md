> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/init(root:_:)-19xzy

# init(root:\_:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a file path from an optional root and a slice of another path’s components.

## Declaration

```swift
init(root: FilePath.Root?, _ components: FilePath.ComponentView.SubSequence)
```
