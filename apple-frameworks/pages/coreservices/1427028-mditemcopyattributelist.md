> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1427028-mditemcopyattributelist](https://developer.apple.com/documentation/coreservices/1427028-mditemcopyattributelist)

# MDItemCopyAttributeList

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the values of the specified attributes in the metadata item.

## Declaration

```objectivec
CFDictionaryRef MDItemCopyAttributeList(MDItemRef item, ...);
```

## Parameters

- `item`: The item to be queried.
- `...`: A comma-separated varargs list of the string attribute names..

<a id="return_value"></a>

## Return Value

A CFDictionary containing keys for the requested attribute names, and the corresponding values. If an attribute does not exist, or the attribute is unreadable, there will be no key-value pair for it in the dictionary. Returns `NULL` on failure.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttribute](1427080-mditemcopyattribute.md): Returns the value of the specified attribute in the metadata item.
- [MDItemCopyAttributes](1426980-mditemcopyattributes.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeNames](1427066-mditemcopyattributenames.md): Returns an array containing the attribute names existing in the metadata item.
