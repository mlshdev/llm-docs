> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/1808240-withobjects](https://developer.apple.com/documentation/kernel/osdictionary/1808240-withobjects)

# withObjects(const OSObject \*, const OSSymbol \*, unsigned int, unsigned int)

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an OSDictionary populated with keys and objects provided.

## Declaration

```objectivec
static OSDictionary * withObjects( 
 const OSObject *objects[], 
 const OSSymbol *keys[], 
 unsigned int count, 
 unsigned int capacity = 0); 
```

## Parameters

- `objects`: A C array of OSMetaClassBase-derived objects.
- `keys`: A C array of OSSymbol keys for the corresponding objects in `objects`.
- `count`: The number of keys and objects to be placed into the dictionary.
- `capacity`: The initial storage capacity of the new dictionary object. If 0, `count` is used; otherwise this value must be greater than or equal to `count`.

<a id="return_value"></a>

## Return Value

An instance of OSDictionary containing the key/object pairs provided, with a retain count of 1; `NULL` on failure.

<a id="overview"></a>

## Overview

`objects` and `keys` must be non-`NULL`, and `count` must be nonzero. If `capacity` is nonzero, it must be greater than or equal to `count`. The new dictionary will grow as needed to accommodate more key/object pairs (*unlike*[CFMutableDictionary](https://developer.apple.com/documentation/corefoundation/cfmutabledictionary), for which the initial capacity is a hard limit).

## See Also

### Miscellaneous

- [copyCollection](1808081-copycollection.md): Creates a deep copy of the dictionary and its child collections.
- [ensureCapacity](1808087-ensurecapacity.md): Ensures the dictionary has enough space to store the requested number of key/object pairs.
- [flushCollection](1808092-flushcollection.md): Removes and releases all keys and objects within the dictionary.
- [free](1808101-free.md): Deallocates or releases any resources used by the OSDictionary instance.
- [getCapacity](1808107-getcapacity.md): Returns the number of objects the dictionary can store without reallocating.
- [getCapacityIncrement](1808116-getcapacityincrement.md): Returns the storage increment of the dictionary.
- [getCount](1808124-getcount.md): Returns the current number of key/object pairs contained within the dictionary.
- [getObject](1808133-getobject.md): Returns the object stored under a given key.
- [getObject(const OSString \*)](1808139-getobject.md): Returns the object stored under a given key.
- [getObject(const OSSymbol \*)](1808148-getobject.md): Returns the object stored under a given key.
- [initWithCapacity](1808159-initwithcapacity.md): Initializes a new instance of OSDictionary.
- [initWithDictionary](1808166-initwithdictionary.md): Initializes a new OSDictionary with the contents of another dictionary.
- [initWithObjects(const OSObject \*, const OSString \*, unsigned int, unsigned int)](1808177-initwithobjects.md): Initializes a new OSDictionary with keys and objects provided.
- [initWithObjects(const OSObject \*, const OSSymbol \*, unsigned int, unsigned int)](1808181-initwithobjects.md): Initializes a new OSDictionary with keys and objects provided.
- [isEqualTo](1808187-isequalto.md): Tests the equality of an OSDictionary to an arbitrary object.
- [isEqualTo(const OSDictionary \*)](1808191-isequalto.md): Tests the equality of two OSDictionary objects.
- [isEqualTo(const OSDictionary \*, const OSCollection \*)](1808194-isequalto.md): Tests the equality of two OSDictionary objects over a subset of keys.
- [merge](1808198-merge.md): Merges the contents of a dictionary into the receiver.
- [removeObject](1808205-removeobject.md): Removes a key/object pair from the dictionary.
- [removeObject(const OSString \*)](1808207-removeobject.md): Removes a key/object pair from the dictionary.
- [removeObject(const OSSymbol \*)](1808209-removeobject.md): Removes a key/object pair from the dictionary.
- [serialize](1808214-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setCapacityIncrement](1808218-setcapacityincrement.md): Sets the storage increment of the dictionary.
- [setObject](1808220-setobject.md): Stores an object in the dictionary under a key.
- [setObject(const OSString \*, const OSMetaClassBase \*)](1808224-setobject.md): Stores an object in the dictionary under a key.
- [setObject(const OSSymbol \*, const OSMetaClassBase \*)](1808227-setobject.md): Stores an object in the dictionary under a key.
- [withCapacity](1808230-withcapacity.md): Creates and initializes an empty OSDictionary.
- [withDictionary](1808234-withdictionary.md): Creates and initializes an OSDictionary populated with the contents of another dictionary.
- [withObjects(const OSObject \*, const OSString \*, unsigned int, unsigned int)](1808237-withobjects.md): Creates and initializes an OSDictionary populated with keys and objects provided.
