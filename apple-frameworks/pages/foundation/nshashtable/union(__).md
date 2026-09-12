> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/union(_:)](https://developer.apple.com/documentation/foundation/nshashtable/union(_:))

# union(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds each element in another given hash table to the receiving hash table, if not present.

## Declaration

```swift
func union(_ other: NSHashTable<ObjectType>)
```

## Parameters

- `other`: The hash table of elements to add to the receiving hash table.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Set Functions

- [minus(\_:)](minus%28__%29.md): Removes each element in another given hash table from the receiving hash table, if present.

# unionHashTable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds each element in another given hash table to the receiving hash table, if not present.

## Declaration

```objectivec
- (void) unionHashTable:(NSHashTable<id> *) other;
```

## Parameters

- `other`: The hash table of elements to add to the receiving hash table.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Set Functions

- [minusHashTable:](minus%28__%29.md): Removes each element in another given hash table from the receiving hash table, if present.
