> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/init(vcardrepresentation:)-5c7h8](https://developer.apple.com/documentation/addressbook/abperson/init(vcardrepresentation:)-5c7h8)

# init(VCardRepresentation:)

**Framework:** Address Book  
**Kind:** Initializer  
**Availability:** macOS

Returns an `ABPerson` instance initialized with the given data.

## Declaration

```swift
init!(VCardRepresentation vCardData: Data!)
```

## Parameters

- `vCardData`: A data object containing a vCard representation of a person record.

<a id="return-value"></a>

## Return Value

An `ABPerson` instance initialized with the given data.

<a id="Discussion"></a>

## Discussion

Version 2.1 and 3.0 of the vCard format are supported. If `vCardData` is `nil` or is not a valid vCard format, this method returns `nil`.

## See Also

### Importing and Exporting vCard Formatted Files

- [vCardRepresentation()](vcardrepresentation%28%29.md): Returns the vCard representation of the person record as a data object in vCard format.
