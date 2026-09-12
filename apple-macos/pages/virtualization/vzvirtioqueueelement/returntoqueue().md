> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/returntoqueue()](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/returntoqueue())

# returnToQueue() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns this element back to the guest.

## Declaration

```swift
func returnToQueue()
```

<a id="discussion"></a>

## Discussion

Use this method when you are done processing this element and return it to the guest.

Use this method together with the [nextElement()](../vzvirtioqueue/nextelement%28%29.md) method to process the elements in the queue.

The element you pass to this method must be one that you obtained from calling the [nextElement()](../vzvirtioqueue/nextelement%28%29.md) method. Attempts to call this method more than once with the same element results in the framework raising an exception.

# returnToQueue (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns this element back to the guest.

## Declaration

```objectivec
- (void) returnToQueue;
```

<a id="discussion"></a>

## Discussion

Use this method when you are done processing this element and return it to the guest.

Use this method together with the [nextElement](../vzvirtioqueue/nextelement%28%29.md) method to process the elements in the queue.

The element you pass to this method must be one that you obtained from calling the [nextElement](../vzvirtioqueue/nextelement%28%29.md) method. Attempts to call this method more than once with the same element results in the framework raising an exception.
