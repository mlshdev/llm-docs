> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/init(identifier:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/init(identifier:))

# init(identifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates an option object with the given identifier string.

## Declaration

```swift
init(identifier: String)
```

<a id="Discussion"></a>

## Discussion

Use this initializer to create custom compression options.

## See Also

### Creating a compression option

- [init()](init%28%29.md): Creates an option object containing no options.
- [init(options:)](init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [init(coder:)](init%28coder_%29.md): Creates an option object from data in an unarchiver.

# initWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates an option object with the given identifier string.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

<a id="Discussion"></a>

## Discussion

Use this initializer to create custom compression options.

## See Also

### Creating a compression option

- [init](init%28%29.md): Creates an option object containing no options.
- [initWithCompressionOptions:](init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [initWithCoder:](init%28coder_%29.md): Creates an option object from data in an unarchiver.
