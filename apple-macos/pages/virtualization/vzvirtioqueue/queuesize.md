> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueue/queuesize](https://developer.apple.com/documentation/virtualization/vzvirtioqueue/queuesize)

# queueSize (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Size of this queue.

## Declaration

```swift
var queueSize: UInt16 { get }
```

<a id="discussion"></a>

## Discussion

The size of the queue indicates the maximum number of `VZVirtioQueueElement` that can be made available in the queue.

# queueSize (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Size of this queue.

## Declaration

```objectivec
@property (readonly) uint16_t queueSize;
```

<a id="discussion"></a>

## Discussion

The size of the queue indicates the maximum number of `VZVirtioQueueElement` that can be made available in the queue.
