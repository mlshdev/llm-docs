> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscreatemaptablewithzone(_:_:_:_:)](https://developer.apple.com/documentation/foundation/nscreatemaptablewithzone(_:_:_:_:))

# NSCreateMapTableWithZone(\_:\_:\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new map table in the specified zone.

## Declaration

```swift
func NSCreateMapTableWithZone(_ keyCallBacks: NSMapTableKeyCallBacks, _ valueCallBacks: NSMapTableValueCallBacks, _ capacity: Int, _ zone: NSZone?) -> NSMapTable<AnyObject, AnyObject>
```

<a id="return-value"></a>

## Return Value

A new map table in allocated in `zone`. If `zone` is `NULL`, the hash table is created in the default zone.

<a id="Discussion"></a>

## Discussion

The table’s size is dependent on (but generally not equal to) `capacity`. If `capacity` is 0, a small map table is created. The [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md) arguments are structures that are very similar to the callback structure used by [NSCreateHashTable(\_:\_:)](nscreatehashtable%28____%29.md); in fact, they have the same defaults as documented for that function.

## See Also

### Related Documentation

- [NSCopyMapTableWithZone(\_:\_:)](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCreateMapTable(\_:\_:\_:)](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.

### Functions

- [NSAllMapTableKeys(\_:)](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues(\_:)](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables(\_:\_:)](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
- [NSCopyMapTableWithZone(\_:\_:)](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCountMapTable(\_:)](nscountmaptable%28__%29.md): Returns the number of elements in a map table.
- [NSCreateMapTable(\_:\_:\_:)](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSEndMapTableEnumeration(\_:)](nsendmaptableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateMapTable(\_:)](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSFreeMapTable(\_:)](nsfreemaptable%28__%29.md): Deletes the specified map table.
- [NSMapGet(\_:\_:)](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSMapInsert(\_:\_:\_:)](nsmapinsert%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertIfAbsent(\_:\_:\_:)](nsmapinsertifabsent%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertKnownAbsent(\_:\_:\_:)](nsmapinsertknownabsent%28______%29.md): Inserts a key-value pair into the specified table if the pair had not been previously added.
- [NSMapMember(\_:\_:\_:\_:)](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapRemove(\_:\_:)](nsmapremove%28____%29.md): Removes a key and corresponding value from the specified table.

# NSCreateMapTableWithZone (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new map table in the specified zone.

## Declaration

```objectivec
extern NSMapTable *NSCreateMapTableWithZone(NSMapTableKeyCallBacks keyCallBacks, NSMapTableValueCallBacks valueCallBacks, NSUInteger capacity, NSZone *zone);
```

<a id="return-value"></a>

## Return Value

A new map table in allocated in `zone`. If `zone` is `NULL`, the hash table is created in the default zone.

<a id="Discussion"></a>

## Discussion

The table’s size is dependent on (but generally not equal to) `capacity`. If `capacity` is 0, a small map table is created. The [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md) arguments are structures that are very similar to the callback structure used by [NSCreateHashTable](nscreatehashtable%28____%29.md); in fact, they have the same defaults as documented for that function.

## See Also

### Related Documentation

- [NSCopyMapTableWithZone](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCreateMapTable](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.

### Functions

- [NSAllMapTableKeys](nsallmaptablekeys%28__%29.md): Returns all of the keys in the specified map table.
- [NSAllMapTableValues](nsallmaptablevalues%28__%29.md): Returns all of the values in the specified table.
- [NSCompareMapTables](nscomparemaptables%28____%29.md): Compares the elements of two map tables for equality.
- [NSCopyMapTableWithZone](nscopymaptablewithzone%28____%29.md): Performs a shallow copy of the specified map table.
- [NSCountMapTable](nscountmaptable%28__%29.md): Returns the number of elements in a map table.
- [NSCreateMapTable](nscreatemaptable%28______%29.md): Creates a new map table in the default zone.
- [NSEndMapTableEnumeration](nsendmaptableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateMapTable](nsenumeratemaptable%28__%29.md): Creates an enumerator for the specified map table.
- [NSFreeMapTable](nsfreemaptable%28__%29.md): Deletes the specified map table.
- [NSMapGet](nsmapget%28____%29.md): Returns a map table value for the specified key.
- [NSMapInsert](nsmapinsert%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertIfAbsent](nsmapinsertifabsent%28______%29.md): Inserts a key-value pair into the specified table.
- [NSMapInsertKnownAbsent](nsmapinsertknownabsent%28______%29.md): Inserts a key-value pair into the specified table if the pair had not been previously added.
- [NSMapMember](nsmapmember%28________%29.md): Indicates whether a given table contains a given key.
- [NSMapRemove](nsmapremove%28____%29.md): Removes a key and corresponding value from the specified table.
