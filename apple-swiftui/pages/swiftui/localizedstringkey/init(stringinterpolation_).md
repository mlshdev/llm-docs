> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/init(stringinterpolation:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/init(stringinterpolation:))

# init(stringInterpolation:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a localized string key from the given string interpolation.

## Declaration

```swift
init(stringInterpolation: LocalizedStringKey.StringInterpolation)
```

## Parameters

- `stringInterpolation`: The string interpolation to use as the localization key.

<a id="discussion"></a>

## Discussion

To create a localized string key from a string interpolation, use the `\()` string interpolation syntax. Swift matches the parameter types in the expression to one of the `appendInterpolation` methods in [LocalizedStringKey.StringInterpolation](stringinterpolation.md). The interpolated types can include numeric values, Foundation types, and SwiftUI [Text](../text.md) and [Image](../image.md) instances.

The following example uses a string interpolation with two arguments: an unlabeled [Date](https://developer.apple.com/documentation/foundation/date) and a [Text.DateStyle](../text/datestyle.md) labeled `style`. The compiler maps these to the method [appendInterpolation(\_:style:)](stringinterpolation/appendinterpolation%28__style_%29.md) as it builds the string that it creates the [LocalizedStringKey](../localizedstringkey.md) with.

```swift
let key = LocalizedStringKey("Date is \(company.foundedDate, style: .offset)")
let text = Text(key) // Text contains "Date is +45 years"
```

You can write this example more concisely, implicitly creating a [LocalizedStringKey](../localizedstringkey.md) as the parameter to the [Text](../text.md) initializer:

```swift
let text = Text("Date is \(company.foundedDate, style: .offset)")
```

## See Also

### Creating a key from an interpolation

- [LocalizedStringKey.StringInterpolation](stringinterpolation.md): Represents the contents of a string literal with interpolations while it’s being built, for use in creating a localized string key.
