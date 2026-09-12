> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/model](https://developer.apple.com/documentation/uikit/uidevice/model)

# model (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The model of the device.

## Declaration

```swift
var model: String { get }
```

<a id="Discussion"></a>

## Discussion

Possible examples of model strings are “iPhone” and “iPod touch”.

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [localizedModel](localizedmodel.md): The model of the device as a localized string.
- [userInterfaceIdiom](userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

# model (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The model of the device.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * model;
```

<a id="Discussion"></a>

## Discussion

Possible examples of model strings are “iPhone” and “iPod touch”.

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [localizedModel](localizedmodel.md): The model of the device as a localized string.
- [userInterfaceIdiom](userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.
