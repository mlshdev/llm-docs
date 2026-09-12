> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/withobexsession(_:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/withobexsession(_:))

# withOBEXSession(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Create a new OBEXFileTransferServices object

## Declaration

```swift
class func withOBEXSession(_ inOBEXSession: IOBluetoothOBEXSession!) -> Self!
```

## Parameters

- `inOBEXSession`: A valid IOBluetoothOBEXSession

<a id="return-value"></a>

## Return Value

A newly created OBEXFileTransferServices object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This object must be constructed with a valid IOBluetoothOBEXSession. The given IOBluetoothOBEXSession does not need to be connected to the remote server. This module can be manually connected through the connect() method.

# withOBEXSession: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Create a new OBEXFileTransferServices object

## Declaration

```objectivec
+ (instancetype) withOBEXSession:(IOBluetoothOBEXSession *) inOBEXSession;
```

## Parameters

- `inOBEXSession`: A valid IOBluetoothOBEXSession

<a id="return-value"></a>

## Return Value

A newly created OBEXFileTransferServices object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This object must be constructed with a valid IOBluetoothOBEXSession. The given IOBluetoothOBEXSession does not need to be connected to the remote server. This module can be manually connected through the connect() method.
