> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/send(_:type:name:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/send(_:type:name:))

# send(\_:type:name:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Send data to a remote target

## Declaration

```swift
func send(_ inData: Data!, type inType: String!, name inName: String!) -> OBEXError
```

## Parameters

- `inData`: The data to be sent
- `inType`: The type of the data to be sent that will be used in the OBEX type header, usually a mime-type. For example, use “text/x-vCard” when sending vCards. This argument is optional.
- `inName`: The name of the file that the data can be referenced as.

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesSendComplete: and fileTransferServicesSendProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Use this method when you have data to send but no file to read from.

# sendData:type:name: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Send data to a remote target

## Declaration

```objectivec
- (OBEXError) sendData:(NSData *) inData type:(NSString *) inType name:(NSString *) inName;
```

## Parameters

- `inData`: The data to be sent
- `inType`: The type of the data to be sent that will be used in the OBEX type header, usually a mime-type. For example, use “text/x-vCard” when sending vCards. This argument is optional.
- `inName`: The name of the file that the data can be referenced as.

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesSendComplete: and fileTransferServicesSendProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Use this method when you have data to send but no file to read from.
