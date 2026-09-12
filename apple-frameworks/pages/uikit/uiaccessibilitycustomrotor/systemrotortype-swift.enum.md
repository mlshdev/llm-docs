> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/systemrotortype-swift.enum](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/systemrotortype-swift.enum)

# UIAccessibilityCustomRotor.SystemRotorType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate the type of content that the rotor represents.

## Declaration

```swift
enum SystemRotorType
```

## Topics

### Constants

- [UIAccessibilityCustomRotor.SystemRotorType.none](systemrotortype-swift.enum/none.md): No specific type.
- [UIAccessibilityCustomRotor.SystemRotorType.link](systemrotortype-swift.enum/link.md): A link.
- [UIAccessibilityCustomRotor.SystemRotorType.visitedLink](systemrotortype-swift.enum/visitedlink.md): A visited link.
- [UIAccessibilityCustomRotor.SystemRotorType.heading](systemrotortype-swift.enum/heading.md): Any heading-level text.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel1](systemrotortype-swift.enum/headinglevel1.md): A first-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel2](systemrotortype-swift.enum/headinglevel2.md): A second-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel3](systemrotortype-swift.enum/headinglevel3.md): A third-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel4](systemrotortype-swift.enum/headinglevel4.md): A fourth-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel5](systemrotortype-swift.enum/headinglevel5.md): A fifth-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.headingLevel6](systemrotortype-swift.enum/headinglevel6.md): A sixth-level heading.
- [UIAccessibilityCustomRotor.SystemRotorType.boldText](systemrotortype-swift.enum/boldtext.md): Any bold text.
- [UIAccessibilityCustomRotor.SystemRotorType.italicText](systemrotortype-swift.enum/italictext.md): Any italicized text.
- [UIAccessibilityCustomRotor.SystemRotorType.underlineText](systemrotortype-swift.enum/underlinetext.md): Any underlined text.
- [UIAccessibilityCustomRotor.SystemRotorType.misspelledWord](systemrotortype-swift.enum/misspelledword.md): A misspelled word.
- [UIAccessibilityCustomRotor.SystemRotorType.image](systemrotortype-swift.enum/image.md): An image.
- [UIAccessibilityCustomRotor.SystemRotorType.textField](systemrotortype-swift.enum/textfield.md): A text field.
- [UIAccessibilityCustomRotor.SystemRotorType.table](systemrotortype-swift.enum/table.md): A table of information.
- [UIAccessibilityCustomRotor.SystemRotorType.list](systemrotortype-swift.enum/list.md): A list of items.
- [UIAccessibilityCustomRotor.SystemRotorType.landmark](systemrotortype-swift.enum/landmark.md): A landmark.

### Initializers

- [init(rawValue:)](systemrotortype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the rotor type

- [systemRotorType](systemrotortype-swift.property.md): The type of content that the rotor searches.

# UIAccessibilityCustomSystemRotorType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate the type of content that the rotor represents.

## Declaration

```objectivec
enum UIAccessibilityCustomSystemRotorType : NSInteger;
```

## Topics

### Constants

- [UIAccessibilityCustomSystemRotorTypeNone](systemrotortype-swift.enum/none.md): No specific type.
- [UIAccessibilityCustomSystemRotorTypeLink](systemrotortype-swift.enum/link.md): A link.
- [UIAccessibilityCustomSystemRotorTypeVisitedLink](systemrotortype-swift.enum/visitedlink.md): A visited link.
- [UIAccessibilityCustomSystemRotorTypeHeading](systemrotortype-swift.enum/heading.md): Any heading-level text.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel1](systemrotortype-swift.enum/headinglevel1.md): A first-level heading.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel2](systemrotortype-swift.enum/headinglevel2.md): A second-level heading.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel3](systemrotortype-swift.enum/headinglevel3.md): A third-level heading.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel4](systemrotortype-swift.enum/headinglevel4.md): A fourth-level heading.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel5](systemrotortype-swift.enum/headinglevel5.md): A fifth-level heading.
- [UIAccessibilityCustomSystemRotorTypeHeadingLevel6](systemrotortype-swift.enum/headinglevel6.md): A sixth-level heading.
- [UIAccessibilityCustomSystemRotorTypeBoldText](systemrotortype-swift.enum/boldtext.md): Any bold text.
- [UIAccessibilityCustomSystemRotorTypeItalicText](systemrotortype-swift.enum/italictext.md): Any italicized text.
- [UIAccessibilityCustomSystemRotorTypeUnderlineText](systemrotortype-swift.enum/underlinetext.md): Any underlined text.
- [UIAccessibilityCustomSystemRotorTypeMisspelledWord](systemrotortype-swift.enum/misspelledword.md): A misspelled word.
- [UIAccessibilityCustomSystemRotorTypeImage](systemrotortype-swift.enum/image.md): An image.
- [UIAccessibilityCustomSystemRotorTypeTextField](systemrotortype-swift.enum/textfield.md): A text field.
- [UIAccessibilityCustomSystemRotorTypeTable](systemrotortype-swift.enum/table.md): A table of information.
- [UIAccessibilityCustomSystemRotorTypeList](systemrotortype-swift.enum/list.md): A list of items.
- [UIAccessibilityCustomSystemRotorTypeLandmark](systemrotortype-swift.enum/landmark.md): A landmark.

## See Also

### Getting the rotor type

- [systemRotorType](systemrotortype-swift.property.md): The type of content that the rotor searches.
