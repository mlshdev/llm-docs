> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/islowlightboostsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/islowlightboostsupported)

# isLowLightBoostSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.

## Declaration

```swift
var isLowLightBoostSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You can set the capture device’s [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md) property only if this property is [true](https://developer.apple.com/documentation/swift/true).

This property is key-value observable.

## See Also

### Configuring low light settings

- [isLowLightBoostEnabled](islowlightboostenabled.md): A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.
- [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.

# lowLightBoostSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLowLightBoostSupported) BOOL lowLightBoostSupported;
```

<a id="Discussion"></a>

## Discussion

You can set the capture device’s [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md) property only if this property is [true](https://developer.apple.com/documentation/swift/true).

This property is key-value observable.

## See Also

### Configuring low light settings

- [lowLightBoostEnabled](islowlightboostenabled.md): A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.
- [automaticallyEnablesLowLightBoostWhenAvailable](automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.
