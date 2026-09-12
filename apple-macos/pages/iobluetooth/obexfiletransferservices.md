> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices)

# OBEXFileTransferServices (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Implements advanced OBEX operations in addition to simple PUT and GET.

## Declaration

```swift
class OBEXFileTransferServices
```

<a id="overview"></a>

## Overview

All operations are asynchronous and will callback over a respective delegate method if the initial return value is successful. The initial return value usually concerns the state of this object where as the delegate return value reflects the response of the remote device.

## Topics

### Initializers

- [init(obexSession:)](obexfiletransferservices/init%28obexsession_%29-8xm7d.md): Create a new OBEXFileTransferServices object
- [init(OBEXSession:)](obexfiletransferservices/init%28obexsession_%29-8au7l.md)

### Instance Properties

- [delegate](obexfiletransferservices/delegate.md)

### Instance Methods

- [abort()](obexfiletransferservices/abort%28%29.md): Abort the current operation
- [changeCurrentFolderBackward()](obexfiletransferservices/changecurrentfolderbackward%28%29.md): Change to the directory above the current level if not at the root
- [changeCurrentFolderForward(toPath:)](obexfiletransferservices/changecurrentfolderforward%28topath_%29.md): Change the remote path
- [changeCurrentFolderToRoot()](obexfiletransferservices/changecurrentfoldertoroot%28%29.md): Asynchronously change to the remote root directory
- [connectToFTPService()](obexfiletransferservices/connecttoftpservice%28%29.md): Connect to a remote device for FTP operations
- [connectToObjectPushService()](obexfiletransferservices/connecttoobjectpushservice%28%29.md): Connect to a remote device for ObjectPush operations. Most of the FTP functionality of this object will be disabled.
- [copyRemoteFile(\_:toLocalPath:)](obexfiletransferservices/copyremotefile%28__tolocalpath_%29.md): Copy a remote file to a local path
- [createFolder(\_:)](obexfiletransferservices/createfolder%28__%29.md): Create a folder on the remote target
- [currentPath()](obexfiletransferservices/currentpath%28%29.md): Get the remote current directory path during an FTP session
- [disconnect()](obexfiletransferservices/disconnect%28%29.md): Disconnect from the remote device
- [getDefaultVCard(\_:)](obexfiletransferservices/getdefaultvcard%28__%29.md): Get the remote default VCard, if it is supported
- [isBusy()](obexfiletransferservices/isbusy%28%29.md): Get the action state of the module
- [isConnected()](obexfiletransferservices/isconnected%28%29.md): Get the connected state of this module.
- [removeItem(\_:)](obexfiletransferservices/removeitem%28__%29.md): Remove a remote item.
- [retrieveFolderListing()](obexfiletransferservices/retrievefolderlisting%28%29.md): Get a remote directory listing
- [send(\_:type:name:)](obexfiletransferservices/send%28__type_name_%29.md): Send data to a remote target
- [sendFile(\_:)](obexfiletransferservices/sendfile%28__%29.md): Put a local file to the remote target

### Type Methods

- [withOBEXSession(\_:)](obexfiletransferservices/withobexsession%28__%29.md): Create a new OBEXFileTransferServices object

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)

# OBEXFileTransferServices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Implements advanced OBEX operations in addition to simple PUT and GET.

## Declaration

```objectivec
@interface OBEXFileTransferServices : NSObject
```

<a id="overview"></a>

## Overview

All operations are asynchronous and will callback over a respective delegate method if the initial return value is successful. The initial return value usually concerns the state of this object where as the delegate return value reflects the response of the remote device.

## Topics

### Initializers

- [initWithOBEXSession:](obexfiletransferservices/init%28obexsession_%29-8xm7d.md): Create a new OBEXFileTransferServices object

### Instance Variables

