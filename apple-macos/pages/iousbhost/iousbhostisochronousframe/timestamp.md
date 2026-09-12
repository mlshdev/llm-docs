> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronousframe/timestamp](https://developer.apple.com/documentation/iousbhost/iousbhostisochronousframe/timestamp)

# timeStamp (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

The observed time for the frame’s completion.

## Declaration

```swift
var timeStamp: IOUSBHostTime
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Interrupt latency and system load may result in more than one frame completing with the same timestamp.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.

# timeStamp (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The observed time for the frame’s completion.

## Declaration

```objectivec
IOUSBHostTime timeStamp;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Interrupt latency and system load may result in more than one frame completing with the same timestamp.

## See Also

### Frame Structure

- [status](status.md): Deprecated. The completion status for an individual frame.
- [requestCount](requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
