> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerradius-swift.struct/containerconcentric(minimum:)](https://developer.apple.com/documentation/uikit/uicornerradius-swift.struct/containerconcentric(minimum:))

# containerConcentric(minimum:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A dynamic corner radius calculated using the geometry of the view and its container limited to a minimum radius.

## Declaration

```swift
static func containerConcentric(minimum: CGFloat? = nil) -> UICornerRadius
```

## Parameters

- `minimum`: An optional float value that represents a minimum radius, expressed in points.

## See Also

### Defining a radius

- [fixed(\_:)](fixed%28__%29.md): Creates a radius that represents a fixed corner radius in points.
