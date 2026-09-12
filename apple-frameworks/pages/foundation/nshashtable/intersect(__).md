> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/intersect(_:)](https://developer.apple.com/documentation/foundation/nshashtable/intersect(_:))

# intersect(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving hash table each element that isn’t a member of another given hash table.

## Declaration

```swift
func intersect(_ other: NSHashTable<ObjectType>)
```

## Parameters

- `other`: The hash table with which to perform the intersection.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Comparing Hash Tables

- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.

# intersectHashTable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving hash table each element that isn’t a member of another given hash table.

## Declaration

```objectivec
- (void) intersectHashTable:(NSHashTable<id> *) other;
```

## Parameters

- `other`: The hash table with which to perform the intersection.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Comparing Hash Tables

- [intersectsHashTable:](intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubsetOfHashTable:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.
- [isEqualToHashTable:](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.
