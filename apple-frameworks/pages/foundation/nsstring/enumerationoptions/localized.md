> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/enumerationoptions/localized](https://developer.apple.com/documentation/foundation/nsstring/enumerationoptions/localized)

# localized (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var localized: NSString.EnumerationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Causes the enumeration to occur using the current locale. This does not make a difference in line, paragraph, or composed character sequence enumeration, but it may for words or sentences.

## See Also

### Constants

- [byLines](bylines.md)
- [byParagraphs](byparagraphs.md)
- [byComposedCharacterSequences](bycomposedcharactersequences.md)
- [byWords](bywords.md)
- [bySentences](bysentences.md)
- [reverse](reverse.md)
- [substringNotRequired](substringnotrequired.md)

# NSStringEnumerationLocalized (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSStringEnumerationLocalized
```

<a id="Discussion"></a>

## Discussion

Causes the enumeration to occur using the current locale. This does not make a difference in line, paragraph, or composed character sequence enumeration, but it may for words or sentences.

## See Also

### Constants

- [NSStringEnumerationByLines](bylines.md)
- [NSStringEnumerationByParagraphs](byparagraphs.md)
- [NSStringEnumerationByComposedCharacterSequences](bycomposedcharactersequences.md)
- [NSStringEnumerationByWords](bywords.md)
- [NSStringEnumerationBySentences](bysentences.md)
- [NSStringEnumerationReverse](reverse.md)
- [NSStringEnumerationSubstringNotRequired](substringnotrequired.md)
