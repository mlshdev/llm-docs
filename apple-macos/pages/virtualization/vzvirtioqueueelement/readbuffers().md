> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/readbuffers()](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/readbuffers())

# readBuffers() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the remaining read buffers memory represented as an array of data.

## Declaration

```swift
func readBuffers() -> [Data]
```

<a id="return-value"></a>

## Return Value

An array of [NSData](https://developer.apple.com/documentation/foundation/nsdata) object that represents the remaining read buffers memory.

<a id="discussion"></a>

## Discussion

This method gets the remaining read buffers memory, after calling this method, [readBuffersAvailableByteCount](readbuffersavailablebytecount.md) will be zero, behaving as if you have read all of the read buffers available in the [VZVirtioQueueElement](../vzvirtioqueueelement.md).

Here, the memory is represented as scatter-gather buffers directly referencing guest memory without any extra copy.

> **Important**

> It’s strongly recommended to access the underlying memory only once. Accessing this memory multiple times can introduce time-of-check, time-of-use (TOCTOU) bugs which are prone to security attacks. Since the guest is free to modify its memory at any time, two consecutive reads may return different results, and malicious guests can take advantage of this to perform various attacks.

# readBuffers (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the remaining read buffers memory represented as an array of data.

## Declaration

```objectivec
- (NSArray<NSData *> *) readBuffers;
```

<a id="return-value"></a>

## Return Value

An array of [NSData](https://developer.apple.com/documentation/foundation/nsdata) object that represents the remaining read buffers memory.

<a id="discussion"></a>

## Discussion

This method gets the remaining read buffers memory, after calling this method, [readBuffersAvailableByteCount](readbuffersavailablebytecount.md) will be zero, behaving as if you have read all of the read buffers available in the [VZVirtioQueueElement](../vzvirtioqueueelement.md).

Here, the memory is represented as scatter-gather buffers directly referencing guest memory without any extra copy.

> **Important**

> It’s strongly recommended to access the underlying memory only once. Accessing this memory multiple times can introduce time-of-check, time-of-use (TOCTOU) bugs which are prone to security attacks. Since the guest is free to modify its memory at any time, two consecutive reads may return different results, and malicious guests can take advantage of this to perform various attacks.
