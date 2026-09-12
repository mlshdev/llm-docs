> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsautoreleasepool/addobject:-c.type.method](https://developer.apple.com/documentation/foundation/nsautoreleasepool/addobject:-c.type.method)

# addObject:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given object to the active autorelease pool in the current thread.

## Declaration

```objectivec
+ (void) addObject:(id) anObject;
```

## Parameters

- `anObject`: The object to add to the active autorelease pool in the current thread.

<a id="Discussion"></a>

## Discussion

The same object may be added several times to the active pool and, when the pool is deallocated, it will receive a [release](../../objectivec/nsobject-c.protocol/release.md) message for each time it was added.

Normally you don’t invoke this method directly—you send [autorelease](../../objectivec/nsobject-c.protocol/autorelease.md) to `object` instead.

## See Also

### Adding an Object to a Pool

- [addObject:](addobject_-c.method.md): Adds a given object to the receiver
