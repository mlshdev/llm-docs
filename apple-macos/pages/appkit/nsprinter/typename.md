> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/typename](https://developer.apple.com/documentation/appkit/nsprinter/typename)

# NSPrinter.TypeName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The type you use to describe a printer’s make and model.

## Declaration

```swift
struct TypeName
```

## Topics

### Initializers

- [init(\_:)](typename/init%28__%29.md): Creates a printer type name.
- [init(rawValue:)](typename/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting General Printer Information

- [printerNames](printernames.md): Returns the names of all available printers.
- [printerTypes](printertypes.md): Returns descriptions of the makes and models of all available printers.

# NSPrinterTypeName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The type you use to describe a printer’s make and model.

## Declaration

```objectivec
typedef NSString * NSPrinterTypeName;
```

## See Also

### Getting General Printer Information

- [printerNames](printernames.md): Returns the names of all available printers.
- [printerTypes](printertypes.md): Returns descriptions of the makes and models of all available printers.
