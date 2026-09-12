> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:)-84m60](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:)-84m60)

# appendInterpolation(\_:align:privacy:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated textual representation of a type.

## Declaration

```swift
mutating func appendInterpolation<T>(_ value: @autoclosure @escaping () -> T, align: OSLogStringAlignment = .none, privacy: OSLogPrivacy = .auto) where T : CustomStringConvertible
```

## Parameters

- `value`: An item that conforms to the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) protocol.
- `align`: The alignment to apply to the string. Use this parameter to specify the width of the column containing the data, and the alignment of the data within that column. If you don’t specify this parameter, the system doesn’t align the value.
- `privacy`: The privacy level of the information. If you don’t specify this parameter, the system uses the default rules to determine whether to show the information.

<a id="Discussion"></a>

## Discussion

Don’t call this function directly. The system calls it automatically when interpolating values of this type. When specifying the value in your string, you may include any of the indicated parameters to change the default presentation of that value.

## See Also

### Appending Generic Types

- [appendInterpolation(\_:align:privacy:attributes:)](appendinterpolation%28__align_privacy_attributes_%29-xyum.md): Appends an interpolated textual representation of a type using the specified attributes.
- [appendInterpolation(\_:format:align:privacy:attributes:)](appendinterpolation%28__format_align_privacy_attributes_%29-8107a.md): Appends an interpolated numeric type using the specified attributes.
- [appendInterpolation(\_:align:privacy:)](appendinterpolation%28__align_privacy_%29-8hwmt.md): Appends an interpolated type description.
- [appendInterpolation(\_:align:privacy:attributes:)](appendinterpolation%28__align_privacy_attributes_%29-9hehv.md): Appends an interpolated type description with the specified attributes.
