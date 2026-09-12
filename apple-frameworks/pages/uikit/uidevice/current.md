> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/current](https://developer.apple.com/documentation/uikit/uidevice/current)

# current (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that represents the current device.

## Declaration

```swift
class var current: UIDevice { get }
```

<a id="return-value"></a>

## Return Value

A singleton object that represents the current device.

<a id="Discussion"></a>

## Discussion

You access the properties of the returned [UIDevice](../uidevice.md) instance to obtain information about the device. You must instantiate the [UIDevice](../uidevice.md) instance before registering to receive device notifications.

# currentDevice (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that represents the current device.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIDevice * currentDevice;
```

<a id="return-value"></a>

## Return Value

A singleton object that represents the current device.

<a id="Discussion"></a>

## Discussion

You access the properties of the returned [UIDevice](../uidevice.md) instance to obtain information about the device. You must instantiate the [UIDevice](../uidevice.md) instance before registering to receive device notifications.
