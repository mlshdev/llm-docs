> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashinsertknownabsent(_:_:)](https://developer.apple.com/documentation/foundation/nshashinsertknownabsent(_:_:))

# NSHashInsertKnownAbsent(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an element to the specified hash table.

## Declaration

```swift
func NSHashInsertKnownAbsent(_ table: NSHashTable<AnyObject>, _ pointer: UnsafeRawPointer?)
```

<a id="Discussion"></a>

## Discussion

Inserts `pointer`, which must not be `NULL`, into `table`. Unlike `NSHashInsert`, this function raises `NSInvalidArgumentException` if `table` already includes an element that matches `pointer`.

## See Also

### Related Documentation

- [NSHashRemove(\_:\_:)](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSHashInsert(\_:\_:)](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent(\_:\_:)](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.

### Functions

- [NSAllHashTableObjects(\_:)](nsallhashtableobjects%28__%29.md): Returns all of the elements in the specified hash table.
- [NSCompareHashTables(\_:\_:)](nscomparehashtables%28____%29.md): Returns a Boolean value that indicates whether the elements of two hash tables are equal.
- [NSCopyHashTableWithZone(\_:\_:)](nscopyhashtablewithzone%28____%29.md): Performs a shallow copy of the specified hash table.
- [NSCountHashTable(\_:)](nscounthashtable%28__%29.md): Returns the number of elements in a hash table.
- [NSCreateHashTable(\_:\_:)](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSCreateHashTableWithZone(\_:\_:\_:)](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSEndHashTableEnumeration(\_:)](nsendhashtableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateHashTable(\_:)](nsenumeratehashtable%28__%29.md): Creates an enumerator for the specified hash table.
- [NSFreeHashTable(\_:)](nsfreehashtable%28__%29.md): Deletes the specified hash table.
- [NSHashGet(\_:\_:)](nshashget%28____%29.md): Returns an element of the hash table.
- [NSHashInsert(\_:\_:)](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent(\_:\_:)](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.
- [NSHashRemove(\_:\_:)](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable(\_:)](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.

# NSHashInsertKnownAbsent (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an element to the specified hash table.

## Declaration

```objectivec
extern void NSHashInsertKnownAbsent(NSHashTable *table, const void *pointer);
```

<a id="Discussion"></a>

## Discussion

Inserts `pointer`, which must not be `NULL`, into `table`. Unlike `NSHashInsert`, this function raises `NSInvalidArgumentException` if `table` already includes an element that matches `pointer`.

## See Also

### Related Documentation

- [NSHashRemove](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSHashInsert](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.

### Functions

- [NSAllHashTableObjects](nsallhashtableobjects%28__%29.md): Returns all of the elements in the specified hash table.
- [NSCompareHashTables](nscomparehashtables%28____%29.md): Returns a Boolean value that indicates whether the elements of two hash tables are equal.
- [NSCopyHashTableWithZone](nscopyhashtablewithzone%28____%29.md): Performs a shallow copy of the specified hash table.
- [NSCountHashTable](nscounthashtable%28__%29.md): Returns the number of elements in a hash table.
- [NSCreateHashTable](nscreatehashtable%28____%29.md): Creates and returns a new hash table.
- [NSCreateHashTableWithZone](nscreatehashtablewithzone%28______%29.md): Creates a new hash table in a given zone.
- [NSEndHashTableEnumeration](nsendhashtableenumeration%28__%29.md): Used when finished with an enumerator.
- [NSEnumerateHashTable](nsenumeratehashtable%28__%29.md): Creates an enumerator for the specified hash table.
- [NSFreeHashTable](nsfreehashtable%28__%29.md): Deletes the specified hash table.
- [NSHashGet](nshashget%28____%29.md): Returns an element of the hash table.
- [NSHashInsert](nshashinsert%28____%29.md): Adds an element to the specified hash table.
- [NSHashInsertIfAbsent](nshashinsertifabsent%28____%29.md): Adds an element to the specified hash table only if the table does not already contain the element.
- [NSHashRemove](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.
