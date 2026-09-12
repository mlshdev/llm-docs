> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/isavailable](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/isavailable)

# isAvailable

**Framework:** Image Playground  
**Kind:** Type Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

A Boolean value that indicates whether image generation is available on the current device.

## Declaration

```swift
@objc(available) nonisolated dynamic class var isAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when the current device supports image generation. A device might not support this feature if the device or system doesn’t have the resources necessary to generate the images.
