> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/enumerationoptions/substringnotrequired](https://developer.apple.com/documentation/foundation/nsstring/enumerationoptions/substringnotrequired)

# substringNotRequired (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var substringNotRequired: NSString.EnumerationOptions { get }
```

<a id="Discussion"></a>

## Discussion

A way to indicate that the block does not need substring, in which case `nil` will be passed. This is simply a performance shortcut.

## See Also

### Constants

- [byLines](bylines.md)
- [byParagraphs](byparagraphs.md)
- [byComposedCharacterSequences](bycomposedcharactersequences.md)
- [byWords](bywords.md)
- [bySentences](bysentences.md)
- [reverse](reverse.md)
- [localized](localized.md)

# NSStringEnumerationSubstringNotRequired (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSStringEnumerationSubstringNotRequired
```

<a id="Discussion"></a>

## Discussion

A way to indicate that the block does not need substring, in which case `nil` will be passed. This is simply a performance shortcut.

## See Also

### Constants

- [NSStringEnumerationByLines](bylines.md)
- [NSStringEnumerationByParagraphs](byparagraphs.md)
- [NSStringEnumerationByComposedCharacterSequences](bycomposedcharactersequences.md)
- [NSStringEnumerationByWords](bywords.md)
- [NSStringEnumerationBySentences](bysentences.md)
- [NSStringEnumerationReverse](reverse.md)
- [NSStringEnumerationLocalized](localized.md)
