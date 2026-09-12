> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/orderedsetwithcapacity:](https://developer.apple.com/documentation/foundation/nsmutableorderedset/orderedsetwithcapacity:)

# orderedSetWithCapacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an mutable ordered set with a given initial capacity.

## Declaration

```objectivec
+ (instancetype) orderedSetWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new ordered set.

<a id="return-value"></a>

## Return Value

A mutable ordered set with initial capacity to hold `numItems` members.

<a id="Discussion"></a>

## Discussion

Mutable ordered sets allocate additional memory as needed, so `numItems` simply establishes the set’s initial capacity.

## See Also

### Creating a Mutable Ordered Set

- [initWithCapacity:](init%28capacity_%29.md): Returns an initialized mutable ordered set with a given initial capacity.
- [init](init%28%29.md): Initializes a newly allocated mutable ordered set.
