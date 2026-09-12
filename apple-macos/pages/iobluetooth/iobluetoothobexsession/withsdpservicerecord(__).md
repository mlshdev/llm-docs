> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/withsdpservicerecord(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/withsdpservicerecord(_:))

# withSDPServiceRecord(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a Bluetooth-based OBEX Session using an SDP service record, typically obtained from a device/service browser window controller.

## Declaration

```swift
class func withSDPServiceRecord(_ inSDPServiceRecord: IOBluetoothSDPServiceRecord!) -> Self!
```

## Parameters

- `inSDPServiceRecord`: A valid SDP service record describing the service (and RFCOMM channel) you want to connect to with Bluetooth/OBEX.

<a id="return-value"></a>

## Return Value

An OBEX session representing the device/rfcomm channel found in the service record. nil if we failed.

<a id="Discussion"></a>

## Discussion

Note that this does NOT mean the transport connection was open. It will be opened when OBEXConnect is invoked on the session object.

*IMPORTANT NOTE* In Bluetooth framework version 1.0.0, the session returned will NOT be autoreleased as it should be according to objc convention. This has been changed starting in Bluetooth version 1.0.1 and later, so it WILL be autoreleased upon return, so you will need to retain it if you want to reference it later.

# withSDPServiceRecord: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a Bluetooth-based OBEX Session using an SDP service record, typically obtained from a device/service browser window controller.

## Declaration

```objectivec
+ (instancetype) withSDPServiceRecord:(IOBluetoothSDPServiceRecord *) inSDPServiceRecord;
```

## Parameters

- `inSDPServiceRecord`: A valid SDP service record describing the service (and RFCOMM channel) you want to connect to with Bluetooth/OBEX.

<a id="return-value"></a>

## Return Value

An OBEX session representing the device/rfcomm channel found in the service record. nil if we failed.

<a id="Discussion"></a>

## Discussion

Note that this does NOT mean the transport connection was open. It will be opened when OBEXConnect is invoked on the session object.

*IMPORTANT NOTE* In Bluetooth framework version 1.0.0, the session returned will NOT be autoreleased as it should be according to objc convention. This has been changed starting in Bluetooth version 1.0.1 and later, so it WILL be autoreleased upon return, so you will need to retain it if you want to reference it later.
