> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice](https://developer.apple.com/documentation/imagecapturecore/icdevice)

# ICDevice (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An abstract object that represents a device.

## Declaration

```swift
class ICDevice
```

<a id="overview"></a>

## Overview

The device browser uses the concrete subclasses [ICCameraDevice](iccameradevice.md) and [ICScannerDevice](icscannerdevice.md) to represent the cameras and scanners it finds.

## Topics

### Identifying a Device

- [name](icdevice/name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](icdevice/productkind.md): The device’s type.
- [icon](icdevice/icon.md): The device’s icon image.
- [uuidString](icdevice/uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](icdevice/persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](icdevice/serialnumberstring.md): The device’s serial number.

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

### Inspecting a Device’s Transport Type

- [transportType](icdevice/transporttype.md): The hardware connection type the device is using.
- [ICDeviceTransport](icdevicetransport.md): The hardware connection types a device can use.

### Inspecting a Device’s Capabilities

- [capabilities](icdevice/capabilities.md): The capabilities of the device as reported by the device module.
- [ICDeviceCapability](icdevicecapability.md): Constants that describe the capabilities of a camera.
- [ICSessionOptions](icsessionoptions.md): Session options for altering the delivery of the device contents.

### Subscribing to Device Status Notifications

- [ICDeviceStatus](icdevicestatus.md): The status types that a device might deliver while in use.

### Managing a Device

- [delegate](icdevice/delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](icdevice/hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession()](icdevice/requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSession(options:completion:)](icdevice/requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage(\_:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:)](icdevice/requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSession()](icdevice/requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSession(options:completion:)](icdevice/requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject()](icdevice/requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEject(completion:)](icdevice/requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.

### Configuring a Device’s Characteristics

- [userData](icdevice/userdata.md): A bookkeeping object for client convenience.
- [autolaunchApplicationPath](icdevice/autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.
- [isRemote](icdevice/isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

### Deprecated Symbols

- [requestEjectOrDisconnect()](icdevice/requestejectordisconnect%28%29.md): Deprecated. Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestYield()](icdevice/requestyield%28%29.md): Deprecated. Requests that device module in control of this device yield control.
- [moduleExecutableArchitecture](icdevice/moduleexecutablearchitecture.md): Deprecated. The executable architecture of the device module servicing the requests.

### Instance Properties

- [systemSymbolName](icdevice/systemsymbolname.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICCameraDevice](iccameradevice.md)
- [ICScannerDevice](icscannerdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Browsing Devices

- [isBrowsing](icdevicebrowser/isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](icdevicebrowser/devices.md): All devices found by the browser.
- [browsedDeviceTypeMask](icdevicebrowser/browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start()](icdevicebrowser/start%28%29.md): Tells the delegate to start looking for devices.
- [stop()](icdevicebrowser/stop%28%29.md): Tells the delegate to stop looking for devices.

# ICDevice (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An abstract object that represents a device.

## Declaration

```objectivec
@interface ICDevice : NSObject
```

<a id="overview"></a>

## Overview

The device browser uses the concrete subclasses [ICCameraDevice](iccameradevice.md) and [ICScannerDevice](icscannerdevice.md) to represent the cameras and scanners it finds.

## Topics

### Identifying a Device

- [name](icdevice/name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](icdevice/productkind.md): The device’s type.
- [icon](icdevice/icon.md): The device’s icon image.
- [UUIDString](icdevice/uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](icdevice/persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](icdevice/serialnumberstring.md): The device’s serial number.

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

### Inspecting a Device’s Transport Type

- [transportType](icdevice/transporttype.md): The hardware connection type the device is using.
- [ICDeviceTransport](icdevicetransport.md): The hardware connection types a device can use.

### Inspecting a Device’s Capabilities

- [capabilities](icdevice/capabilities.md): The capabilities of the device as reported by the device module.
- [ICDeviceCapability](icdevicecapability.md): Constants that describe the capabilities of a camera.
- [ICSessionOptions](icsessionoptions.md): Session options for altering the delivery of the device contents.

### Subscribing to Device Status Notifications

- [ICDeviceStatus](icdevicestatus.md): The status types that a device might deliver while in use.

### Managing a Device

- [delegate](icdevice/delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](icdevice/hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession](icdevice/requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSessionWithOptions:completion:](icdevice/requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:](icdevice/requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSession](icdevice/requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSessionWithOptions:completion:](icdevice/requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject](icdevice/requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEjectWithCompletion:](icdevice/requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.

### Configuring a Device’s Characteristics

- [userData](icdevice/userdata.md): A bookkeeping object for client convenience.
- [autolaunchApplicationPath](icdevice/autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.
- [remote](icdevice/isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

### Deprecated Symbols

- [requestEjectOrDisconnect](icdevice/requestejectordisconnect%28%29.md): Deprecated. Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestYield](icdevice/requestyield%28%29.md): Deprecated. Requests that device module in control of this device yield control.
- [moduleExecutableArchitecture](icdevice/moduleexecutablearchitecture.md): Deprecated. The executable architecture of the device module servicing the requests.

### Instance Properties

- [systemSymbolName](icdevice/systemsymbolname.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICCameraDevice](iccameradevice.md)
- [ICScannerDevice](icscannerdevice.md)

## See Also

### Browsing Devices

- [browsing](icdevicebrowser/isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](icdevicebrowser/devices.md): All devices found by the browser.
- [browsedDeviceTypeMask](icdevicebrowser/browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start](icdevicebrowser/start%28%29.md): Tells the delegate to start looking for devices.
- [stop](icdevicebrowser/stop%28%29.md): Tells the delegate to stop looking for devices.
