> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isconstantcolorenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isconstantcolorenabled)

# isConstantColorEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to capture the photo with constant color.

## Declaration

```swift
var isConstantColorEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to capture a constant color photo.

> **Important**

>  Attempting to enable constant color capture when a photo output’s [isConstantColorEnabled](../avcapturephotooutput/isconstantcolorenabled.md) is [false](https://developer.apple.com/documentation/swift/false), results in the system throwing an exception.

## See Also

### Configuring constant color

- [isConstantColorFallbackPhotoDeliveryEnabled](isconstantcolorfallbackphotodeliveryenabled.md): A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.

# constantColorEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to capture the photo with constant color.

## Declaration

```objectivec
@property (nonatomic, getter=isConstantColorEnabled) BOOL constantColorEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to capture a constant color photo.

> **Important**

>  Attempting to enable constant color capture when a photo output’s [constantColorEnabled](../avcapturephotooutput/isconstantcolorenabled.md) is [false](https://developer.apple.com/documentation/swift/false), results in the system throwing an exception.

## See Also

### Configuring constant color

- [constantColorFallbackPhotoDeliveryEnabled](isconstantcolorfallbackphotodeliveryenabled.md): A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.
