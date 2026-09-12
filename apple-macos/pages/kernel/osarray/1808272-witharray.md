> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/1808272-witharray](https://developer.apple.com/documentation/kernel/osarray/1808272-witharray)

# withArray

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an OSArray populated with the contents of another array.

## Declaration

```objectivec
static OSArray * withArray( 
 const OSArray *array, 
 unsigned int capacity = 0); 
```

## Parameters

- `array`: An OSArray whose contents will be stored in the new instance.
- `capacity`: The initial storage capacity of the array object. If 0, the capacity is set to the number of objects in `array`; otherwise `capacity` must be greater than or equal to the number of objects in `array`.

<a id="return_value"></a>

## Return Value

An instance of OSArray containing the objects of `array`, with a retain count of 1; `NULL` on failure.

<a id="overview"></a>

## Overview

`array` must be non-`NULL`. If `capacity` is nonzero, it must be greater than or equal to `count`. The new array will grow as needed to accommodate more objects (*unlike*[CFMutableArray](https://developer.apple.com/documentation/corefoundation/cfmutablearray), for which the initial capacity is a hard limit).

The objects in `array` are retained for storage in the new OSArray, not copied.

## See Also

### Miscellaneous

- [copyCollection](1808122-copycollection.md): Creates a deep copy of an array and its child collections.
- [ensureCapacity](1808132-ensurecapacity.md): Ensures the array has enough space to store the requested number of objects.
- [flushCollection](1808145-flushcollection.md): Removes and releases all objects within the array.
- [free](1808156-free.md): Deallocates or releases any resources used by the OSArray instance.
- [getCapacity](1808168-getcapacity.md): Returns the number of objects the array can store without reallocating.
- [getCapacityIncrement](1808174-getcapacityincrement.md): Returns the storage increment of the array.
- [getCount](1808184-getcount.md): Returns the current number of objects within the array.
- [getLastObject](1808193-getlastobject.md): Returns the last object in the array.
- [getNextIndexOfObject](1808202-getnextindexofobject.md): Scans the array for the next instance of a specific object at or beyond a given index.
- [getObject](1808210-getobject.md): Return the object stored at a given index.
- [initWithArray](1808216-initwitharray.md): Initializes a new OSArray populated with the contents of another array.
- [initWithCapacity](1808222-initwithcapacity.md): Initializes a new instance of OSArray.
- [initWithObjects](1808226-initwithobjects.md): Initializes a new OSArray populated with objects provided.
- [isEqualTo(const OSArray \*)](1808231-isequalto.md): Tests the equality of two OSArray objects.
- [isEqualTo(const OSMetaClassBase \*)](1808236-isequalto.md): Tests the equality of an OSArray to an arbitrary object.
- [merge](1808242-merge.md): Appends the contents of an array onto the receiving array.
- [removeObject](1808246-removeobject.md): Removes an object from the array.
- [replaceObject](1808249-replaceobject.md): Replaces an object in an array at a given index.
- [serialize](1808255-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setCapacityIncrement](1808259-setcapacityincrement.md): Sets the storage increment of the array.
- [setObject(const OSMetaClassBase \*)](1808261-setobject.md): Appends an object onto the end of the array, increasing storage if necessary.
- [setObject(unsigned int, const OSMetaClassBase \*)](1808266-setobject.md): Inserts or appends an object into the array at a particular index.
- [withCapacity](1808279-withcapacity.md): Creates and initializes an empty OSArray.
- [withObjects](1808285-withobjects.md): Creates and initializes an OSArray populated with objects provided.
