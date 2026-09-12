> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-c.protocol/zone](https://developer.apple.com/documentation/objectivec/nsobject-c.protocol/zone)

# zone

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Zones are deprecated and ignored by most classes that have it as a parameter.

## Declaration

```objectivec
- (struct _NSZone *) zone;
```

<a id="return-value"></a>

## Return Value

A pointer to the zone from which the receiver was allocated.

## See Also

### Obsolete Methods

- [retain](retain.md): Increments the receiver’s reference count.
- [release](release.md): Decrements the receiver’s reference count.
- [autorelease](autorelease.md): Decrements the receiver’s retain count at the end of the current autorelease pool block.
- [retainCount](retaincount.md): Do not use this method.
