> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/hasprotectedcontent](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/hasprotectedcontent)

# hasProtectedContent

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset contains protected content.

## Declaration

```swift
static var hasProtectedContent: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

Assets that contain protected content may not be playable without successful authorization, even if the value of its [isPlayable](../avasset/isplayable.md) property is [true](https://developer.apple.com/documentation/swift/true).
