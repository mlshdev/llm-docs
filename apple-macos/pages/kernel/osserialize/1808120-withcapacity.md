> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osserialize/1808120-withcapacity](https://developer.apple.com/documentation/kernel/osserialize/1808120-withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an empty OSSerialize object.

## Declaration

```objectivec
static OSSerialize * withCapacity(
 unsigned intcapacity); 
```

## Parameters

- `capacity`: The initial size of the XML buffer.

<a id="return_value"></a>

## Return Value

A new instance of OSSerialize with a retain count of 1; `NULL` on failure.

<a id="overview"></a>

## Overview

The serializer will grow as needed to accommodate more data.

## See Also

### Miscellaneous

- [addChar](1808034-addchar.md): Appends a single character to the XML stream.
- [addString](1808045-addstring.md): Appends a C string to the XML stream.
- [addXMLEndTag](1808061-addxmlendtag.md): Appends an XML end tag to the XML stream.
- [addXMLStartTag](1808073-addxmlstarttag.md): Appends an XML start tag to the XML stream.
- [clearText](1808086-cleartext.md): Resets the OSSerialize object.
- [previouslySerialized](1808096-previouslyserialized.md): Checks whether the object has already been serialized into the XML stream, emitting a reference if it has.
- [text](1808110-text.md): Returns the XML text serialized so far.
