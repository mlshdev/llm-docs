> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/hasprotectedcontent](https://developer.apple.com/documentation/avfoundation/avcomposition/hasprotectedcontent)

# hasProtectedContent

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset contains protected content.

## Declaration

```swift
var hasProtectedContent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Assets that contain protected content may not be playable without successful authorization, even if the value of its [isPlayable](../avasset/isplayable.md) property is [true](https://developer.apple.com/documentation/swift/true).
