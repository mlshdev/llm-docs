> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/maptablewithstrongtoweakobjects](https://developer.apple.com/documentation/foundation/nsmaptable/maptablewithstrongtoweakobjects)

# mapTableWithStrongToWeakObjects

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Returns a new map table object which has strong references to the keys and weak references to the values.

> Use [strongToWeakObjectsMapTable](strongtoweakobjects%28%29.md) instead.

## Declaration

```objectivec
+ (id) mapTableWithStrongToWeakObjects;
```

<a id="return-value"></a>

## Return Value

A new map table object which has strong references to the keys and weak references to the values.

<a id="Discussion"></a>

## Discussion

`NSMapTable` objects created using this method do not support weak references under Automatic Reference Counting (ARC).

## See Also

### Deprecated

- [mapTableWithStrongToStrongObjects](maptablewithstrongtostrongobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and values.
- [mapTableWithWeakToStrongObjects](maptablewithweaktostrongobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and strong references to the values.
- [mapTableWithWeakToWeakObjects](maptablewithweaktoweakobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and values.
- [Legacy Map Table Implementation](../legacy-map-table-implementation.md)
