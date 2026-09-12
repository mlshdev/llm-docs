> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/count(for:)](https://developer.apple.com/documentation/foundation/nscountedset/count(for:))

# count(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the count associated with a given object in the set.

## Declaration

```swift
func count(for object: Any) -> Int
```

## Parameters

- `object`: The object for which to return the count.

<a id="return-value"></a>

## Return Value

The count associated with `object` in the set, which can be thought of as the number of occurrences of `object` present in the set.

## See Also

### Related Documentation

- [count](../nsset/count.md): The number of members in the set.

### Examining a Counted Set

- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set once, independent of its count.

# countForObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the count associated with a given object in the set.

## Declaration

```objectivec
- (NSUInteger) countForObject:(ObjectType) object;
```

## Parameters

- `object`: The object for which to return the count.

<a id="return-value"></a>

## Return Value

The count associated with `object` in the set, which can be thought of as the number of occurrences of `object` present in the set.

## See Also

### Related Documentation

- [count](../nsset/count.md): The number of members in the set.

### Examining a Counted Set

- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set once, independent of its count.
