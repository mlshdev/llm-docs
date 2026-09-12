> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1427080-mditemcopyattribute](https://developer.apple.com/documentation/coreservices/1427080-mditemcopyattribute)

# MDItemCopyAttribute(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the value of the specified attribute in the metadata item.

## Declaration

```swift
func MDItemCopyAttribute(_ item: MDItem!, _ name: CFString!) -> CFTypeRef!
```

## Parameters

- `item`: The item to be queried.
- `name`: The name of the requested attribute.

<a id="return_value"></a>

## Return Value

A CFTypeRef, or `NULL` if there was a failure reading the attribute or the attribute does not exist.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttributes(\_:\_:)](1426980-mditemcopyattributes.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeNames(\_:)](1427066-mditemcopyattributenames.md): Returns an array containing the attribute names existing in the metadata item.

# MDItemCopyAttribute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the value of the specified attribute in the metadata item.

## Declaration

```objectivec
CFTypeRef MDItemCopyAttribute(MDItemRef item, CFStringRef name);
```

## Parameters

- `item`: The item to be queried.
- `name`: The name of the requested attribute.

<a id="return_value"></a>

## Return Value

A CFTypeRef, or `NULL` if there was a failure reading the attribute or the attribute does not exist.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttributes](1426980-mditemcopyattributes.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeList](1427028-mditemcopyattributelist.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeNames](1427066-mditemcopyattributenames.md): Returns an array containing the attribute names existing in the metadata item.
