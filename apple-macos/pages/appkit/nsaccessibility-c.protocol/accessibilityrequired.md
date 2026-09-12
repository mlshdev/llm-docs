> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityrequired](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityrequired)

# accessibilityRequired

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that determines whether the accessibility element must have content for successful submission of a form.

## Declaration

```objectivec
@property (getter=isAccessibilityRequired) BOOL accessibilityRequired;
```

<a id="Discussion"></a>

## Discussion

Returns YES if the element is required to have content; otherwise, NO.

## See Also

### Assigning roles

- [accessibilityRole](accessibilityrole.md): The type of interface element that the accessibility element represents.
- [accessibilityRoleDescription](accessibilityroledescription.md): A localized, human-intelligible description of the accessibility element’s role, such as *radio button*.
- [accessibilitySubrole](accessibilitysubrole.md): The specialized interface element type that the accessibility element represents.
- [NSAccessibilityRole](../nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilitySubrole](../nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
