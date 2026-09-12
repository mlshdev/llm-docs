> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osboolean/1808251-withboolean](https://developer.apple.com/documentation/kernel/osboolean/1808251-withboolean)

# withBoolean

**Interface language:** Objective-C

**Framework:** Kernel

Returns one of the global instances of OSBoolean.

## Declaration

```objectivec
static OSBoolean * withBoolean(
 boolvalue); 
```

## Parameters

- `value`: A boolean value.

<a id="return_value"></a>

## Return Value

The global instance of OSBoolean with the boolean `value`.

<a id="overview"></a>

## Overview

This function actually returns either [kOSBooleanTrue](../kosbooleantrue.md) or [kOSBooleanFalse](../kosbooleanfalse.md), so that you can always use pointer comparison with OSBoolean objects.

## See Also

### Miscellaneous

- [free](1808144-free.md): Overridden to prevent deallocation of the shared global instances.
- [getValue](1808164-getvalue.md): Returns the C++ `bool` value for the OSBoolean object.
- [isEqualTo(const OSBoolean \*)](1808182-isequalto.md): Tests the equality of two OSBoolean objects.
- [isEqualTo(const OSMetaClassBase \*)](1808201-isequalto.md): Tests the equality an OSBoolean to an arbitrary object.
- [isFalse](1808215-isfalse.md): Checks whether the OSBoolean object represents a `false`` bool` value.
- [isTrue](1808223-istrue.md): Checks whether the OSBoolean object represents a `true`` bool` value.
- [serialize](1808232-serialize.md): Archives the receiver into the provided OSSerialize object.
- [taggedRelease](1808241-taggedrelease.md): Overrides the reference counting mechanism for the shared global instances.
- [taggedRetain](1808247-taggedretain.md): Overrides the reference counting mechanism for the shared global instances.
