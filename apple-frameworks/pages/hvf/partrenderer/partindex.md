> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hvf/partrenderer/partindex

# partIndex

**Framework:** hvf  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The unique identifier of the part to be rendered. Setting this resets the parameters property to default values (an empty part parameter tree). Any previously captured PartParameters or AxisValues are invalid.

## Declaration

```swift
var partIndex: Int { get set }
```
