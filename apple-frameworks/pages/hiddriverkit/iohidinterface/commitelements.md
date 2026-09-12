> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidinterface/commitelements](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/commitelements)

# commitElements

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Gets or sets the contents of the interface’s stored elements.

## Declaration

```objectivec
virtual kern_return_t commitElements(OSArray *elements, IOHIDElementCommitDirection direction);
```

## Parameters

- `elements`: An array of [IOHIDElement](../iohidelement.md) objects.
- `direction`: The direction in which to commit changes. Specify [kIOHIDElementCommitDirectionIn](../iohidelementcommitdirection/kiohidelementcommitdirectionin.md) to read the element data from the device. Specify [kIOHIDElementCommitDirectionOut](../iohidelementcommitdirection/kiohidelementcommitdirectionout.md) to write the element data to the device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Accessing the Elements of a Report

- [getElements](getelements.md): Returns the array of elements that the interface uses to store parsed report data.
