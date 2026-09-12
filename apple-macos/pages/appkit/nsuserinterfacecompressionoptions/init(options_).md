> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/init(options:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/init(options:))

# init(options:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates an option object that represents the union of the supplied options.

## Declaration

```swift
init(options: Set<NSUserInterfaceCompressionOptions>)
```

## Parameters

- `options`: A set of [NSUserInterfaceCompressionOptions](../nsuserinterfacecompressionoptions.md) objects.

## See Also

### Creating a compression option

- [init()](init%28%29.md): Creates an option object containing no options.
- [init(identifier:)](init%28identifier_%29.md): Creates an option object with the given identifier string.
- [init(coder:)](init%28coder_%29.md): Creates an option object from data in an unarchiver.

# initWithCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates an option object that represents the union of the supplied options.

## Declaration

```objectivec
- (instancetype) initWithCompressionOptions:(NSSet<NSUserInterfaceCompressionOptions *> *) options;
```

## Parameters

- `options`: A set of [NSUserInterfaceCompressionOptions](../nsuserinterfacecompressionoptions.md) objects.

## See Also

### Creating a compression option

- [init](init%28%29.md): Creates an option object containing no options.
- [initWithIdentifier:](init%28identifier_%29.md): Creates an option object with the given identifier string.
- [initWithCoder:](init%28coder_%29.md): Creates an option object from data in an unarchiver.
