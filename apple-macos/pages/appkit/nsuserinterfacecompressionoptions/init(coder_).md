> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/init(coder:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates an option object from data in an unarchiver.

## Declaration

```swift
init(coder: NSCoder)
```

## See Also

### Creating a compression option

- [init()](init%28%29.md): Creates an option object containing no options.
- [init(options:)](init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [init(identifier:)](init%28identifier_%29.md): Creates an option object with the given identifier string.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates an option object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a compression option

- [init](init%28%29.md): Creates an option object containing no options.
- [initWithCompressionOptions:](init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [initWithIdentifier:](init%28identifier_%29.md): Creates an option object with the given identifier string.
