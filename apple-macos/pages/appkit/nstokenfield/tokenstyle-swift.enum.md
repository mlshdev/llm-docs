> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfield/tokenstyle-swift.enum](https://developer.apple.com/documentation/appkit/nstokenfield/tokenstyle-swift.enum)

# NSTokenField.TokenStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](../nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell(\_:styleForRepresentedObject:)](../nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Declaration

```swift
enum TokenStyle
```

## Topics

### Enumeration Cases

- [NSTokenField.TokenStyle.default](tokenstyle-swift.enum/default.md)
- [NSTokenField.TokenStyle.none](tokenstyle-swift.enum/none.md)
- [NSTokenField.TokenStyle.plainSquared](tokenstyle-swift.enum/plainsquared.md)
- [NSTokenField.TokenStyle.rounded](tokenstyle-swift.enum/rounded.md)
- [NSTokenField.TokenStyle.squared](tokenstyle-swift.enum/squared.md)

### Initializers

- [init(rawValue:)](tokenstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTokenStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](../nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell:styleForRepresentedObject:](../nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Declaration

```objectivec
enum NSTokenStyle : NSUInteger;
```

## Topics

### Enumeration Cases

- [NSTokenStyleDefault](tokenstyle-swift.enum/default.md)
- [NSTokenStyleNone](tokenstyle-swift.enum/none.md)
- [NSTokenStylePlainSquared](tokenstyle-swift.enum/plainsquared.md)
- [NSTokenStyleRounded](tokenstyle-swift.enum/rounded.md)
- [NSTokenStyleSquared](tokenstyle-swift.enum/squared.md)

### Deprecated

- [NSDefaultTokenStyle](../nsdefaulttokenstyle.md): Deprecated. Style best used for keyword type tokens.
- [NSPlainTextTokenStyle](../nsplaintexttokenstyle.md): Deprecated. Style to use for data you want represented as plain-text and without any token background.
- [NSRoundedTokenStyle](../nsroundedtokenstyle.md): Deprecated. Style best used for address type tokens.
