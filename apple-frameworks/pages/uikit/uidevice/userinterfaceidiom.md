> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/userinterfaceidiom](https://developer.apple.com/documentation/uikit/uidevice/userinterfaceidiom)

# userInterfaceIdiom (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of interface to use on the current device.

## Declaration

```swift
var userInterfaceIdiom: UIUserInterfaceIdiom { get }
```

<a id="Discussion"></a>

## Discussion

For universal applications, you can use this property to tailor the behavior of your application for a specific type of device. For example, iPhone and iPad devices have different screen sizes, so you might want to create different views and controls based on the type of the current device.

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [model](model.md): The model of the device.
- [localizedModel](localizedmodel.md): The model of the device as a localized string.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

# userInterfaceIdiom (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of interface to use on the current device.

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserInterfaceIdiom userInterfaceIdiom;
```

<a id="Discussion"></a>

## Discussion

For universal applications, you can use this property to tailor the behavior of your application for a specific type of device. For example, iPhone and iPad devices have different screen sizes, so you might want to create different views and controls based on the type of the current device.

## See Also

### Identifying the device and operating system

- [name](name.md): The name of the device.
- [systemName](systemname.md): The name of the operating system running on the device.
- [systemVersion](systemversion.md): The current version of the operating system.
- [model](model.md): The model of the device.
- [localizedModel](localizedmodel.md): The model of the device as a localized string.
- [identifierForVendor](identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.
