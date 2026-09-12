> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableeditablefield/init(id:fieldtype:value:label:)](https://developer.apple.com/documentation/authenticationservices/asimportableeditablefield/init(id:fieldtype:value:label:))

# init(id:fieldType:value:label:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates an editable field instance.

## Declaration

```swift
init(id: Data?, fieldType: ASImportableEditableField.FieldType, value: String, label: String? = nil)
```

## Parameters

- `id`: A unique identifier for this editable field.
- `fieldType`: The type of this editable field.
- `value`: The value stored in this editable field.
- `label`: A value describing the field, if any.
