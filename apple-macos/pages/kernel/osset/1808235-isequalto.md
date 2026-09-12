> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osset/1808235-isequalto](https://developer.apple.com/documentation/kernel/osset/1808235-isequalto)

# isEqualTo(const OSMetaClassBase \*)

**Interface language:** Objective-C

**Framework:** Kernel

Tests the equality of an OSSet against an arbitrary object.

## Declaration

```objectivec
virtual bool isEqualTo(
 const OSMetaClassBase *anObject) const; 
```

## Parameters

- `anObject`: The object being compared against the receiver.

<a id="return_value"></a>

## Return Value

`true` if the two objects are equivalent, `false` otherwise.

<a id="overview"></a>

## Overview

An OSSet object is considered equal to another object if the other object is derived from OSSet and compares equal as a set.

## See Also

### Miscellaneous

- [containsObject](1808031-containsobject.md): Checks the set for the presence of an object.
- [copyCollection](1808046-copycollection.md): Creates a deep copy of this set and its child collections.
- [ensureCapacity](1808068-ensurecapacity.md): Ensures the set has enough space to store the requested number of distinct objects.
- [flushCollection](1808084-flushcollection.md): Removes and releases all objects within the set.
- [free](1808104-free.md): Deallocates or releases any resources used by the OSSet instance.
- [getAnyObject](1808128-getanyobject.md): Returns an arbitrary (not random) object from the set.
- [getCapacity](1808152-getcapacity.md): Returns the number of objects the set can store without reallocating.
- [getCapacityIncrement](1808173-getcapacityincrement.md): Returns the storage increment of the set.
- [getCount](1808189-getcount.md): Returns the current number of objects within the set.
- [initWithArray](1808200-initwitharray.md): Initializes a new OSSet populated with the contents of an OSArray.
- [initWithCapacity](1808213-initwithcapacity.md): Initializes a new instance of OSSet.
- [initWithObjects](1808221-initwithobjects.md): Initializes a new OSSet populated with objects provided.
- [initWithSet](1808228-initwithset.md): Initializes a new OSSet populated with the contents of another OSSet.
- [isEqualTo(const OSSet \*)](1808239-isequalto.md): Tests the equality of two OSSet objects.
- [member](1808245-member.md): Checks the set for the presence of an object.
- [merge(const OSArray \*)](1808250-merge.md): Adds the contents of an OSArray to the set.
- [merge(const OSSet \*)](1808253-merge.md): Adds the contents of an OSet to the set.
- [removeObject](1808257-removeobject.md): Removes an object from the set.
- [serialize](1808260-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setCapacityIncrement](1808264-setcapacityincrement.md): Sets the storage increment of the set.
- [setObject](1808269-setobject.md): Adds an object to the OSSet if it is not already present.
- [withArray](1808277-witharray.md): Creates and initializes an OSSet populated with the contents of an OSArray.
- [withCapacity](1808282-withcapacity.md): Creates and initializes an empty OSSet.
- [withObjects](1808287-withobjects.md): Creates and initializes an OSSet populated with objects provided.
- [withSet](1808291-withset.md): Creates and initializes an OSSet populated with the contents of another OSSet.
