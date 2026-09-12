> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-c.protocol/autorelease](https://developer.apple.com/documentation/objectivec/nsobject-c.protocol/autorelease)

# autorelease

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Decrements the receiver’s retain count at the end of the current autorelease pool block.

## Declaration

```objectivec
- (instancetype) autorelease;
```

<a id="return-value"></a>

## Return Value

`self`.

<a id="Discussion"></a>

## Discussion

For more information about autorelease pool blocks, see [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i).

<a id="Special-Considerations"></a>

### Special Considerations

Instead of using manual reference counting, you should adopt ARC—see [Transitioning to ARC Release Notes](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011226).

## See Also

### Obsolete Methods

- [retain](retain.md): Increments the receiver’s reference count.
- [release](release.md): Decrements the receiver’s reference count.
- [retainCount](retaincount.md): Do not use this method.
- [zone](zone.md): Zones are deprecated and ignored by most classes that have it as a parameter.
