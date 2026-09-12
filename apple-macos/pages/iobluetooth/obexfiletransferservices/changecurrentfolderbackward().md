> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/changecurrentfolderbackward()](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/changecurrentfolderbackward())

# changeCurrentFolderBackward() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Change to the directory above the current level if not at the root

## Declaration

```swift
func changeCurrentFolderBackward() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesPathChangeComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cd ..’ only if remote path is not already at root.

# changeCurrentFolderBackward (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Change to the directory above the current level if not at the root

## Declaration

```objectivec
- (OBEXError) changeCurrentFolderBackward;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesPathChangeComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘cd ..’ only if remote path is not already at root.
