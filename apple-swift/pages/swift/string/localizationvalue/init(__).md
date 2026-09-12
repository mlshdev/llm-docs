> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/localizationvalue/init(_:)](https://developer.apple.com/documentation/swift/string/localizationvalue/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a localization value instance.

## Declaration

```swift
init(_ value: String)
```

## Parameters

- `value`: A string that provides the localization key to look up. This parameter also serves as the default value if the system can’t find a localized string.

<a id="discussion"></a>

## Discussion

Creating a [String.LocalizationValue](../localizationvalue.md) with this initializer creates a localized value with no interpolated values.
