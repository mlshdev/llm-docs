> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/currentpath()](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/currentpath())

# currentPath() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the remote current directory path during an FTP session

## Declaration

```swift
func currentPath() -> String!
```

<a id="return-value"></a>

## Return Value

The current path being browsed over FTP

<a id="Discussion"></a>

## Discussion

This path is changed with each path-specific command called on OBEXFileTransferServices.

# currentPath (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the remote current directory path during an FTP session

## Declaration

```objectivec
- (NSString *) currentPath;
```

<a id="return-value"></a>

## Return Value

The current path being browsed over FTP

<a id="Discussion"></a>

## Discussion

This path is changed with each path-specific command called on OBEXFileTransferServices.
