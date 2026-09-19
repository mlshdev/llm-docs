> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asimportableeditablefield/id

# id

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A unique identifier for this editable field.

## Declaration

```swift
var id: Data?
```

<a id="discussion"></a>

## Discussion

The editable field doesn’t display this value to someone using the app.

## See Also

### Accessing field properties

- [fieldType](fieldtype-swift.property.md): The type of this editable field.
- [ASImportableEditableField.FieldType](fieldtype-swift.enum.md): An enumeration of editable field types.
- [value](value.md): The value stored in this editable field.
- [label](label.md): A value describing the field, if any.
