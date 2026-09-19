> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/changecurrentfolderforward(topath:)

# changeCurrentFolderForward(toPath:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Change the remote path

## Declaration

```swift
func changeCurrentFolderForward(toPath inDirName: String!) -> OBEXError
```

## Parameters

- `inDirName`: The name of the remote folder to be set as current

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesPathChangeComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cd dirName’.

# changeCurrentFolderForwardToPath: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Change the remote path

## Declaration

```objectivec
- (OBEXError) changeCurrentFolderForwardToPath:(NSString *) inDirName;
```

## Parameters

- `inDirName`: The name of the remote folder to be set as current

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesPathChangeComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cd dirName’.
