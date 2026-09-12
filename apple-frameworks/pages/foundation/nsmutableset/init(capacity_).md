> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutableset/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable set with a given initial capacity.

## Declaration

```swift
init(capacity numItems: Int)
```

## Parameters

- `numItems`: The initial capacity of the set.

<a id="return-value"></a>

## Return Value

An initialized mutable set with initial capacity to hold `numItems` members. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable sets allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer for `NSMutableSet`.

## See Also

### Creating a mutable set

- [init()](init%28%29.md): Initializes a newly allocated set.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable set with a given initial capacity.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the set.

<a id="return-value"></a>

## Return Value

An initialized mutable set with initial capacity to hold `numItems` members. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable sets allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer for `NSMutableSet`.

## See Also

### Related Documentation

- [setWithCapacity:](setwithcapacity_.md): Creates and returns a mutable set with a given initial capacity.

### Creating a mutable set

- [setWithCapacity:](setwithcapacity_.md): Creates and returns a mutable set with a given initial capacity.
- [init](init%28%29.md): Initializes a newly allocated set.
