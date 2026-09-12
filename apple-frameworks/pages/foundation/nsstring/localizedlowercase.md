> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/localizedlowercase](https://developer.apple.com/documentation/foundation/nsstring/localizedlowercase)

# localizedLowercase (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to lowercase, taking into account the current locale.

## Declaration

```swift
var localizedLowercase: String { get }
```

<a id="Discussion"></a>

## Discussion

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercased](lowercased.md) for an example.

## See Also

### Changing Case

- [lowercased](lowercased.md): A lowercase representation of the string.
- [lowercased(with:)](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercased](uppercased.md): An uppercase representation of the string.
- [localizedUppercase](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercased(with:)](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalized](capitalized.md): A capitalized representation of the string.
- [localizedCapitalized](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

# localizedLowercaseString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to lowercase, taking into account the current locale.

## Declaration

```objectivec
@property (copy, readonly) NSString * localizedLowercaseString;
```

<a id="Discussion"></a>

## Discussion

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercaseString](lowercased.md) for an example.

## See Also

### Changing Case

- [lowercaseString](lowercased.md): A lowercase representation of the string.
- [lowercaseStringWithLocale:](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercaseString](uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercaseStringWithLocale:](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalizedString](capitalized.md): A capitalized representation of the string.
- [localizedCapitalizedString](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.
