> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/role/description(for:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/role/description(for:))

# description(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a standard role description for a user interface element.

## Declaration

```swift
static func description(for element: Any) -> String?
```

<a id="Discussion"></a>

## Discussion

This function is like the [description(with:)](description%28with_%29.md) function, except that it queries `element` to get the role and subrole. The [description(with:)](description%28with_%29.md) function is more efficient, but this function is useful for accessorizing base classes so that they properly handle derived classes, which may override the subrole or even the role.

## See Also

### Descriptions

- [description(with:)](description%28with_%29.md): Returns a standard description for a role and subrole.

# NSAccessibilityRoleDescriptionForUIElement (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns a standard role description for a user interface element.

## Declaration

```objectivec
extern NSString *NSAccessibilityRoleDescriptionForUIElement(id element);
```

<a id="Discussion"></a>

## Discussion

This function is like the [NSAccessibilityRoleDescription](description%28with_%29.md) function, except that it queries `element` to get the role and subrole. The [NSAccessibilityRoleDescription](description%28with_%29.md) function is more efficient, but this function is useful for accessorizing base classes so that they properly handle derived classes, which may override the subrole or even the role.

## See Also

### Descriptions

- [NSAccessibilityRoleDescription](description%28with_%29.md): Returns a standard description for a role and subrole.
