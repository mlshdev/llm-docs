> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable ordered set with a given initial capacity.

## Declaration

```swift
init(capacity numItems: Int)
```

## Parameters

- `numItems`: The initial capacity of the new ordered set.

<a id="return-value"></a>

## Return Value

An initialized mutable ordered set with initial capacity to hold `numItems` members.

<a id="Discussion"></a>

## Discussion

Mutable ordered sets allocate additional memory as needed, so `numItems` simply establishes the set’s initial capacity.

This method is a designated initializer of `NSMutableOrderedSet`.

## See Also

### Creating a Mutable Ordered Set

- [init()](init%28%29.md): Initializes a newly allocated mutable ordered set.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable ordered set with a given initial capacity.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new ordered set.

<a id="return-value"></a>

## Return Value

An initialized mutable ordered set with initial capacity to hold `numItems` members.

<a id="Discussion"></a>

## Discussion

Mutable ordered sets allocate additional memory as needed, so `numItems` simply establishes the set’s initial capacity.

This method is a designated initializer of `NSMutableOrderedSet`.

## See Also

### Related Documentation

- [orderedSetWithCapacity:](orderedsetwithcapacity_.md): Creates and returns an mutable ordered set with a given initial capacity.

### Creating a Mutable Ordered Set

- [orderedSetWithCapacity:](orderedsetwithcapacity_.md): Creates and returns an mutable ordered set with a given initial capacity.
- [init](init%28%29.md): Initializes a newly allocated mutable ordered set.
