> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osserialize/1808096-previouslyserialized](https://developer.apple.com/documentation/kernel/osserialize/1808096-previouslyserialized)

# previouslySerialized

**Interface language:** Objective-C

**Framework:** Kernel

Checks whether the object has already been serialized into the XML stream, emitting a reference if it has.

## Declaration

```objectivec
virtual bool previouslySerialized(
 const OSMetaClassBase *object); 
```

## Parameters

- `object`: The object to check.

<a id="return_value"></a>

## Return Value

`true` if `object` has already been serialized by this OSSerialize object and a reference to it is successfully added to the XML stream, `false` otherwise.

<a id="overview"></a>

## Overview

This function both reduces the size of generated XML by emitting shorter references to existing objects with the same value (particularly for OSString, OSSymbol, and OSData), and also preserves instance references so that the user-space I/O Kit library can reconstruct an identical graph of object relationships.

All classes that override OSObject::serialize. should call this function before doing any actual serialization; if it returns `true`, the `serialize` implementation can immediately return `true`.

## See Also

### Miscellaneous

- [addChar](1808034-addchar.md): Appends a single character to the XML stream.
- [addString](1808045-addstring.md): Appends a C string to the XML stream.
- [addXMLEndTag](1808061-addxmlendtag.md): Appends an XML end tag to the XML stream.
- [addXMLStartTag](1808073-addxmlstarttag.md): Appends an XML start tag to the XML stream.
- [clearText](1808086-cleartext.md): Resets the OSSerialize object.
- [text](1808110-text.md): Returns the XML text serialized so far.
- [withCapacity](1808120-withcapacity.md): Creates and initializes an empty OSSerialize object.
