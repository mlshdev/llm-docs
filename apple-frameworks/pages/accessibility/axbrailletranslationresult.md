> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbrailletranslationresult](https://developer.apple.com/documentation/accessibility/axbrailletranslationresult)

# AXBrailleTranslationResult (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The result of translation or back-translation.

## Declaration

```swift
class AXBrailleTranslationResult
```

## Topics

### Initializers

- [init(coder:)](axbrailletranslationresult/init%28coder_%29.md)

### Instance Properties

- [resultString](axbrailletranslationresult/resultstring.md): The resulting string after translation or back-translation.

### Instance Methods

- [inputIndex(forResultIndex:)](axbrailletranslationresult/inputindex%28forresultindex_%29.md): Maps a location in the resultString to where it came from in the input string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.

# AXBrailleTranslationResult (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The result of translation or back-translation.

## Declaration

```objectivec
@interface AXBrailleTranslationResult : NSObject
```

## Topics

### Instance Properties

- [locationMap](axbrailletranslationresult/locationmap.md): An array of integers that has the same length as the resultString. locationMap\[i\]-th character in the input string corresponds to resultString\[i\].
- [resultString](axbrailletranslationresult/resultstring.md): The resulting string after translation or back-translation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.
