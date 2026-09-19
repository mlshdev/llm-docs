> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isconstantcolorfallbackphotodeliveryenabled

# isConstantColorFallbackPhotoDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.

## Declaration

```swift
var isConstantColorFallbackPhotoDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to receive a fallback photo that you can use if the main constant color photo’s confidence level doesn’t meet your requirement.

## See Also

### Configuring constant color

- [isConstantColorEnabled](isconstantcolorenabled.md): A Boolean value that indicates whether to capture the photo with constant color.

# constantColorFallbackPhotoDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.

## Declaration

```objectivec
@property (nonatomic, getter=isConstantColorFallbackPhotoDeliveryEnabled) BOOL constantColorFallbackPhotoDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to receive a fallback photo that you can use if the main constant color photo’s confidence level doesn’t meet your requirement.

## See Also

### Configuring constant color

- [constantColorEnabled](isconstantcolorenabled.md): A Boolean value that indicates whether to capture the photo with constant color.
