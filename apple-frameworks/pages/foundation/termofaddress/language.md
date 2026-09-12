> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/termofaddress/language](https://developer.apple.com/documentation/foundation/termofaddress/language)

# language

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The specific language associated with a term of address.

## Declaration

```swift
var language: Locale.Language? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only set for terms of address created through the [localized(language:pronouns:)](localized%28language_pronouns_%29.md) function. This property is `nil` otherwise.

## See Also

### Defining your own terms of address

- [localized(language:pronouns:)](localized%28language_pronouns_%29.md): Returns a term of address restricted to a specific language for a group of pronouns.
- [pronouns](pronouns.md): The pronouns associated with a term of address.