- [mAbortedByOwner](obexfiletransferservices/mabortedbyowner.md)
- [mActionArgument1](obexfiletransferservices/mactionargument1.md)
- [mActionArgument2](obexfiletransferservices/mactionargument2.md)
- [mActionArgument3](obexfiletransferservices/mactionargument3.md)
- [mActionCommand](obexfiletransferservices/mactioncommand.md)
- [mActionInProgress](obexfiletransferservices/mactioninprogress.md)
- [mConnectionID](obexfiletransferservices/mconnectionid.md)
- [mCurrentRemoteDirectory](obexfiletransferservices/mcurrentremotedirectory.md)
- [mDelegate](obexfiletransferservices/mdelegate.md)
- [mFolderListingFileRef](obexfiletransferservices/mfolderlistingfileref.md)
- [mGETProgress](obexfiletransferservices/mgetprogress.md)
- [mHasTargetHeader](obexfiletransferservices/mhastargetheader.md)
- [mInactivityTimer](obexfiletransferservices/minactivitytimer.md)
- [mMaxPacketLength](obexfiletransferservices/mmaxpacketlength.md)
- [mOBEXFileGet](obexfiletransferservices/mobexfileget.md)
- [mOBEXFilePut](obexfiletransferservices/mobexfileput.md)
- [mOBEXSession](obexfiletransferservices/mobexsession.md)
- [mPUTProgress](obexfiletransferservices/mputprogress.md)
- [mReserved1](obexfiletransferservices/mreserved1.md)
- [mReserved2](obexfiletransferservices/mreserved2.md)
- [mSavedCommand](obexfiletransferservices/msavedcommand.md)
- [mWeAreAborting](obexfiletransferservices/mweareaborting.md)
- [mWeOpenedTheOBEXConnection](obexfiletransferservices/mweopenedtheobexconnection.md)

### Instance Properties

- [delegate](obexfiletransferservices/delegate.md)

### Instance Methods

- [abort](obexfiletransferservices/abort%28%29.md): Abort the current operation
- [changeCurrentFolderBackward](obexfiletransferservices/changecurrentfolderbackward%28%29.md): Change to the directory above the current level if not at the root
- [changeCurrentFolderForwardToPath:](obexfiletransferservices/changecurrentfolderforward%28topath_%29.md): Change the remote path
- [changeCurrentFolderToRoot](obexfiletransferservices/changecurrentfoldertoroot%28%29.md): Asynchronously change to the remote root directory
- [connectToFTPService](obexfiletransferservices/connecttoftpservice%28%29.md): Connect to a remote device for FTP operations
- [connectToObjectPushService](obexfiletransferservices/connecttoobjectpushservice%28%29.md): Connect to a remote device for ObjectPush operations. Most of the FTP functionality of this object will be disabled.
- [copyRemoteFile:toLocalPath:](obexfiletransferservices/copyremotefile%28__tolocalpath_%29.md): Copy a remote file to a local path
- [createFolder:](obexfiletransferservices/createfolder%28__%29.md): Create a folder on the remote target
- [currentPath](obexfiletransferservices/currentpath%28%29.md): Get the remote current directory path during an FTP session
- [disconnect](obexfiletransferservices/disconnect%28%29.md): Disconnect from the remote device
- [getDefaultVCard:](obexfiletransferservices/getdefaultvcard%28__%29.md): Get the remote default VCard, if it is supported
- [isBusy](obexfiletransferservices/isbusy%28%29.md): Get the action state of the module
- [isConnected](obexfiletransferservices/isconnected%28%29.md): Get the connected state of this module.
- [removeItem:](obexfiletransferservices/removeitem%28__%29.md): Remove a remote item.
- [retrieveFolderListing](obexfiletransferservices/retrievefolderlisting%28%29.md): Get a remote directory listing
- [sendData:type:name:](obexfiletransferservices/send%28__type_name_%29.md): Send data to a remote target
- [sendFile:](obexfiletransferservices/sendfile%28__%29.md): Put a local file to the remote target

### Type Methods

- [withOBEXSession:](obexfiletransferservices/withobexsession%28__%29.md): Create a new OBEXFileTransferServices object

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
