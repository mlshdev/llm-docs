> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/ismultitaskingcameraaccesssupported](https://developer.apple.com/documentation/avfoundation/avcapturesession/ismultitaskingcameraaccesssupported)

# isMultitaskingCameraAccessSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session supports using the camera while multitasking.

## Declaration

```swift
var isMultitaskingCameraAccessSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Query this property to determine whether you can use the camera while multitasking by setting the state of the [isMultitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md) property to `true`.

In iOS and iPadOS, this property is `true` for any of the following cases:

- The app runs on an iPad that supports Stage Manager with an extended display.
- The app links against iOS 18 or later and uses `voip` as one of its [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md).
- The app has the [com.apple.developer.avfoundation.multitasking-camera-access](../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement.

In tvOS, this property is always `true`.

> **Note**

>  This property is key-value observable. If the value changes from `true` to `false`, the value of [isMultitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md) also changes to `false`.

To learn about best practices for using the camera while multitasking, see [Accessing the camera while multitasking on iPad](../../avkit/accessing-the-camera-while-multitasking-on-ipad.md).

## See Also

### Configuring multitasking

- [isMultitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md): A Boolean value that indicates whether the capture session enables access to the camera while multitasking.

# multitaskingCameraAccessSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session supports using the camera while multitasking.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMultitaskingCameraAccessSupported) BOOL multitaskingCameraAccessSupported;
```

<a id="discussion"></a>

## Discussion

Query this property to determine whether you can use the camera while multitasking by setting the state of the [multitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md) property to `true`.

In iOS and iPadOS, this property is `true` for any of the following cases:

- The app runs on an iPad that supports Stage Manager with an extended display.
- The app links against iOS 18 or later and uses `voip` as one of its [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md).
- The app has the [com.apple.developer.avfoundation.multitasking-camera-access](../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement.

In tvOS, this property is always `true`.

> **Note**

>  This property is key-value observable. If the value changes from `true` to `false`, the value of [multitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md) also changes to `false`.

To learn about best practices for using the camera while multitasking, see [Accessing the camera while multitasking on iPad](../../avkit/accessing-the-camera-while-multitasking-on-ipad.md).

## See Also

### Configuring multitasking

- [multitaskingCameraAccessEnabled](ismultitaskingcameraaccessenabled.md): A Boolean value that indicates whether the capture session enables access to the camera while multitasking.
