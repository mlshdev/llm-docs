> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/isbusy()](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/isbusy())

# isBusy() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the action state of the module

## Declaration

```swift
func isBusy() -> Bool
```

<a id="return-value"></a>

## Return Value

Success or failure code.

<a id="Discussion"></a>

## Discussion

OBEXFileTransferServices will be considered “busy” when an operation in taking place or has not completed. Calling abort: on this module will not automatically reset its busy state. The user will have to wait for the operation to complete or for the current operation to timeout.

# isBusy (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the action state of the module

## Declaration

```objectivec
- (BOOL) isBusy;
```

<a id="return-value"></a>

## Return Value

Success or failure code.

<a id="Discussion"></a>

## Discussion

OBEXFileTransferServices will be considered “busy” when an operation in taking place or has not completed. Calling abort: on this module will not automatically reset its busy state. The user will have to wait for the operation to complete or for the current operation to timeout.
