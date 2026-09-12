> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:format:align:privacy:attributes:)-78sek](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:format:align:privacy:attributes:)-78sek)

# appendInterpolation(\_:format:align:privacy:attributes:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated float with the specified attributes.

## Declaration

```swift
mutating func appendInterpolation(_ number: @autoclosure @escaping () -> Float, format: OSLogFloatFormatting = .fixed, align: OSLogStringAlignment = .none, privacy: OSLogPrivacy = .auto, attributes: String)
```

## Parameters

- `number`: The interpolated float. The system automatically wraps this value in a closure.
- `format`: The format to apply to the value when the system renders it in a log message. For more information, see [OSLogFloatFormatting](../oslogfloatformatting.md). The default value is [fixed](../oslogfloatformatting/fixed.md).
- `align`: The alignment and minimum number of columns to use when the system renders the value in a log message. For more information, see [OSLogStringAlignment](../oslogstringalignment.md). The default value is [none](../oslogstringalignment/none.md).
- `privacy`: The privacy level of the value, which the system applies when it renders the value in a log message. For more information, see [OSLogPrivacy](../oslogprivacy.md). The default value is [auto](../oslogprivacy/auto.md).
- `attributes`: Additional information about the value. Tools that process log messages interpret these attributes, which you typically provide as key-value pairs. For example, Instruments processes any  e_ngineering types\_ you embed in this value. For more information, see [Instruments Developer Help](https://help.apple.com/instruments/developer/mac/current/#/devcd5016d31).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You don’t call this method directly. Instead, the framework calls it automatically when you append an interpolated float to a log message.

## See Also

### Appending Floats

- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-7z1jd.md): Appends an interpolated float.
