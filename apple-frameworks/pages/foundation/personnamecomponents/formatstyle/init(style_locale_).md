> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/formatstyle/init(style:locale:)](https://developer.apple.com/documentation/foundation/personnamecomponents/formatstyle/init(style:locale:))

# init(style:locale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance using the provided format style and locale.

## Declaration

```swift
init(style: PersonNameComponents.FormatStyle.Style = .medium, locale: Locale = .autoupdatingCurrent)
```

## Parameters

- `style`: The [PersonNameComponents.FormatStyle.Style](style-swift.enum.md) used to format the name.
- `locale`: The [Locale](../../locale.md) used to create the string representation of the name.

<a id="Discussion"></a>

## Discussion

Customize the person name components format style by providing a style and a locale.

The formatted style can be long, medium, short, or abbreviated. The default value is [PersonNameComponents.FormatStyle.Style.medium](style-swift.enum/medium.md).

The locale provides linguistic and cultural context to the formatted name. The default value is [autoupdatingCurrent](../../locale/autoupdatingcurrent.md).
