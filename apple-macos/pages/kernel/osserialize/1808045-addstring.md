> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osserialize/1808045-addstring](https://developer.apple.com/documentation/kernel/osserialize/1808045-addstring)

# addString

**Interface language:** Objective-C

**Framework:** Kernel

Appends a C string to the XML stream.

## Declaration

```objectivec
virtual bool addString(
 const char *cString); 
```

## Parameters

- `cString`: The C string to append to the XML stream.

<a id="return_value"></a>

## Return Value

`true` if `cString` is successfully added to the XML stream, `false` otherwise.

## See Also

### Miscellaneous

- [addChar](1808034-addchar.md): Appends a single character to the XML stream.
- [addXMLEndTag](1808061-addxmlendtag.md): Appends an XML end tag to the XML stream.
- [addXMLStartTag](1808073-addxmlstarttag.md): Appends an XML start tag to the XML stream.
- [clearText](1808086-cleartext.md): Resets the OSSerialize object.
- [previouslySerialized](1808096-previouslyserialized.md): Checks whether the object has already been serialized into the XML stream, emitting a reference if it has.
- [text](1808110-text.md): Returns the XML text serialized so far.
- [withCapacity](1808120-withcapacity.md): Creates and initializes an empty OSSerialize object.
