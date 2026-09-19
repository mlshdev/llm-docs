> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/parsestrategy/url

# url

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A parse strategy for URLs.

## Declaration

```swift
static var url: URL.ParseStrategy { get }
```

<a id="Discussion"></a>

## Discussion

Use the dot-notation form of this type property when the call point allows the use of [URL.ParseStrategy](../url/parsestrategy.md). Typically, you use this with the URL initializer [init(\_:strategy:)](../url/init%28__strategy_%29.md).

## See Also

### Commonly-used parsers

- [fixed(format:timeZone:locale:)](fixed%28format_timezone_locale_%29.md): A fixed-format date parse strategy.
- [name](name.md): Conforms when `Self` is `PersonNameComponents.ParseStrategy`. A parse strategy for person name components.
