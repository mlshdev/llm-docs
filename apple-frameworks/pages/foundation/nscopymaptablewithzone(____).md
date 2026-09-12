> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscopymaptablewithzone(_:_:)](https://developer.apple.com/documentation/foundation/nscopymaptablewithzone(_:_:))

# NSCopyMapTableWithZone(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow copy of the specified map table.

## Declaration

```swift
func NSCopyMapTableWithZone(_ table: NSMapTable<AnyObject, AnyObject>, _ zone: NSZone?) -> NSMapTable<AnyObject, AnyObject>
```

<a id="return-value"></a>

## Return Value

A pointer to a new copy of `table`, created in `zone` and containing pointers to the keys and values of `table`.

<a id="Discussion"></a>

## Discussion

If `zone` is `NULL`, the new table is created in the default zone.

The new table adopts the callback functions of `table` and calls the `hash` and `retain` callback functions as appropriate when inserting elements into the new table.

## See Also

### Related Documentation

- [NSCreateMapTableWithZone(\_:\_:\_:\_:)](nscreatemaptablewithzone%28________%29.md): Creates a new map table in the specified zone.
- [NSCreateMapTable(\_:\_:\_:)](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.

### Functions

- [NSAllMapTableKeys(\_:)](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues(\_:)](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables(\_:\_:)](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
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

# NSCopyMapTableWithZone (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow copy of the specified map table.

## Declaration

```objectivec
extern NSMapTable *NSCopyMapTableWithZone(NSMapTable *table, NSZone *zone);
```

<a id="return-value"></a>

## Return Value

A pointer to a new copy of `table`, created in `zone` and containing pointers to the keys and values of `table`.

<a id="Discussion"></a>

## Discussion

If `zone` is `NULL`, the new table is created in the default zone.

The new table adopts the callback functions of `table` and calls the `hash` and `retain` callback functions as appropriate when inserting elements into the new table.

## See Also

### Related Documentation

- [NSCreateMapTableWithZone](nscreatemaptablewithzone%28________%29.md): Creates a new map table in the specified zone.
- [NSCreateMapTable](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.

### Functions

- [NSAllMapTableKeys](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
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
