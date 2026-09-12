> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/ui_user_interface_idiom()](https://developer.apple.com/documentation/uikit/ui_user_interface_idiom())

# UI_USER_INTERFACE_IDIOM() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0)

Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).

> If your app runs in iOS 3.2 and later, use [userInterfaceIdiom](uidevice/userinterfaceidiom.md) instead.

## Declaration

```swift
func UI_USER_INTERFACE_IDIOM() -> UIUserInterfaceIdiom
```

<a id="return-value"></a>

## Return Value

[UIUserInterfaceIdiom.phone](uiuserinterfaceidiom/phone.md) if the device is an iPhone or iPod touch or [UIUserInterfaceIdiom.pad](uiuserinterfaceidiom/pad.md) if the device is an iPad.

## See Also

### Getting the current idiom

- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.

# UI_USER_INTERFACE_IDIOM (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0)

Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).

> If your app runs in iOS 3.2 and later, use [userInterfaceIdiom](uidevice/userinterfaceidiom.md) instead.

## Declaration

```objectivec
static UIUserInterfaceIdiom UI_USER_INTERFACE_IDIOM();
```

<a id="return-value"></a>

## Return Value

[UIUserInterfaceIdiomPhone](uiuserinterfaceidiom/phone.md) if the device is an iPhone or iPod touch or [UIUserInterfaceIdiomPad](uiuserinterfaceidiom/pad.md) if the device is an iPad.

## See Also

### Getting the current idiom

- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
