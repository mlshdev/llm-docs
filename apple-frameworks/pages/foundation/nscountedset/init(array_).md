> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/init(array:)](https://developer.apple.com/documentation/foundation/nscountedset/init(array:))

# init(array:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with the contents of a given array.

## Declaration

```swift
convenience init(array: [Any])
```

## Parameters

- `array`: An array of objects to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized counted set object with the contents of `array`. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)
- [init(array:)](../nsset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.

### Initializing a Counted Set

- [init(set:)](init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.
- [init(capacity:)](init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.

# initWithArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a counted set object initialized with the contents of a given array.

## Declaration

```objectivec
- (instancetype) initWithArray:(NSArray<id> *) array;
```

## Parameters

- `array`: An array of objects to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized counted set object with the contents of `array`. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)
- [setWithArray:](../nsset/setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [initWithArray:](../nsset/init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.

### Initializing a Counted Set

- [initWithSet:](init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.
- [initWithCapacity:](init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.
