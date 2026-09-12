> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osorderedset/1808169-setfirstobject](https://developer.apple.com/documentation/kernel/osorderedset/1808169-setfirstobject)

# setFirstObject

**Interface language:** Objective-C

**Framework:** Kernel

Adds an object to the OSOrderedSet at index 0 if it is not already present.

## Declaration

```objectivec
virtual bool setFirstObject(
 const OSMetaClassBase *anObject); 
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to be added to the ordered set.

<a id="return_value"></a>

## Return Value

`true` if `anObject` was successfully added to the ordered set, `false` otherwise (including if it was already in the ordered set at any index).

<a id="overview"></a>

## Overview

The set adds storage to accomodate the new object, if necessary. If successfully added, the object is retained.

This function ignores any ordering function of the ordered set, and can disrupt the automatic sorting mechanism. Only call this function if you are managing the ordered set directly.

A `false` return value can mean either that `anObject` is already present in the set, or that a memory allocation failure occurred. If you need to know whether the object is already present, use containsObject(const OSMetaClassBase \*).

## See Also

### Miscellaneous

- [containsObject](1808025-containsobject.md): Checks the ordered set for the presence of an object.
- [copyCollection](1808029-copycollection.md): Creates a deep copy of this ordered set and its child collections.
- [ensureCapacity](1808033-ensurecapacity.md): Ensures the set has enough space to store the requested number of distinct objects.
- [flushCollection](1808037-flushcollection.md): Removes and releases all objects within the ordered set.
- [free](1808043-free.md): Deallocatesand releases any resources used by the OSOrderedSet instance.
- [getCapacity](1808056-getcapacity.md): Returns the number of objects the ordered set can store without reallocating.
- [getCapacityIncrement](1808062-getcapacityincrement.md): Returns the storage increment of the ordered set.
- [getCount](1808070-getcount.md): Returns the current number of objects within the ordered set.
- [getFirstObject](1808079-getfirstobject.md): The object at index 0 in the ordered set if there is one, otherwise `NULL`.
- [getLastObject](1808089-getlastobject.md): The last object in the ordered set if there is one, otherwise `NULL`.
- [getObject](1808098-getobject.md): Gets the object at a particular index.
- [getOrderingRef](1808105-getorderingref.md): Returns the ordering context the ordered set was created with.
- [initWithCapacity](1808112-initwithcapacity.md): Initializes a new instance of OSOrderedSet.
- [isEqualTo(const OSMetaClassBase \*)](1808121-isequalto.md): Tests the equality of an OSOrderedSet against an arbitrary object.
- [isEqualTo(const OSOrderedSet \*)](1808130-isequalto.md): Tests the equality of two OSOrderedSet objects.
- [member](1808138-member.md): Checks the ordered set for the presence of an object.
- [orderObject](1808149-orderobject.md): Calls the ordered set's order function against a `NULL` object.
- [removeObject](1808158-removeobject.md): Removes an object from the ordered set.
- [setCapacityIncrement](1808163-setcapacityincrement.md): Sets the storage increment of the ordered set.
- [setLastObject](1808176-setlastobject.md): Adds an object at the end of the OSOrderedSet if it is not already present.
- [setObject(const OSMetaClassBase \*)](1808180-setobject.md): Adds an object to the OSOrderedSet if it is not already present, storing it in sorted order if there is an order function.
- [setObject(unsigned int, const OSMetaClassBase \*)](1808188-setobject.md): Adds an object to an OSOrderedSet at a specified index if it is not already present.
- [withCapacity](1808196-withcapacity.md): Creates and initializes an empty OSOrderedSet.
