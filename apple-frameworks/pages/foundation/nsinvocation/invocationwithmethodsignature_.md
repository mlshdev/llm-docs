> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinvocation/invocationwithmethodsignature:](https://developer.apple.com/documentation/foundation/nsinvocation/invocationwithmethodsignature:)

# invocationWithMethodSignature:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSInvocation` object able to construct messages using a given method signature.

## Declaration

```objectivec
+ (NSInvocation *) invocationWithMethodSignature:(NSMethodSignature *) sig;
```

## Parameters

- `sig`: An object encapsulating a method signature.

<a id="Discussion"></a>

## Discussion

The new object must have its selector set with [NSInvocation](../nsinvocation.md) and its arguments set with [setArgument:atIndex:](setargument_atindex_.md) before it can be invoked. Do not use the [alloc](../../objectivec/nsobject-swift.class/alloc.md)/[init](../../objectivec/nsobject-swift.class/init%28%29.md) approach to create `NSInvocation` objects.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
