> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1427066-mditemcopyattributenames](https://developer.apple.com/documentation/coreservices/1427066-mditemcopyattributenames)

# MDItemCopyAttributeNames(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns an array containing the attribute names existing in the metadata item.

## Declaration

```swift
func MDItemCopyAttributeNames(_ item: MDItem!) -> CFArray!
```

## Parameters

- `item`: The item to be queried.

<a id="return_value"></a>

## Return Value

A CFArray of CFString attribute names, or `NULL` on failure.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttribute(\_:\_:)](1427080-mditemcopyattribute.md): Returns the value of the specified attribute in the metadata item.
- [MDItemCopyAttributes(\_:\_:)](1426980-mditemcopyattributes.md): Returns the values of the specified attributes in the metadata item.

# MDItemCopyAttributeNames (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns an array containing the attribute names existing in the metadata item.

## Declaration

```objectivec
CFArrayRef MDItemCopyAttributeNames(MDItemRef item);
```

## Parameters

- `item`: The item to be queried.

<a id="return_value"></a>

## Return Value

A CFArray of CFString attribute names, or `NULL` on failure.

## See Also

### Retrieving Metadata Attributes 

- [MDItemCopyAttribute](1427080-mditemcopyattribute.md): Returns the value of the specified attribute in the metadata item.
- [MDItemCopyAttributes](1426980-mditemcopyattributes.md): Returns the values of the specified attributes in the metadata item.
- [MDItemCopyAttributeList](1427028-mditemcopyattributelist.md): Returns the values of the specified attributes in the metadata item.
