> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitysubrole](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitysubrole)

# accessibilitySubrole

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The specialized interface element type that the accessibility element represents.

## Declaration

```objectivec
@property (copy, nullable) NSAccessibilitySubrole accessibilitySubrole;
```

<a id="Discussion"></a>

## Discussion

For a list of possible subroles, see `Subroles`.

## See Also

### Assigning roles

- [accessibilityRequired](accessibilityrequired.md): A Boolean value that determines whether the accessibility element must have content for successful submission of a form.
- [accessibilityRole](accessibilityrole.md): The type of interface element that the accessibility element represents.
- [accessibilityRoleDescription](accessibilityroledescription.md): A localized, human-intelligible description of the accessibility element’s role, such as *radio button*.
- [NSAccessibilityRole](../nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilitySubrole](../nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
