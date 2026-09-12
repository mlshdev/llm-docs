> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/getattributesrequest/isattributewanted(_:)](https://developer.apple.com/documentation/fskit/fsitem/getattributesrequest/isattributewanted(_:))

# isAttributeWanted(\_:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

A method that indicates whether the request wants given attribute.

## Declaration

```swift
func isAttributeWanted(_ attribute: FSItem.Attribute) -> Bool
```

## Parameters

- `attribute`: The [FSItem.Attribute](../attribute.md) to check.

## See Also

### Inspecting requested attributes

- [wantedAttributes](wantedattributes.md): The attributes requested by the request.
- [FSItem.Attribute](../attribute.md): A value that indicates a set of item attributes to get or set.

# isAttributeWanted: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

A method that indicates whether the request wants given attribute.

## Declaration

```objectivec
- (BOOL) isAttributeWanted:(FSItemAttribute) attribute;
```

## Parameters

- `attribute`: The [FSItemAttribute](../attribute.md) to check.

## See Also

### Inspecting requested attributes

- [wantedAttributes](wantedattributes.md): The attributes requested by the request.
- [FSItemAttribute](../attribute.md): A value that indicates a set of item attributes to get or set.
