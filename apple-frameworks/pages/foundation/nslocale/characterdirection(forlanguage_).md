> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/characterdirection(forlanguage:)](https://developer.apple.com/documentation/foundation/nslocale/characterdirection(forlanguage:))

# characterDirection(forLanguage:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the direction of the sequence of characters in a line for the specified ISO language code.

## Declaration

```swift
class func characterDirection(forLanguage isoLangCode: String) -> NSLocale.LanguageDirection
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

Returns the direction in which characters appear within a line in the specified language. See [NSLocale.LanguageDirection](languagedirection.md) for possible values. If the appropriate direction can’t be determined [NSLocale.LanguageDirection.unknown](languagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [lineDirection(forLanguage:)](linedirection%28forlanguage_%29.md): Returns the direction of the sequence of lines for the specified ISO language code.
- [NSLocale.LanguageDirection](languagedirection.md): The directions that a language may take across a page of text.

# characterDirectionForLanguage: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the direction of the sequence of characters in a line for the specified ISO language code.

## Declaration

```objectivec
+ (NSLocaleLanguageDirection) characterDirectionForLanguage:(NSString *) isoLangCode;
```

## Parameters

- `isoLangCode`: The ISO language code.

<a id="return-value"></a>

## Return Value

Returns the direction in which characters appear within a line in the specified language. See [NSLocaleLanguageDirection](languagedirection.md) for possible values. If the appropriate direction can’t be determined [NSLocaleLanguageDirectionUnknown](languagedirection/unknown.md) is returned.

## See Also

### Getting Line and Character Direction for a Language

- [lineDirectionForLanguage:](linedirection%28forlanguage_%29.md): Returns the direction of the sequence of lines for the specified ISO language code.
- [NSLocaleLanguageDirection](languagedirection.md): The directions that a language may take across a page of text.
