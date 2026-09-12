> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/localizedmodel](https://developer.apple.com/documentation/uikit/uidevice/localizedmodel)

# localizedModel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The model of the device as a localized string.

## Declaration

```swift
var localizedModel: String { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that contains a localized version of the string returned from [model](model.md).

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [model](model.md): The model of the device.
- [userInterfaceIdiom](userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

# localizedModel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The model of the device as a localized string.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * localizedModel;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that contains a localized version of the string returned from [model](model.md).

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [model](model.md): The model of the device.
- [userInterfaceIdiom](userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.
