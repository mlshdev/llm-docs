> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/legacy-map-table-implementation](https://developer.apple.com/documentation/foundation/legacy-map-table-implementation)

# Legacy Map Table Implementation (Swift)

**Framework:** Foundation  
**Kind:** API Collection

## Topics

### Functions

- [NSAllMapTableKeys(\_:)](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues(\_:)](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables(\_:\_:)](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
- [NSCopyMapTableWithZone(\_:\_:)](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCountMapTable(\_:)](nscountmaptable%28__%29.md): Returns the number of elements in a map table.
- [NSCreateMapTable(\_:\_:\_:)](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSCreateMapTableWithZone(\_:\_:\_:\_:)](nscreatemaptablewithzone%28________%29.md): Creates a new map table in the specified zone.
- [NSEndMapTableEnumeration(\_:)](nsendmaptableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateMapTable(\_:)](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSFreeMapTable(\_:)](nsfreemaptable%28__%29.md): Deletes the specified map table.
- [NSMapGet(\_:\_:)](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSMapInsert(\_:\_:\_:)](nsmapinsert%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertIfAbsent(\_:\_:\_:)](nsmapinsertifabsent%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertKnownAbsent(\_:\_:\_:)](nsmapinsertknownabsent%28______%29.md): Inserts a key-value pair into the specified table if the pair had not been previously added.
- [NSMapMember(\_:\_:\_:\_:)](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapRemove(\_:\_:)](nsmapremove%28____%29.md): Removes a key and corresponding value from the specified table.
- [NSNextMapEnumeratorPair(\_:\_:\_:)](nsnextmapenumeratorpair%28______%29.md): Returns a Boolean value that indicates whether the next map-table pair in the enumeration are set.
- [NSResetMapTable(\_:)](nsresetmaptable%28__%29.md): Deletes the elements of the specified map table.
- [NSStringFromMapTable(\_:)](nsstringfrommaptable%28__%29.md): Returns a string describing the map table’s contents.

### Data Types

- [NSMapEnumerator](nsmapenumerator.md): Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair(\_:\_:\_:)](nsnextmapenumeratorpair%28______%29.md).
- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntMapKeyCallBacks](nsintmapkeycallbacks.md): Deprecated. For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonOwnedPointerOrNullMapKeyCallBacks](nsnonownedpointerornullmapkeycallbacks.md): For keys that are pointers not freed, or `NULL`.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.

### Constants

- [NSIntegerMapValueCallBacks](nsintegermapvaluecallbacks.md): For values that are pointer-sized quantities, (for example, `int`, `long`, or `unichar`).
- [NSIntMapValueCallBacks](nsintmapvaluecallbacks.md): Deprecated. For values that are pointer-sized quantities, (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapValueCallBacks](nsnonownedpointermapvaluecallbacks.md): For values that are not owned pointers.
- [NSOwnedPointerMapValueCallBacks](nsownedpointermapvaluecallbacks.md): For values that are owned pointers.
- [NSNonRetainedObjectMapValueCallBacks](nsnonretainedobjectmapvaluecallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapValueCallBacks](nsobjectmapvaluecallbacks.md): For values that are objects.

# Legacy Map Table Implementation (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

## Topics

### Functions

- [NSAllMapTableKeys](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
- [NSCopyMapTableWithZone](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCountMapTable](nscountmaptable%28__%29.md): Returns the number of elements in a map table.
- [NSCreateMapTable](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSCreateMapTableWithZone](nscreatemaptablewithzone%28________%29.md): Creates a new map table in the specified zone.
- [NSEndMapTableEnumeration](nsendmaptableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateMapTable](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSFreeMapTable](nsfreemaptable%28__%29.md): Deletes the specified map table.
- [NSMapGet](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSMapInsert](nsmapinsert%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertIfAbsent](nsmapinsertifabsent%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertKnownAbsent](nsmapinsertknownabsent%28______%29.md): Inserts a key-value pair into the specified table if the pair had not been previously added.
- [NSMapMember](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapRemove](nsmapremove%28____%29.md): Removes a key and corresponding value from the specified table.
- [NSNextMapEnumeratorPair](nsnextmapenumeratorpair%28______%29.md): Returns a Boolean value that indicates whether the next map-table pair in the enumeration are set.
- [NSResetMapTable](nsresetmaptable%28__%29.md): Deletes the elements of the specified map table.
- [NSStringFromMapTable](nsstringfrommaptable%28__%29.md): Returns a string describing the map table’s contents.

### Data Types

- [NSMapEnumerator](nsmapenumerator.md): Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair](nsnextmapenumeratorpair%28______%29.md).
- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.

### Constants

- [NSNotAnIntMapKey](nsnotanintmapkey.md): Deprecated. Predefined `notAKeyMarker` for use with [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md).
- [NSNotAnIntegerMapKey](nsnotanintegermapkey.md): Predefined `notAKeyMarker` for use with [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md).
- [NSNotAPointerMapKey](nsnotapointermapkey.md): Predefined `notAKeyMarker` for use with [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md).

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntMapKeyCallBacks](nsintmapkeycallbacks.md): Deprecated. For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonOwnedPointerOrNullMapKeyCallBacks](nsnonownedpointerornullmapkeycallbacks.md): For keys that are pointers not freed, or `NULL`.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.

### Constants

- [NSIntegerMapValueCallBacks](nsintegermapvaluecallbacks.md): For values that are pointer-sized quantities, (for example, `int`, `long`, or `unichar`).
- [NSIntMapValueCallBacks](nsintmapvaluecallbacks.md): Deprecated. For values that are pointer-sized quantities, (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapValueCallBacks](nsnonownedpointermapvaluecallbacks.md): For values that are not owned pointers.
- [NSOwnedPointerMapValueCallBacks](nsownedpointermapvaluecallbacks.md): For values that are owned pointers.
- [NSNonRetainedObjectMapValueCallBacks](nsnonretainedobjectmapvaluecallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapValueCallBacks](nsobjectmapvaluecallbacks.md): For values that are objects.

## See Also

### Deprecated

- [mapTableWithStrongToStrongObjects](nsmaptable/maptablewithstrongtostrongobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and values.
- [mapTableWithWeakToStrongObjects](nsmaptable/maptablewithweaktostrongobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and strong references to the values.
- [mapTableWithStrongToWeakObjects](nsmaptable/maptablewithstrongtoweakobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and weak references to the values.
- [mapTableWithWeakToWeakObjects](nsmaptable/maptablewithweaktoweakobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and values.
