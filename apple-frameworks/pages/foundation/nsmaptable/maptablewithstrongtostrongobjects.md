> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptable/maptablewithstrongtostrongobjects

# mapTableWithStrongToStrongObjects

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Returns a new map table object which has strong references to the keys and values.

> Use [strongToStrongObjectsMapTable](strongtostrongobjects%28%29.md) instead.

## Declaration

```objectivec
+ (id) mapTableWithStrongToStrongObjects;
```

<a id="return-value"></a>

## Return Value

A new map table object which has strong references to the keys and values.

## See Also

### Deprecated

- [mapTableWithWeakToStrongObjects](maptablewithweaktostrongobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and strong references to the values.
- [mapTableWithStrongToWeakObjects](maptablewithstrongtoweakobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and weak references to the values.
- [mapTableWithWeakToWeakObjects](maptablewithweaktoweakobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and values.
- [Legacy Map Table Implementation](../legacy-map-table-implementation.md)
