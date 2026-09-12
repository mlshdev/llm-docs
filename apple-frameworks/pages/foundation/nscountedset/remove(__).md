> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/remove(_:)](https://developer.apple.com/documentation/foundation/nscountedset/remove(_:))

# remove(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given object from the set.

## Declaration

```swift
func remove(_ object: Any)
```

## Parameters

- `object`: The object to remove from the set.

<a id="Discussion"></a>

## Discussion

If `object` is present in the set, decrements the count associated with it. If the count is decremented to `0`, `object` is removed from the set. [remove(\_:)](remove%28__%29.md) does nothing if `object` is not present in the set.

## See Also

### Related Documentation

- [count(for:)](count%28for_%29.md): Returns the count associated with a given object in the set.

### Adding and Removing Entries

- [add(\_:)](add%28__%29.md): Adds a given object to the set.

# removeObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given object from the set.

## Declaration

```objectivec
- (void) removeObject:(ObjectType) object;
```

## Parameters

- `object`: The object to remove from the set.

<a id="Discussion"></a>

## Discussion

If `object` is present in the set, decrements the count associated with it. If the count is decremented to `0`, `object` is removed from the set. [removeObject:](remove%28__%29.md) does nothing if `object` is not present in the set.

## See Also

### Related Documentation

- [countForObject:](count%28for_%29.md): Returns the count associated with a given object in the set.

### Adding and Removing Entries

- [addObject:](add%28__%29.md): Adds a given object to the set.
