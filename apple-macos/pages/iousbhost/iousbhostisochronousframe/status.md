> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronousframe/status](https://developer.apple.com/documentation/iousbhost/iousbhostisochronousframe/status)

# status (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

The completion status for an individual frame.

## Declaration

```swift
var status: IOReturn
```

<a id="Discussion"></a>

## Discussion

[IOUSBHost](../../iousbhost.md) initializes this to [kIOReturnInvalid](https://developer.apple.com/documentation/iokit/kioreturninvalid) and updates the field with a valid status code upon completion of the frame.

## See Also

### Frame Structure

- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.

# status (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The completion status for an individual frame.

## Declaration

```objectivec
IOReturn status;
```

<a id="Discussion"></a>

## Discussion

[IOUSBHost](../../iousbhost.md) initializes this to [kIOReturnInvalid](https://developer.apple.com/documentation/iokit/kioreturninvalid) and updates the field with a valid status code upon completion of the frame.

## See Also

### Frame Structure

- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.
