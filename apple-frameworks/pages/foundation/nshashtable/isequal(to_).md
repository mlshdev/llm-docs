> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/isequal(to:)](https://developer.apple.com/documentation/foundation/nshashtable/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.

## Declaration

```swift
func isEqual(to other: NSHashTable<ObjectType>) -> Bool
```

## Parameters

- `other`: The hash table with which to compare the receiving hash table.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `other` are equal to the contents of the receiving hash table, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two hash tables have equal contents if they each have the same number of members and if each member of one hash table is present in the other.

The equality test used for members depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Comparing Hash Tables

- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving hash table each element that isn’t a member of another given hash table.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.

# isEqualToHashTable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.

## Declaration

```objectivec
- (BOOL) isEqualToHashTable:(NSHashTable<id> *) other;
```

## Parameters

- `other`: The hash table with which to compare the receiving hash table.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `other` are equal to the contents of the receiving hash table, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two hash tables have equal contents if they each have the same number of members and if each member of one hash table is present in the other.

The equality test used for members depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Comparing Hash Tables

- [intersectHashTable:](intersect%28__%29.md): Removes from the receiving hash table each element that isn’t a member of another given hash table.
- [intersectsHashTable:](intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubsetOfHashTable:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.
