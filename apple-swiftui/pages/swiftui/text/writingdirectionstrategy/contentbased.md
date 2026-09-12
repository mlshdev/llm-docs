> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/writingdirectionstrategy/contentbased](https://developer.apple.com/documentation/swiftui/text/writingdirectionstrategy/contentbased)

# contentBased

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The writing direction following the language of the string that is laid out.

## Declaration

```swift
static let contentBased: Text.WritingDirectionStrategy
```

<a id="discussion"></a>

## Discussion

The system may use different sources to determine the language of the string. This may include the characters used in the string, especially BiDi isolation markers, the language of the localization file the string was loaded from, or explicit annotations with the [languageIdentifier](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/languageidentifier) attribute.
