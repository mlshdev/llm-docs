> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/copyremotefile(_:tolocalpath:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/copyremotefile(_:tolocalpath:))

# copyRemoteFile(\_:toLocalPath:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Copy a remote file to a local path

## Declaration

```swift
func copyRemoteFile(_ inRemoteFileName: String!, toLocalPath inLocalPathAndName: String!) -> OBEXError
```

## Parameters

- `inRemoteFileName`: The name of the remote file to get
- `inLocalPathAndName`: The path and name of where the received file will go

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError. initially. Further results returned through the fileTransferServicesGetComplete: and fileTransferServicesGetProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cp remotePath/remoteFileName localPathAndName’.

# copyRemoteFile:toLocalPath: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Copy a remote file to a local path

## Declaration

```objectivec
- (OBEXError) copyRemoteFile:(NSString *) inRemoteFileName toLocalPath:(NSString *) inLocalPathAndName;
```

## Parameters

- `inRemoteFileName`: The name of the remote file to get
- `inLocalPathAndName`: The path and name of where the received file will go

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError. initially. Further results returned through the fileTransferServicesGetComplete: and fileTransferServicesGetProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cp remotePath/remoteFileName localPathAndName’.
