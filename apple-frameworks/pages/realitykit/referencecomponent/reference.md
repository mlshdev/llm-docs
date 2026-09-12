> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/referencecomponent/reference](https://developer.apple.com/documentation/realitykit/referencecomponent/reference)

# reference

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The root entity of the referenced entity file.

## Declaration

```swift
var reference: Entity? { get }
```

<a id="discussion"></a>

## Discussion

This property returns `nil` when the referenced entity isn’t loaded.
