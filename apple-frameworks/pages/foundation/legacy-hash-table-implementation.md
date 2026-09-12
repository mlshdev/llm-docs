> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/legacy-hash-table-implementation](https://developer.apple.com/documentation/foundation/legacy-hash-table-implementation)

# Legacy Hash Table Implementation (Swift)

**Framework:** Foundation  
**Kind:** API Collection

## Topics

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
- [NSHashInsertKnownAbsent(\_:\_:)](nshashinsertknownabsent%28____%29.md): Adds an element to the specified hash table.
- [NSHashRemove(\_:\_:)](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable(\_:)](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.
- [NSStringFromHashTable(\_:)](nsstringfromhashtable%28__%29.md): Returns a string describing the hash table’s contents.

### Data Types

- [NSHashEnumerator](nshashenumerator.md): Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md).
- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

### Constants

- [NSIntegerHashCallBacks](nsintegerhashcallbacks.md): For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectHashCallBacks](nsobjecthashcallbacks.md): For sets of objects (similar to `NSSet`).
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.

# Legacy Hash Table Implementation (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

## Topics

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
- [NSHashInsertKnownAbsent](nshashinsertknownabsent%28____%29.md): Adds an element to the specified hash table.
- [NSHashRemove](nshashremove%28____%29.md): Removes an element from the specified hash table.
- [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md): Returns the next hash-table element in the enumeration.
- [NSResetHashTable](nsresethashtable%28__%29.md): Deletes the elements of the specified hash table.
- [NSStringFromHashTable](nsstringfromhashtable%28__%29.md): Returns a string describing the hash table’s contents.

### Data Types

- [NSHashEnumerator](nshashenumerator.md): Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md).
- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

### Constants

- [NSIntegerHashCallBacks](nsintegerhashcallbacks.md): For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntHashCallBacks](nsinthashcallbacks.md): Deprecated. For sets of pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectHashCallBacks](nsobjecthashcallbacks.md): For sets of objects (similar to `NSSet`).
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.

## See Also

### Deprecated

- [hashTableWithWeakObjects](nshashtable/hashtablewithweakobjects.md): Deprecated. Returns a new hash table for storing weak references to its contents.
