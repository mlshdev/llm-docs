> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappenum/init(typeidentifier:value:)](https://developer.apple.com/documentation/appintentstesting/anyappenum/init(typeidentifier:value:))

# init(typeIdentifier:value:)

**Framework:** App Intents Testing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an enumeration with a typed raw value.

## Declaration

```swift
init(typeIdentifier: String, value: any LosslessStringConvertible)
```

## Parameters

- `typeIdentifier`: The enumeration type identifier.
- `value`: The raw, typed value that gets converted to a string representation.

## See Also

### Creating an enum

- [init(typeIdentifier:rawValue:)](init%28typeidentifier_rawvalue_%29.md): Creates a new instance with the specified enumeration identifier and raw value.
- [typeIdentifier](typeidentifier.md): The enumeration’s type identifier.
- [rawValue](rawvalue.md): The raw value of the selected enumeration option.
