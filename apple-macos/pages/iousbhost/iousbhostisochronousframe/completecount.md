> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronousframe/completecount](https://developer.apple.com/documentation/iousbhost/iousbhostisochronousframe/completecount)

# completeCount (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

The number of bytes that the system actually transferred for the frame.

## Declaration

```swift
var completeCount: UInt32
```

<a id="Discussion"></a>

## Discussion

[IOUSBHost](../../iousbhost.md) updates this field upon completion of the frame.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.

# completeCount (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The number of bytes that the system actually transferred for the frame.

## Declaration

```objectivec
uint32_t completeCount;
```

<a id="Discussion"></a>

## Discussion

[IOUSBHost](../../iousbhost.md) updates this field upon completion of the frame.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.
