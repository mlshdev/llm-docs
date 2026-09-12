> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelement/commit](https://developer.apple.com/documentation/hiddriverkit/iohidelement/commit)

# commit

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Commits the element value to and from the device.

## Declaration

```objectivec
virtual IOReturn commit(IOHIDElementCommitDirection direction);
```

## Parameters

- `direction`: The direction to commit the element. Specify [kIOHIDElementCommitDirectionIn](../iohidelementcommitdirection/kiohidelementcommitdirectionin.md) to read the element data from the device. Specify [kIOHIDElementCommitDirectionOut](../iohidelementcommitdirection/kiohidelementcommitdirectionout.md) to write the element data to the device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Committing Changes to Elements

- [IOHIDElementCommitDirection](../iohidelementcommitdirection.md): The commit direction for an HID element.
