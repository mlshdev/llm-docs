> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronousframe/requestcount](https://developer.apple.com/documentation/iousbhost/iousbhostisochronousframe/requestcount)

# requestCount (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

The number of requested bytes to transfer for the frame.

## Declaration

```swift
var requestCount: UInt32
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Initialize this field before submitting the structure.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.

# requestCount (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The number of requested bytes to transfer for the frame.

## Declaration

```objectivec
uint32_t requestCount;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Initialize this field before submitting the structure.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](timestamp.md): Deprecated. The observed time for the frame’s completion.
