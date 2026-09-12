> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/init(capacity:)](https://developer.apple.com/documentation/foundation/nscountedset/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with enough memory to hold a given number of objects.

## Declaration

```swift
init(capacity numItems: Int)
```

## Parameters

- `numItems`: The initial capacity of the new counted set.

<a id="return-value"></a>

## Return Value

A counted set object initialized with enough memory to hold `numItems` objects

<a id="Discussion"></a>

## Discussion

The method is the designated initializer for [NSCountedSet](../nscountedset.md).

Note that the capacity is simply a hint to help initial memory allocation—the initial count of the object is `0`, and the set still grows and shrinks as you add and remove objects. The hint is typically useful if the set will become large.

## See Also

### Related Documentation

- [init(capacity:)](../nsmutableset/init%28capacity_%29.md): Returns an initialized mutable set with a given initial capacity.

### Initializing a Counted Set

- [init(array:)](init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [init(set:)](init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with enough memory to hold a given number of objects.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new counted set.

<a id="return-value"></a>

## Return Value

A counted set object initialized with enough memory to hold `numItems` objects

<a id="Discussion"></a>

## Discussion

The method is the designated initializer for [NSCountedSet](../nscountedset.md).

Note that the capacity is simply a hint to help initial memory allocation—the initial count of the object is `0`, and the set still grows and shrinks as you add and remove objects. The hint is typically useful if the set will become large.

## See Also

### Related Documentation

- [setWithCapacity:](../nsmutableset/setwithcapacity_.md): Creates and returns a mutable set with a given initial capacity.
- [initWithCapacity:](../nsmutableset/init%28capacity_%29.md): Returns an initialized mutable set with a given initial capacity.

### Initializing a Counted Set

- [initWithArray:](init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [initWithSet:](init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.
