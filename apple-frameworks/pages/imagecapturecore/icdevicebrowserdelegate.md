> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate)

# ICDeviceBrowserDelegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for managing the addition and removal of devices and responding to device changes.

## Declaration

```swift
protocol ICDeviceBrowserDelegate : NSObjectProtocol
```

## Topics

### Adding and Removing Devices

- [deviceBrowser(\_:didAdd:moreComing:)](icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowser(\_:didRemove:moreGoing:)](icdevicebrowserdelegate/devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.
- [deviceBrowserDidEnumerateLocalDevices(\_:)](icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser(\_:didAdd:moreComing:)](icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

### Responding to Device Changes

- [deviceBrowser(\_:requestsSelect:)](icdevicebrowserdelegate/devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser(\_:deviceDidChangeName:)](icdevicebrowserdelegate/devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.
- [deviceBrowser(\_:deviceDidChangeSharingState:)](icdevicebrowserdelegate/devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

### Instance Methods

- [deviceBrowserDidCancelSuspendOperations(\_:)](icdevicebrowserdelegate/devicebrowserdidcancelsuspendoperations%28__%29.md)
- [deviceBrowserDidResumeOperations(\_:)](icdevicebrowserdelegate/devicebrowserdidresumeoperations%28__%29.md)
- [deviceBrowserDidSuspendOperations(\_:)](icdevicebrowserdelegate/devicebrowserdidsuspendoperations%28__%29.md)
- [deviceBrowserWillSuspendOperations(\_:)](icdevicebrowserdelegate/devicebrowserwillsuspendoperations%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Device Browsing

- [delegate](icdevicebrowser/delegate.md): The object that acts as the delegate of the device browser.

# ICDeviceBrowserDelegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for managing the addition and removal of devices and responding to device changes.

## Declaration

```objectivec
@protocol ICDeviceBrowserDelegate <NSObject>
```

## Topics

### Adding and Removing Devices

- [deviceBrowser:didAddDevice:moreComing:](icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowser:didRemoveDevice:moreGoing:](icdevicebrowserdelegate/devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.
- [deviceBrowserDidEnumerateLocalDevices:](icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser:didAddDevice:moreComing:](icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

### Responding to Device Changes

- [deviceBrowser:requestsSelectDevice:](icdevicebrowserdelegate/devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser:deviceDidChangeName:](icdevicebrowserdelegate/devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.
- [deviceBrowser:deviceDidChangeSharingState:](icdevicebrowserdelegate/devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

### Instance Methods

- [deviceBrowserDidCancelSuspendOperations:](icdevicebrowserdelegate/devicebrowserdidcancelsuspendoperations%28__%29.md)
- [deviceBrowserDidResumeOperations:](icdevicebrowserdelegate/devicebrowserdidresumeoperations%28__%29.md)
- [deviceBrowserDidSuspendOperations:](icdevicebrowserdelegate/devicebrowserdidsuspendoperations%28__%29.md)
- [deviceBrowserWillSuspendOperations:](icdevicebrowserdelegate/devicebrowserwillsuspendoperations%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Device Browsing

- [delegate](icdevicebrowser/delegate.md): The object that acts as the delegate of the device browser.
