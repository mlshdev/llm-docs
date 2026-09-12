> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osserialize/1808061-addxmlendtag](https://developer.apple.com/documentation/kernel/osserialize/1808061-addxmlendtag)

# addXMLEndTag

**Interface language:** Objective-C

**Framework:** Kernel

Appends an XML end tag to the XML stream.

## Declaration

```objectivec
virtual bool addXMLEndTag(
 const char *tagString); 
```

## Parameters

- `tagString`: The name of the XML tag to emit; for example, "string".

<a id="return_value"></a>

## Return Value

`true` if an XML end tag for `tagString` is successfully added to the XML stream, `false` otherwise.

<a id="overview"></a>

## Overview

This function emits the named tag, preceded by a slash character to indicate the closing of an entity, all enclosed within a pair of angle brackets.

A call to this function must balance an earlier call to addXMLStartTag using the same `tagString`.

## See Also

### Miscellaneous

- [addChar](1808034-addchar.md): Appends a single character to the XML stream.
- [addString](1808045-addstring.md): Appends a C string to the XML stream.
- [addXMLStartTag](1808073-addxmlstarttag.md): Appends an XML start tag to the XML stream.
- [clearText](1808086-cleartext.md): Resets the OSSerialize object.
- [previouslySerialized](1808096-previouslyserialized.md): Checks whether the object has already been serialized into the XML stream, emitting a reference if it has.
- [text](1808110-text.md): Returns the XML text serialized so far.
- [withCapacity](1808120-withcapacity.md): Creates and initializes an empty OSSerialize object.
