> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isflashscene](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isflashscene)

# isFlashScene (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the scene currently being previewed by the camera warrants use of the flash.

## Declaration

```swift
var isFlashScene: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value changes depending on the scene currently visible to the camera. For example, you might use this property to highlight the flash control in your app’s camera UI, indicating to the user that the scene is dark enough that enabling the flash might be desirable.

If the photo capture output’s [supportedFlashModes](supportedflashmodes-4u69s.md) value is [AVCaptureDevice.FlashMode.off](../avcapturedevice/flashmode-swift.enum/off.md), this property’s value is always [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Monitoring the visible scene

- [photoSettingsForSceneMonitoring](photosettingsforscenemonitoring.md): A photo settings object that controls how the photo output detects and handles automatic flash and stabilization modes.

# isFlashScene (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the scene currently being previewed by the camera warrants use of the flash.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isFlashScene;
```

<a id="Discussion"></a>

## Discussion

This property’s value changes depending on the scene currently visible to the camera. For example, you might use this property to highlight the flash control in your app’s camera UI, indicating to the user that the scene is dark enough that enabling the flash might be desirable.

If the photo capture output’s [supportedFlashModes](supportedflashmodes-4u69s.md) value is [AVCaptureFlashModeOff](../avcapturedevice/flashmode-swift.enum/off.md), this property’s value is always [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Monitoring the visible scene

- [photoSettingsForSceneMonitoring](photosettingsforscenemonitoring.md): A photo settings object that controls how the photo output detects and handles automatic flash and stabilization modes.
