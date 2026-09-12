> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osserialize/1808086-cleartext](https://developer.apple.com/documentation/kernel/osserialize/1808086-cleartext)

# clearText

**Interface language:** Objective-C

**Framework:** Kernel

Resets the OSSerialize object.

## Declaration

```objectivec
virtual void clearText(); 
```

<a id="overview"></a>

## Overview

This function is a useful optimization if you are serializing the same object repeatedly.

## See Also

### Miscellaneous

- [addChar](1808034-addchar.md): Appends a single character to the XML stream.
- [addString](1808045-addstring.md): Appends a C string to the XML stream.
- [addXMLEndTag](1808061-addxmlendtag.md): Appends an XML end tag to the XML stream.
- [addXMLStartTag](1808073-addxmlstarttag.md): Appends an XML start tag to the XML stream.
- [previouslySerialized](1808096-previouslyserialized.md): Checks whether the object has already been serialized into the XML stream, emitting a reference if it has.
- [text](1808110-text.md): Returns the XML text serialized so far.
- [withCapacity](1808120-withcapacity.md): Creates and initializes an empty OSSerialize object.
