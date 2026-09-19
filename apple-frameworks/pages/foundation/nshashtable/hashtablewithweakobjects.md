> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nshashtable/hashtablewithweakobjects

# hashTableWithWeakObjects

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Returns a new hash table for storing weak references to its contents.

> Use [weakObjectsHashTable](weakobjects%28%29.md) instead.

## Declaration

```objectivec
+ (id) hashTableWithWeakObjects;
```

<a id="return-value"></a>

## Return Value

A new has table that uses the options [NSHashTableZeroingWeakMemory](../nshashtablezeroingweakmemory.md) and [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) and has an initial capacity of `0`.

<a id="Discussion"></a>

## Discussion

This method is not supported under Automatic Reference Counting (ARC).

## See Also

### Deprecated

- [Legacy Hash Table Implementation](../legacy-hash-table-implementation.md)
