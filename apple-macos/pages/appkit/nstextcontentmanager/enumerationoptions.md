> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/enumerationoptions](https://developer.apple.com/documentation/appkit/nstextcontentmanager/enumerationoptions)

# NSTextContentManager.EnumerationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+

Values that control the order in which the framework enumerates text elements.

## Declaration

```swift
struct EnumerationOptions
```

## Topics

### Creating text element provider enumeration options

- [init(rawValue:)](enumerationoptions/init%28rawvalue_%29.md): Creates a new text element provider with the provided raw value.

### Accessing the enumeration setting

- [reverse](enumerationoptions/reverse.md): Returns whether enumerations start from the end of the text element.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Customizing and validating text elements

- [delegate](delegate.md): The delegate for the content manager object.
- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.

# NSTextContentManagerEnumerationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that control the order in which the framework enumerates text elements.

## Declaration

```objectivec
enum NSTextContentManagerEnumerationOptions : NSUInteger;
```

## Topics

### Accessing the enumeration setting

- [NSTextContentManagerEnumerationOptionsReverse](enumerationoptions/reverse.md): Returns whether enumerations start from the end of the text element.

### Enumeration Cases

- [NSTextContentManagerEnumerationOptionsNone](../nstextcontentmanagerenumerationoptions/nstextcontentmanagerenumerationoptionsnone.md): The value that represents no custom enumeration handling.

## See Also

### Customizing and validating text elements

- [delegate](delegate.md): The delegate for the content manager object.
- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
