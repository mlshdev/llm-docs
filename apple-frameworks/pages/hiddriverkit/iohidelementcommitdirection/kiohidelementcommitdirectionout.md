> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelementcommitdirection/kiohidelementcommitdirectionout](https://developer.apple.com/documentation/hiddriverkit/iohidelementcommitdirection/kiohidelementcommitdirectionout)

# kIOHIDElementCommitDirectionOut

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

Causes the element data to be sent to the device.

## Declaration

```objectivec
kIOHIDElementCommitDirectionOut
```

<a id="Discussion"></a>

## Discussion

Specifying this direction causes the [commit](../iohidelement/commit.md) function to send the element data to the device. Use the [setValue](../iohidelement/setvalue.md) or [setDataValue](../iohidelement/setdatavalue.md) functions to specify the new data before committing it.

## See Also

### Getting the Commit Directions

- [kIOHIDElementCommitDirectionIn](kiohidelementcommitdirectionin.md): Causes the retrieval of information from the device, and the populating of the element with the resulting data.
