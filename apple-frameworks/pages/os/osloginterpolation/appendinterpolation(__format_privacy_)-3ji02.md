> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:format:privacy:)-3ji02](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:format:privacy:)-3ji02)

# appendInterpolation(\_:format:privacy:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated 32-bit integer.

## Declaration

```swift
mutating func appendInterpolation(_ number: @autoclosure @escaping () -> Int32, format: OSLogInt32ExtendedFormat, privacy: OSLogPrivacy = .auto)
```

## Parameters

- `number`: The 32-bit integer value to add to the message.
- `format`: The format to apply to the integer value. You format integers as decimal, hexadecimal, or octal values. If you don’t specify this parameter, the default format uses a decimal value. For more information, see [OSLogIntegerFormatting](../oslogintegerformatting.md).
- `privacy`: The privacy level of the information. If you don’t specify this parameter, the system uses the default rules to determine whether to show the information.

<a id="Discussion"></a>

## Discussion

Don’t call this function directly. The system calls it automatically when interpolating values of this type. When specifying the value in your string, you may include any of the indicated parameters to change the default presentation of that value.

## See Also

### Appending Signed Integers

- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-8kli1.md): Appends an interpolated integer.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-5ihzf.md): Appends an interpolated 8-bit integer.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-190d0.md): Appends an interpolated 16-bit integer.
- [appendInterpolation(\_:format:privacy:attributes:)](appendinterpolation%28__format_privacy_attributes_%29-4i2ir.md): Appends an interpolated 32-bit integer with the specified attributes.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-2sb1i.md): Appends an interpolated 32-bit integer with the specified alignment.
- [appendInterpolation(\_:format:align:privacy:)](appendinterpolation%28__format_align_privacy_%29-802m9.md): Appends an interpolated 64-bit integer.
