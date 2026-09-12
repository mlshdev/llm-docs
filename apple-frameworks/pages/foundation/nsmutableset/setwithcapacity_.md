> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/setwithcapacity:](https://developer.apple.com/documentation/foundation/nsmutableset/setwithcapacity:)

# setWithCapacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a mutable set with a given initial capacity.

## Declaration

```objectivec
+ (instancetype) setWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new set.

<a id="return-value"></a>

## Return Value

A mutable set with initial capacity to hold `numItems` members.

<a id="Discussion"></a>

## Discussion

Mutable sets allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

## See Also

### Related Documentation

- [set](../nsset/set.md): Creates and returns an empty set.
- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)
- [setWithObjects:count:](../nsset/init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Creating a mutable set

- [initWithCapacity:](init%28capacity_%29.md): Returns an initialized mutable set with a given initial capacity.
- [init](init%28%29.md): Initializes a newly allocated set.
