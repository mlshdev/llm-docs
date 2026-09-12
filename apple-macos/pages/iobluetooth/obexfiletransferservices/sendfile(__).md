> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/sendfile(_:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/sendfile(_:))

# sendFile(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Put a local file to the remote target

## Declaration

```swift
func sendFile(_ inLocalPathAndName: String!) -> OBEXError
```

## Parameters

- `inLocalPathAndName`: The name and path of the file to be sent an instance of OBEXFilePut.

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesSendComplete: and fileTransferServicesSendProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘mv inLocalFilePath remoteCurrentPath’.

# sendFile: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Put a local file to the remote target

## Declaration

```objectivec
- (OBEXError) sendFile:(NSString *) inLocalPathAndName;
```

## Parameters

- `inLocalPathAndName`: The name and path of the file to be sent an instance of OBEXFilePut.

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesSendComplete: and fileTransferServicesSendProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘mv inLocalFilePath remoteCurrentPath’.
