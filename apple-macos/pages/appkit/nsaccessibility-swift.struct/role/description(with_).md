> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/role/description(with:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/role/description(with:))

# description(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a standard description for a role and subrole.

## Declaration

```swift
func description(with subrole: NSAccessibility.Subrole?) -> String?
```

<a id="Discussion"></a>

## Discussion

You should pass `nil` to this function if there is no subrole. This function returns a description of a standard role. For example, if you implement a button widget that does not inherit from [NSButton](../../nsbutton.md), you should use this function to return a localized role description matching that returned by a standard button.

## See Also

### Descriptions

- [description(for:)](description%28for_%29.md): Returns a standard role description for a user interface element.

# NSAccessibilityRoleDescription (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns a standard description for a role and subrole.

## Declaration

```objectivec
extern NSString *NSAccessibilityRoleDescription(NSAccessibilityRole role, NSAccessibilitySubrole subrole);
```

<a id="Discussion"></a>

## Discussion

You should pass `nil` to this function if there is no subrole. This function returns a description of a standard role. For example, if you implement a button widget that does not inherit from [NSButton](../../nsbutton.md), you should use this function to return a localized role description matching that returned by a standard button.

## See Also

### Descriptions

- [NSAccessibilityRoleDescriptionForUIElement](description%28for_%29.md): Returns a standard role description for a user interface element.
