> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:)-6tazr](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:align:privacy:)-6tazr)

# appendInterpolation(\_:align:privacy:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated string.

## Declaration

```swift
mutating func appendInterpolation(_ argumentString: @autoclosure @escaping () -> String, align: OSLogStringAlignment = .none, privacy: OSLogPrivacy = .auto)
```

## Parameters

- `argumentString`: The interpolated string value to add to the message.
- `align`: The alignment to apply to the string. Use this parameter to specify the width of the column that contains the data, and the alignment of the data within that column. If you don’t specify this parameter, the system doesn’t align the value.
- `privacy`: The privacy level of the information. If you don’t specify this parameter, the default rules redact the string’s value.

<a id="Discussion"></a>

## Discussion

Don’t call this function directly. The system calls it automatically when interpolating values of this type. When specifying the value in your string, you may include any of the indicated parameters to change the default presentation of that value.

## See Also

### Appending Strings

- [appendInterpolation(\_:align:privacy:attributes:)](appendinterpolation%28__align_privacy_attributes_%29-7g68v.md): Appends an interpolated string with the specified attributes.
