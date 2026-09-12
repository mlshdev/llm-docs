> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:attributes:)-xyum](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:attributes:)-xyum)

# appendInterpolation(\_:align:privacy:attributes:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated textual representation of a type using the specified attributes.

## Declaration

```swift
mutating func appendInterpolation<T>(_ value: @autoclosure @escaping () -> T, align: OSLogStringAlignment = .none, privacy: OSLogPrivacy = .auto, attributes: String) where T : CustomStringConvertible
```

## Parameters

- `value`: The interpolated type, which the system automatically wraps in a closure. The type itself doesn’t appear in the log message. Instead, the system incorporates the textual representation the type provides through its implementation of the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) protocol.
- `align`: The alignment and minimum number of columns to use when the system renders the value in a log message. For more information, see [OSLogStringAlignment](../oslogstringalignment.md). The default value is [none](../oslogstringalignment/none.md).
- `privacy`: The privacy level of the value, which the system applies when it renders the value in a log message. For more information, see [OSLogPrivacy](../oslogprivacy.md). The default value is [auto](../oslogprivacy/auto.md).
- `attributes`: Additional information about the value. Tools that process log messages interpret these attributes, which you typically provide as key-value pairs. For example, Instruments processes any  e_ngineering types\_ you embed in this value. For more information, see [Instruments Developer Help](https://help.apple.com/instruments/developer/mac/current/#/devcd5016d31).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You don’t call this method directly. Instead, the framework calls it automatically when you append an interpolated type that adopts the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) protocol to a log message.

## See Also

### Appending Generic Types

- [appendInterpolation(\_:align:privacy:)](appendinterpolation%28__align_privacy_%29-84m60.md): Appends an interpolated textual representation of a type.
- [appendInterpolation(\_:format:align:privacy:attributes:)](appendinterpolation%28__format_align_privacy_attributes_%29-8107a.md): Appends an interpolated numeric type using the specified attributes.
- [appendInterpolation(\_:align:privacy:)](appendinterpolation%28__align_privacy_%29-8hwmt.md): Appends an interpolated type description.
- [appendInterpolation(\_:align:privacy:attributes:)](appendinterpolation%28__align_privacy_attributes_%29-9hehv.md): Appends an interpolated type description with the specified attributes.
