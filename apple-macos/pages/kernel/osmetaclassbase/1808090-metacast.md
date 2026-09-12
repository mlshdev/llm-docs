> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osmetaclassbase/1808090-metacast](https://developer.apple.com/documentation/kernel/osmetaclassbase/1808090-metacast)

# metaCast(const OSString \*)

**Interface language:** Objective-C

**Framework:** Kernel

Casts this object is to the class managed by the named OSMetaClass.

## Declaration

```objectivec
OSMetaClassBase * metaCast(
 const OSString *toMeta) const; 
```

## Parameters

- `toMeta`: An OSString naming the desired target type.

<a id="return_value"></a>

## Return Value

`this` if the object is derived from the class named by `toMeta`, otherwise `NULL`.

<a id="overview"></a>

## Overview

It is far more convenient to use OSDynamicCast.

## See Also

### Miscellaneous

- [OSCheckTypeInst](../oschecktypeinst.md): Checks whether two objects are type-compatible.
- [OSDynamicCast](../osdynamiccast.md)
- [OSMemberFunctionCast](../osmemberfunctioncast.md): Converts a C++ member function pointer, relative to an instance, to a C-style pointer to function.
- [OSSafeRelease](../ossaferelease.md): Release an object if not `NULL`.
- [OSSafeReleaseNULL](../ossafereleasenull.md)
- [OSTypeAlloc](../ostypealloc.md)
- [OSTypeID](../ostypeid.md)
- [OSTypeIDInst](../ostypeidinst.md)
- [checkTypeInst](1808042-checktypeinst.md): Checks whether an object instance is of the same class as another object instance (or a subclass of that class).
- [getMetaClass](1808051-getmetaclass.md): Returns the OSMetaClass representing an OSMetaClassBase subclass.
- [getRetainCount](1808060-getretaincount.md): Abstract declaration of getRetainCount().
- [isEqualTo](1808069-isequalto.md): Checks whether another object is equal to the receiver.
- [metaCast(const char \*)](1808075-metacast.md): Casts this object is to the class managed by the named OSMetaClass.
- [metaCast(const OSMetaClass \*)](1808082-metacast.md): Casts this object is to the class managed by the given OSMetaClass.
- [metaCast(const OSSymbol \*)](1808095-metacast.md): Casts this object is to the class managed by the named OSMetaClass.
- [release()](1808103-release.md): Abstract declaration of release.
- [release(int)](1808109-release.md): Abstract declaration of release(int freeWhen).
- [retain](1808117-retain.md): Abstract declaration of retain().
- [safeMetaCast](1808126-safemetacast.md): Casts an object is to the class managed by the given OSMetaClass.
- [serialize](1808135-serialize.md): Abstract declaration of serialize.
- [taggedRelease(const void \*)](1808142-taggedrelease.md): Abstract declaration of taggedRelease(const void \*).
- [taggedRelease(const void \*, const int)](1808151-taggedrelease.md): Abstract declaration of taggedRelease(const void \*, const int freeWhen).
- [taggedRetain](1808161-taggedretain.md): Abstract declaration of taggedRetain(const void \*).
