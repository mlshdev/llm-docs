> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbrailletranslator](https://developer.apple.com/documentation/accessibility/axbrailletranslator)

# AXBrailleTranslator (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Translates print text to Braille and Braille to print text according to the given Braille table.

## Declaration

```swift
class AXBrailleTranslator
```

## Topics

### Initializers

- [init(brailleTable:)](axbrailletranslator/init%28brailletable_%29.md)

### Instance Methods

- [backTranslateBraille(\_:)](axbrailletranslator/backtranslatebraille%28__%29.md): Input Braille should use the unicode Braille characters (0x2800-0x28FF).
- [translatePrintText(\_:)](axbrailletranslator/translateprinttext%28__%29.md): Output Braille uses the unicode Braille characters (0x2800-0x28FF).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.

# AXBrailleTranslator (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Translates print text to Braille and Braille to print text according to the given Braille table.

## Declaration

```objectivec
@interface AXBrailleTranslator : NSObject
```

## Topics

### Instance Methods

- [backTranslateBraille:](axbrailletranslator/backtranslatebraille%28__%29.md): Input Braille should use the unicode Braille characters (0x2800-0x28FF).
- [initWithBrailleTable:](axbrailletranslator/init%28brailletable_%29.md)
- [translatePrintText:](axbrailletranslator/translateprinttext%28__%29.md): Output Braille uses the unicode Braille characters (0x2800-0x28FF).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.
