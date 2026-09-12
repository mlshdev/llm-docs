> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/init(obexsession:)-8xm7d](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/init(obexsession:)-8xm7d)

# init(obexSession:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Create a new OBEXFileTransferServices object

## Declaration

```swift
init!(obexSession inOBEXSession: IOBluetoothOBEXSession!)
```

## Parameters

- `inOBEXSession`: A valid IOBluetoothOBEXSession

<a id="return-value"></a>

## Return Value

A newly created OBEXFileTransferServices object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This object must be constructed with a valid IOBluetoothOBEXSession. The given IOBluetoothOBEXSession does not need to be connected to the remote server. OBEXFileTransferServices can be manually connected through the provided connection methods.

# initWithOBEXSession: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a new OBEXFileTransferServices object

## Declaration

```objectivec
- (instancetype) initWithOBEXSession:(IOBluetoothOBEXSession *) inOBEXSession;
```

## Parameters

- `inOBEXSession`: A valid IOBluetoothOBEXSession

<a id="return-value"></a>

## Return Value

A newly created OBEXFileTransferServices object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This object must be constructed with a valid IOBluetoothOBEXSession. The given IOBluetoothOBEXSession does not need to be connected to the remote server. OBEXFileTransferServices can be manually connected through the provided connection methods.
