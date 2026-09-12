> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/setattributesrequest/wasattributeconsumed(_:)](https://developer.apple.com/documentation/fskit/fsitem/setattributesrequest/wasattributeconsumed(_:))

# wasAttributeConsumed(\_:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

A method that indicates whether the file system used the given attribute.

## Declaration

```swift
func wasAttributeConsumed(_ attribute: FSItem.Attribute) -> Bool
```

## Parameters

- `attribute`: The [FSItem.Attribute](../attribute.md) to check.

## See Also

### Inspecting used attributes

- [consumedAttributes](consumedattributes.md): The attributes successfully used by the file system.
- [FSItem.Attribute](../attribute.md): A value that indicates a set of item attributes to get or set.

# wasAttributeConsumed: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

A method that indicates whether the file system used the given attribute.

## Declaration

```objectivec
- (BOOL) wasAttributeConsumed:(FSItemAttribute) attribute;
```

## Parameters

- `attribute`: The [FSItemAttribute](../attribute.md) to check.

## See Also

### Inspecting used attributes

- [consumedAttributes](consumedattributes.md): The attributes successfully used by the file system.
- [FSItemAttribute](../attribute.md): A value that indicates a set of item attributes to get or set.
