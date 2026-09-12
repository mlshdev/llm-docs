> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/objectenumerator()](https://developer.apple.com/documentation/foundation/nscountedset/objectenumerator())

# objectEnumerator() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the set once, independent of its count.

## Declaration

```swift
func objectEnumerator() -> NSEnumerator
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the set once, independent of its count.

<a id="Discussion"></a>

## Discussion

If you add a given object to the counted set multiple times, an enumeration of the set will produce that object only once.

You shouldn’t modify the set during enumeration. If you intend to modify the set, use the [allObjects](../nsset/allobjects.md) method to create a “snapshot,” then enumerate the snapshot and modify the original set.

## See Also

### Related Documentation

- [nextObject()](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Examining a Counted Set

- [count(for:)](count%28for_%29.md): Returns the count associated with a given object in the set.

# objectEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the set once, independent of its count.

## Declaration

```objectivec
- (NSEnumerator<id> *) objectEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the set once, independent of its count.

<a id="Discussion"></a>

## Discussion

If you add a given object to the counted set multiple times, an enumeration of the set will produce that object only once.

You shouldn’t modify the set during enumeration. If you intend to modify the set, use the [allObjects](../nsset/allobjects.md) method to create a “snapshot,” then enumerate the snapshot and modify the original set.

## See Also

### Related Documentation

- [nextObject](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Examining a Counted Set

- [countForObject:](count%28for_%29.md): Returns the count associated with a given object in the set.
