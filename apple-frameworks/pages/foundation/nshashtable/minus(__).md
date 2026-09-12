> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/minus(_:)](https://developer.apple.com/documentation/foundation/nshashtable/minus(_:))

# minus(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each element in another given hash table from the receiving hash table, if present.

## Declaration

```swift
func minus(_ other: NSHashTable<ObjectType>)
```

## Parameters

- `other`: The hash table of elements to remove from the receiving hash table.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Set Functions

- [union(\_:)](union%28__%29.md): Adds each element in another given hash table to the receiving hash table, if not present.

# minusHashTable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each element in another given hash table from the receiving hash table, if present.

## Declaration

```objectivec
- (void) minusHashTable:(NSHashTable<id> *) other;
```

## Parameters

- `other`: The hash table of elements to remove from the receiving hash table.

<a id="Discussion"></a>

## Discussion

The equality test used for members depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Set Functions

- [unionHashTable:](union%28__%29.md): Adds each element in another given hash table to the receiving hash table, if not present.
