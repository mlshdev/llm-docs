> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/typesettinglanguage/explicit(_:)](https://developer.apple.com/documentation/swiftui/typesettinglanguage/explicit(_:))

# explicit(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Use explicit language.

## Declaration

```swift
static func explicit(_ language: Locale.Language) -> TypesettingLanguage
```

## Parameters

- `language`: The language to use for typesetting.

<a id="return-value"></a>

## Return Value

A `TypesettingLanguage`.

<a id="discussion"></a>

## Discussion

An explicit language will be used for typesetting. For example, if used with Thai language the line heights will be as tall as needed to accommodate Thai.

## See Also

### Getting language behavior

- [automatic](automatic.md): Automatic language behavior.
