> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/isvalid(_:)](https://developer.apple.com/documentation/fskit/fsitem/attributes/isvalid(_:))

# isValid(\_:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Returns a Boolean value that indicates whether the attribute is valid.

## Declaration

```swift
func isValid(_ attribute: FSItem.Attribute) -> Bool
```

<a id="discussion"></a>

## Discussion

If the value returned by this method is `YES` (Objective-C) or `true` (Swift), a caller can safely use the given attribute.

## See Also

### Validating and invalidating attributes

- [invalidateAllProperties()](invalidateallproperties%28%29.md): Marks all attributes inactive.

# isValid: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Returns a Boolean value that indicates whether the attribute is valid.

## Declaration

```objectivec
- (BOOL) isValid:(FSItemAttribute) attribute;
```

<a id="discussion"></a>

## Discussion

If the value returned by this method is `YES` (Objective-C) or `true` (Swift), a caller can safely use the given attribute.

## See Also

### Validating and invalidating attributes

- [invalidateAllProperties](invalidateallproperties%28%29.md): Marks all attributes inactive.
