> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/init(set:)](https://developer.apple.com/documentation/foundation/nscountedset/init(set:))

# init(set:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with the contents of a given set.

## Declaration

```swift
convenience init(set: Set<AnyHashable>)
```

## Parameters

- `set`: An set of objects to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized counted set object with the contents of `set`. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [init(set:)](../nsset/init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.

### Initializing a Counted Set

- [init(array:)](init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [init(capacity:)](init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.

# initWithSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with the contents of a given set.

## Declaration

```objectivec
- (instancetype) initWithSet:(NSSet<id> *) set;
```

## Parameters

- `set`: An set of objects to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized counted set object with the contents of `set`. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [initWithSet:](../nsset/init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [setWithSet:](../nsset/setwithset_.md): Creates and returns a set containing the objects from another set.

### Initializing a Counted Set

- [initWithArray:](init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [initWithCapacity:](init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.
