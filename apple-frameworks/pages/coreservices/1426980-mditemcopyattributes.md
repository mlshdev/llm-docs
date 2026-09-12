> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1426980-mditemcopyattributes](https://developer.apple.com/documentation/coreservices/1426980-mditemcopyattributes)

# MDItemCopyAttributes(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the values of the specified attributes in the metadata item.

## Declaration

```swift
func MDItemCopyAttributes(_ item: MDItem!, _ names: CFArray!) -> CFDictionary!
```

## Parameters

- `item`: The item to be queried.
- `names`: A CFArray containing the names of the requested attributes.

<a id="return_value"></a>

## Return Value

A CFDictionary containing keys for the requested attribute names, and the corresponding values. If an attribute does not exist, or the attribute is unreadable, there will be no key-value pair for it in the dictionary. Returns `NULL` on failure.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttribute(\_:\_:)](1427080-mditemcopyattribute.md): Returns the value of the specified attribute in the metadata item.
- [MDItemCopyAttributeNames(\_:)](1427066-mditemcopyattributenames.md): Returns an array containing the attribute names existing in the metadata item.

# MDItemCopyAttributes (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the values of the specified attributes in the metadata item.

## Declaration

```objectivec
CFDictionaryRef MDItemCopyAttributes(MDItemRef item, CFArrayRef names);
```

## Parameters

- `item`: The item to be queried.
- `names`: A CFArray containing the names of the requested attributes.

<a id="return_value"></a>

## Return Value

A CFDictionary containing keys for the requested attribute names, and the corresponding values. If an attribute does not exist, or the attribute is unreadable, there will be no key-value pair for it in the dictionary. Returns `NULL` on failure.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttribute](1427080-mditemcopyattribute.md): Returns the value of the specified attribute in the metadata item.
- [MDItemCopyAttributeList](1427028-mditemcopyattributelist.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeNames](1427066-mditemcopyattributenames.md): Returns an array containing the attribute names existing in the metadata item.
