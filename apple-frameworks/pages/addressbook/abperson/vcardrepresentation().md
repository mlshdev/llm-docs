> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/vcardrepresentation()](https://developer.apple.com/documentation/addressbook/abperson/vcardrepresentation())

# vCardRepresentation() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the vCard representation of the person record as a data object in vCard format.

## Declaration

```swift
func vCardRepresentation() -> Data!
```

<a id="return-value"></a>

## Return Value

A data object containing the vCard representation of the person record.

## See Also

### Importing and Exporting vCard Formatted Files

- [init(VCardRepresentation:)](init%28vcardrepresentation_%29-5c7h8.md): Returns an `ABPerson` instance initialized with the given data.

# vCardRepresentation (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the vCard representation of the person record as a data object in vCard format.

## Declaration

```objectivec
- (NSData *) vCardRepresentation;
```

<a id="return-value"></a>

## Return Value

A data object containing the vCard representation of the person record.
