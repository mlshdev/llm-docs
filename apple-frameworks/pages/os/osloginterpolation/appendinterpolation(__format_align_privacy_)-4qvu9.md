> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:format:align:privacy:)-4qvu9](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:format:align:privacy:)-4qvu9)

# appendInterpolation(\_:format:align:privacy:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated unsigned 8-bit integer.

## Declaration

```swift
mutating func appendInterpolation(_ number: @autoclosure @escaping () -> UInt8, format: OSLogIntegerFormatting = .decimal, align: OSLogStringAlignment = .none, privacy: OSLogPrivacy = .auto)
```

## Parameters

- `number`: The unsigned 8-bit integer value to add to the message.
- `format`: The format to apply to the integer value. You format integers as decimal, hexadecimal, or octal values. If you don’t specify this parameter, the default format uses a decimal value. For more information, see [OSLogIntegerFormatting](../oslogintegerformatting.md).
- `align`: The alignment to apply to the value. Use this parameter to specify the width of the column containing the data, and the alignment of the data within that column. If you don’t specify this parameter, the system doesn’t align the value.
- `privacy`: The privacy level of the information. If you don’t specify this parameter, the system uses the default rules to determine whether to show the information.

<a id="Discussion"></a>

## Discussion

Don’t call this function directly. The system calls it automatically when interpolating values of this type. When specifying the value in your string, you may include any of the indicated parameters to change the default presentation of that value.

## See Also

### Appending Unsigned Integers

- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-20jin.md): Appends an interpolated unsigned integer.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-7k91g.md): Appends an interpolated unsigned 16-bit integer.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-2i3qh.md): Appends an interpolated unsigned 32-bit integer.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-81jbm.md): Appends an interpolated unsigned 64-bit integer.
