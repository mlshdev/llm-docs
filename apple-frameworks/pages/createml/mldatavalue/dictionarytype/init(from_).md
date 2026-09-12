> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue/dictionarytype/init(from:)](https://developer.apple.com/documentation/createml/mldatavalue/dictionarytype/init(from:))

# init(from:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a data-value dictionary from another dictionary.

## Declaration

```swift
init?(from dataValue: MLDataValue)
```

<a id="discussion"></a>

## Discussion

Use this initializer to create an [MLDataValue.DictionaryType](../dictionarytype.md) from another data-value dictionary instance. You can confirm the data value’s underlying type by retrieving a non-`nil` value from [dictionaryValue](../dictionaryvalue.md) or by inspecting the [type](../type.md) property.
