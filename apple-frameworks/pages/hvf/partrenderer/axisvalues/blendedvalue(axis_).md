> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/axisvalues/blendedvalue(axis:)](https://developer.apple.com/documentation/hvf/partrenderer/axisvalues/blendedvalue(axis:))

# blendedValue(axis:)

**Framework:** hvf  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The final axis values applied to this subpart after the part has been rendered This is useful for detecting axes going out of range (-1.0…1.0)

## Declaration

```swift
func blendedValue(axis index: Int) -> Double
```
