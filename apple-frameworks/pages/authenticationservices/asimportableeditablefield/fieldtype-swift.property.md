> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableeditablefield/fieldtype-swift.property](https://developer.apple.com/documentation/authenticationservices/asimportableeditablefield/fieldtype-swift.property)

# fieldType

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The type of this editable field.

## Declaration

```swift
var fieldType: ASImportableEditableField.FieldType
```

<a id="discussion"></a>

## Discussion

This value must be one of:

- `string`
- `concealed-string`
- `email`
- `number`
- `boolean`
- `date`

## See Also

### Accessing field properties

- [id](id.md): A unique identifier for this editable field.
- [ASImportableEditableField.FieldType](fieldtype-swift.enum.md): An enumeration of editable field types.
- [value](value.md): The value stored in this editable field.
- [label](label.md): A value describing the field, if any.
