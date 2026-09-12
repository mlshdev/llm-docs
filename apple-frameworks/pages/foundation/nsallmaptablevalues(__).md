> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsallmaptablevalues(_:)](https://developer.apple.com/documentation/foundation/nsallmaptablevalues(_:))

# NSAllMapTableValues(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all of the values in the specified table.

## Declaration

```swift
func NSAllMapTableValues(_ table: NSMapTable<AnyObject, AnyObject>) -> [Any]
```

<a id="return-value"></a>

## Return Value

An array object containing all the values in `table`. This function should be called only when `table` values are objects, not when they’re any other type of pointer.

## See Also

### Related Documentation

- [NSNextMapEnumeratorPair(\_:\_:\_:)](nsnextmapenumeratorpair%28______%29.md): Returns a Boolean value that indicates whether the next map-table pair in the enumeration are set.
- [NSMapMember(\_:\_:\_:\_:)](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapGet(\_:\_:)](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSEnumerateMapTable(\_:)](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSAllMapTableKeys(\_:)](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.

### Functions

- [NSAllMapTableKeys(\_:)](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
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

# NSAllMapTableValues (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all of the values in the specified table.

## Declaration

```objectivec
extern NSArray *NSAllMapTableValues(NSMapTable *table);
```

<a id="return-value"></a>

## Return Value

An array object containing all the values in `table`. This function should be called only when `table` values are objects, not when they’re any other type of pointer.

## See Also

### Related Documentation

- [NSNextMapEnumeratorPair](nsnextmapenumeratorpair%28______%29.md): Returns a Boolean value that indicates whether the next map-table pair in the enumeration are set.
- [NSMapMember](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapGet](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSEnumerateMapTable](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSAllMapTableKeys](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.

### Functions

- [NSAllMapTableKeys](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
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
