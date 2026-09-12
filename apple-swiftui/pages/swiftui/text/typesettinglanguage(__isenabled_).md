> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/typesettinglanguage(_:isenabled:)](https://developer.apple.com/documentation/swiftui/text/typesettinglanguage(_:isenabled:))

# typesettingLanguage(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Specifies the language for typesetting.

## Declaration

```swift
func typesettingLanguage(_ language: Locale.Language, isEnabled: Bool = true) -> Text
```

## Parameters

- `language`: The explicit language to use for typesetting.
- `isEnabled`: A Boolean value that indicates whether text language is added

<a id="return-value"></a>

## Return Value

Text with the typesetting language set to the value you supply.

<a id="discussion"></a>

## Discussion

In some cases `Text` may contain text of a particular language which doesn’t match the device UI language. In that case it’s useful to specify a language so line height, line breaking and spacing will respect the script used for that language. For example:

```swift
Text(verbatim: "แอปเปิล")
    .typesettingLanguage(.init(languageCode: .thai))
```

Note: this language does not affect text localization.
