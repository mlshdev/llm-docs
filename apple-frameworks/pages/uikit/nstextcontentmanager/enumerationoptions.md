> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/enumerationoptions](https://developer.apple.com/documentation/uikit/nstextcontentmanager/enumerationoptions)

# NSTextContentManager.EnumerationOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that control the order in which the framework enumerates text elements.

## Declaration

```objectivec
enum NSTextContentManagerEnumerationOptions : NSUInteger;
```

## Topics

### Accessing the enumeration setting

- [NSTextContentManagerEnumerationOptionsReverse](enumerationoptions/reverse.md): Returns whether enumerations start from the end of the text element.

### Enumeration options

- [NSTextContentManagerEnumerationOptionsNone](../nstextcontentmanagerenumerationoptions/nstextcontentmanagerenumerationoptionsnone.md): The value that represents no custom enumeration handing in text element enumerations.

## See Also

### Customizing and validating text elements

- [delegate](delegate.md): The delegate for the content manager object.
- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
