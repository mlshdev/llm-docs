> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/issupported](https://developer.apple.com/documentation/arkit/arconfiguration/issupported)

# isSupported (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value indicating whether the current device supports this session configuration class.

## Declaration

```swift
class var isSupported: Bool { get }
```

## Mentioned In

- [Verifying Device Support and User Permission](../verifying-device-support-and-user-permission.md)

<a id="Discussion"></a>

## Discussion

Different types of AR experiences (which you configure using concrete [ARConfiguration](../arconfiguration.md) subclasses) can have different hardware requirements.

Before attempting to create an AR configuration, verify that the user’s device supports the configuration you plan to use by checking the [isSupported](issupported.md) property of the corresponding configuration class. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), the current device does not support the requested configuration.

> **Important**

>  All ARKit configurations require an iOS device with an A9 or later processor. If your app otherwise supports other devices and offers augmented reality as a secondary feature, use this property to determine whether to offer AR-based features to the user.
>
> If your app requires ARKit for its core functionality, use the `arkit` key in the [UIRequiredDeviceCapabilities](../../bundleresources/information-property-list/uirequireddevicecapabilities.md) section of your app’s Info.plist to make your app available only on devices that support ARKit.

# isSupported (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value indicating whether the current device supports this session configuration class.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL isSupported;
```

## Mentioned In

- [Verifying Device Support and User Permission](../verifying-device-support-and-user-permission.md)

<a id="Discussion"></a>

## Discussion

Different types of AR experiences (which you configure using concrete [ARConfiguration](../arconfiguration.md) subclasses) can have different hardware requirements.

Before attempting to create an AR configuration, verify that the user’s device supports the configuration you plan to use by checking the [isSupported](issupported.md) property of the corresponding configuration class. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), the current device does not support the requested configuration.

> **Important**

>  All ARKit configurations require an iOS device with an A9 or later processor. If your app otherwise supports other devices and offers augmented reality as a secondary feature, use this property to determine whether to offer AR-based features to the user.
>
> If your app requires ARKit for its core functionality, use the `arkit` key in the [UIRequiredDeviceCapabilities](../../bundleresources/information-property-list/uirequireddevicecapabilities.md) section of your app’s Info.plist to make your app available only on devices that support ARKit.
