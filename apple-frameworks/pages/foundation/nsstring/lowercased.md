> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/lowercased](https://developer.apple.com/documentation/foundation/nsstring/lowercased)

# lowercased (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lowercase representation of the string.

## Declaration

```swift
var lowercased: String { get }
```

<a id="Discussion"></a>

## Discussion

This property performs the canonical (non-localized) mapping. It is suitable for programming operations that require stable results not depending on the current locale.

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. That is, the result of this statement:

```objc
lcString = [myString lowercaseString];
```

…might not be equal to this statement:

```objc
lcString = [[myString uppercaseString] lowercaseString];
```

For example, the uppercase form of “ß” in German is “SS”, so converting “Straße” to uppercase, then lowercase, produces this sequence of strings:

- “Straße”
- “STRASSE”
- “strasse”

> **Important**

>  When working with text that’s presented to the user, use [localizedLowercase](localizedlowercase.md) or [lowercased(with:)](lowercased%28with_%29.md) instead.

## See Also

### Changing Case

- [localizedLowercase](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercased(with:)](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercased](uppercased.md): An uppercase representation of the string.
- [localizedUppercase](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercased(with:)](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalized](capitalized.md): A capitalized representation of the string.
- [localizedCapitalized](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

# lowercaseString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lowercase representation of the string.

## Declaration

```objectivec
@property (copy, readonly) NSString * lowercaseString;
```

<a id="Discussion"></a>

## Discussion

This property performs the canonical (non-localized) mapping. It is suitable for programming operations that require stable results not depending on the current locale.

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. That is, the result of this statement:

```objc
lcString = [myString lowercaseString];
```

…might not be equal to this statement:

```objc
lcString = [[myString uppercaseString] lowercaseString];
```

For example, the uppercase form of “ß” in German is “SS”, so converting “Straße” to uppercase, then lowercase, produces this sequence of strings:

- “Straße”
- “STRASSE”
- “strasse”

> **Important**

>  When working with text that’s presented to the user, use [localizedLowercaseString](localizedlowercase.md) or [lowercaseStringWithLocale:](lowercased%28with_%29.md) instead.

## See Also

### Changing Case

- [localizedLowercaseString](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercaseStringWithLocale:](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercaseString](uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercaseStringWithLocale:](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalizedString](capitalized.md): A capitalized representation of the string.
- [localizedCapitalizedString](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.
