> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/islowlightvideonoisereductionenabled](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/islowlightvideonoisereductionenabled)

# isLowLightVideoNoiseReductionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates whether low light video noise reduction is enabled for the current session.

## Declaration

```swift
var isLowLightVideoNoiseReductionEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A `BOOL` indicating whether low light video noise reduction is enabled on the connection. To set this property directly, first set [automaticallyEnablesLowLightVideoNoiseReduction](automaticallyenableslowlightvideonoisereduction.md) to `false`; setting this property while [automaticallyEnablesLowLightVideoNoiseReduction](automaticallyenableslowlightvideonoisereduction.md) is `true` throws an `NSInvalidArgumentException`. This property may only be set to `true` if the connection’s [isLowLightVideoNoiseReductionSupported](islowlightvideonoisereductionsupported.md) property returns `true`, otherwise an `NSInvalidArgumentException` is thrown. This property is key-value observable.

# lowLightVideoNoiseReductionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates whether low light video noise reduction is enabled for the current session.

## Declaration

```objectivec
@property (nonatomic, getter=isLowLightVideoNoiseReductionEnabled) BOOL lowLightVideoNoiseReductionEnabled;
```

<a id="discussion"></a>

## Discussion

A `BOOL` indicating whether low light video noise reduction is enabled on the connection. To set this property directly, first set [automaticallyEnablesLowLightVideoNoiseReduction](automaticallyenableslowlightvideonoisereduction.md) to `false`; setting this property while [automaticallyEnablesLowLightVideoNoiseReduction](automaticallyenableslowlightvideonoisereduction.md) is `true` throws an `NSInvalidArgumentException`. This property may only be set to `true` if the connection’s [lowLightVideoNoiseReductionSupported](islowlightvideonoisereductionsupported.md) property returns `true`, otherwise an `NSInvalidArgumentException` is thrown. This property is key-value observable.
