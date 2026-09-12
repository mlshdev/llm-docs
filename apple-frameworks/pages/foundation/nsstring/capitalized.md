> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/capitalized](https://developer.apple.com/documentation/foundation/nsstring/capitalized)

# capitalized (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A capitalized representation of the string.

## Declaration

```swift
var capitalized: String { get }
```

<a id="Discussion"></a>

## Discussion

A capitalized string is a string with the first character in each word changed to its corresponding uppercase value, and all remaining characters set to their corresponding lowercase values. A word is any sequence of characters delimited by spaces, tabs, or line terminators (listed under [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md)). Some common word delimiting punctuation isn’t considered, so this property may not generally produce the desired results for multiword strings.

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercased](lowercased.md) for an example.

This property performs the canonical (non-localized) mapping. It is suitable for programming operations that require stable results not depending on the current locale.

> **Important**

>  When working with text that’s presented to the user, use [localizedCapitalized](localizedcapitalized.md) or [capitalized(with:)](capitalized%28with_%29.md) instead.

## See Also

### Changing Case

- [lowercased](lowercased.md): A lowercase representation of the string.
- [localizedLowercase](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercased(with:)](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercased](uppercased.md): An uppercase representation of the string.
- [localizedUppercase](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercased(with:)](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [localizedCapitalized](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

# capitalizedString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A capitalized representation of the string.

## Declaration

```objectivec
@property (copy, readonly) NSString * capitalizedString;
```

<a id="Discussion"></a>

## Discussion

A capitalized string is a string with the first character in each word changed to its corresponding uppercase value, and all remaining characters set to their corresponding lowercase values. A word is any sequence of characters delimited by spaces, tabs, or line terminators (listed under [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md)). Some common word delimiting punctuation isn’t considered, so this property may not generally produce the desired results for multiword strings.

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercaseString](lowercased.md) for an example.

This property performs the canonical (non-localized) mapping. It is suitable for programming operations that require stable results not depending on the current locale.

> **Important**

>  When working with text that’s presented to the user, use [localizedCapitalizedString](localizedcapitalized.md) or [capitalizedStringWithLocale:](capitalized%28with_%29.md) instead.

## See Also

### Changing Case

- [lowercaseString](lowercased.md): A lowercase representation of the string.
- [localizedLowercaseString](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercaseStringWithLocale:](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercaseString](uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercaseStringWithLocale:](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [localizedCapitalizedString](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.
