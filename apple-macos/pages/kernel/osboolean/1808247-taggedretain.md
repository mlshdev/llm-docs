> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osboolean/1808247-taggedretain](https://developer.apple.com/documentation/kernel/osboolean/1808247-taggedretain)

# taggedRetain

**Interface language:** Objective-C

**Framework:** Kernel

Overrides the reference counting mechanism for the shared global instances.

## Declaration

```objectivec
virtual void taggedRetain(
 const void *tag) const; 
```

## Parameters

- `tag`: Unused.

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
- [withBoolean](1808251-withboolean.md): Returns one of the global instances of OSBoolean.
