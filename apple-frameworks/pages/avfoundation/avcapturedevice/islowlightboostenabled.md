> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/islowlightboostenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/islowlightboostenabled)

# isLowLightBoostEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.

## Declaration

```swift
var isLowLightBoostEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates whether the capture device currently enhancing images to improve quality due to low light conditions. When this property is [true](https://developer.apple.com/documentation/swift/true), the capture device has switched into a special mode in which it perceives more light in images.

This property is key-value observable.

## See Also

### Configuring low light settings

- [isLowLightBoostSupported](islowlightboostsupported.md): A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.
- [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.

# lowLightBoostEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLowLightBoostEnabled) BOOL lowLightBoostEnabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates whether the capture device currently enhancing images to improve quality due to low light conditions. When this property is [true](https://developer.apple.com/documentation/swift/true), the capture device has switched into a special mode in which it perceives more light in images.

This property is key-value observable.

## See Also

### Configuring low light settings

- [lowLightBoostSupported](islowlightboostsupported.md): A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.
- [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.
