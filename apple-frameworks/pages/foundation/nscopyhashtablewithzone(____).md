> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscopyhashtablewithzone(_:_:)](https://developer.apple.com/documentation/foundation/nscopyhashtablewithzone(_:_:))

# NSCopyHashTableWithZone(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow copy of the specified hash table.

## Declaration

```swift
func NSCopyHashTableWithZone(_ table: NSHashTable<AnyObject>, _ zone: NSZone?) -> NSHashTable<AnyObject>
```

<a id="return-value"></a>

## Return Value

A pointer to a new copy of `table`, created in `zone` and containing pointers to the data elements of `table`.

<a id="Discussion"></a>

## Discussion

If `zone` is `NULL`, the new table is created in the default zone.

The new table adopts the callback functions of `table` and calls the `hash` and `retain` callback functions as appropriate when inserting elements into the new table.

## See Also

### Related Documentation

- [NSCreateHashTableWithZone(\_:\_:\_:)](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSCreateHashTable(\_:\_:)](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.

### Functions

- [NSAllHashTableObjects(\_:)](nsallhashtableobjects%28__%29.md): Returns all of the elements in the specified hash table.
- [NSCompareHashTables(\_:\_:)](nscomparehashtables%28____%29.md): Returns a Boolean value that indicates whether the elements of two hash tables are equal.
- [NSCountHashTable(\_:)](nscounthashtable%28__%29.md): Returns the number of elements in a hash table.
- [NSCreateHashTable(\_:\_:)](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSCreateHashTableWithZone(\_:\_:\_:)](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSEndHashTableEnumeration(\_:)](nsendhashtableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateHashTable(\_:)](nsenumeratehashtable%28__%29.md): Creates an enumerator for the specified hash table.
- [NSFreeHashTable(\_:)](nsfreehashtable%28__%29.md): Deletes the specified hash table.
- [NSHashGet(\_:\_:)](nshashget%28____%29.md): Returns an element of the hash table.
- [NSHashInsert(\_:\_:)](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent(\_:\_:)](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.
- [NSHashInsertKnownAbsent(\_:\_:)](nshashinsertknownabsent%28____%29.md): Adds an element to the specified hash table.
- [NSHashRemove(\_:\_:)](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable(\_:)](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.

# NSCopyHashTableWithZone (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow copy of the specified hash table.

## Declaration

```objectivec
extern NSHashTable *NSCopyHashTableWithZone(NSHashTable *table, NSZone *zone);
```

<a id="return-value"></a>

## Return Value

A pointer to a new copy of `table`, created in `zone` and containing pointers to the data elements of `table`.

<a id="Discussion"></a>

## Discussion

If `zone` is `NULL`, the new table is created in the default zone.

The new table adopts the callback functions of `table` and calls the `hash` and `retain` callback functions as appropriate when inserting elements into the new table.

## See Also

### Related Documentation

- [NSCreateHashTableWithZone](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSCreateHashTable](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.

### Functions

- [NSAllHashTableObjects](nsallhashtableobjects%28__%29.md): Returns all of the elements in the specified hash table.
- [NSCompareHashTables](nscomparehashtables%28____%29.md): Returns a Boolean value that indicates whether the elements of two hash tables are equal.
- [NSCountHashTable](nscounthashtable%28__%29.md): Returns the number of elements in a hash table.
- [NSCreateHashTable](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSCreateHashTableWithZone](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSEndHashTableEnumeration](nsendhashtableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateHashTable](nsenumeratehashtable%28__%29.md): Creates an enumerator for the specified hash table.
- [NSFreeHashTable](nsfreehashtable%28__%29.md): Deletes the specified hash table.
- [NSHashGet](nshashget%28____%29.md): Returns an element of the hash table.
- [NSHashInsert](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.
- [NSHashInsertKnownAbsent](nshashinsertknownabsent%28____%29.md): Adds an element to the specified hash table.
- [NSHashRemove](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.
