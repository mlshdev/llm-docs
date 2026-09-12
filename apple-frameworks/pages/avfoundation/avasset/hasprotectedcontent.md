> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/hasprotectedcontent](https://developer.apple.com/documentation/avfoundation/avasset/hasprotectedcontent)

# hasProtectedContent (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 16.0) · iPadOS 4.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether the asset contains protected content.

> Load the value of [hasProtectedContent](../avpartialasyncproperty/hasprotectedcontent.md) asynchronously instead.

## Declaration

```swift
var hasProtectedContent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Assets that contain protected content may not be playable without successful authorization, even if the value of its [isPlayable](isplayable.md) property is [true](https://developer.apple.com/documentation/swift/true).

# hasProtectedContent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset contains protected content.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasProtectedContent;
```

<a id="Discussion"></a>

## Discussion

Assets that contain protected content may not be playable without successful authorization, even if the value of its [playable](isplayable.md) property is [true](https://developer.apple.com/documentation/swift/true).
