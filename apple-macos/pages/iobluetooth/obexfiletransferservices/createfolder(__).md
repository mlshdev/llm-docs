> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/createfolder(_:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/createfolder(_:))

# createFolder(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a folder on the remote target

## Declaration

```swift
func createFolder(_ inDirName: String!) -> OBEXError
```

## Parameters

- `inDirName`: The name of the folder to be created

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesCreateFolderComplete delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘mkdir dirName’.

# createFolder: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a folder on the remote target

## Declaration

```objectivec
- (OBEXError) createFolder:(NSString *) inDirName;
```

## Parameters

- `inDirName`: The name of the folder to be created

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesCreateFolderComplete delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘mkdir dirName’.
