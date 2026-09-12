> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osloginterpolation/appendinterpolation(_:privacy:)](https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:privacy:))

# appendInterpolation(\_:privacy:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Appends an interpolated object description.

## Declaration

```swift
mutating func appendInterpolation(_ argumentObject: @autoclosure @escaping () -> NSObject, privacy: OSLogPrivacy = .auto)
```

## Parameters

- `argumentObject`: The object with the description you want to add to the message. This function calls the [description](../../objectivec/nsobjectprotocol/description.md) method of the object and incorporates that value into the message string.
- `privacy`: The privacy level of the information. If you don’t specify this parameter, the default rules redact the object description.

<a id="Discussion"></a>

## Discussion

Don’t call this function directly. The system calls it automatically when interpolating values of this type. When specifying the value in your string, you may include any of the indicated parameters to change the default presentation of that value.

## See Also

### Appending Objects

- [appendInterpolation(\_:privacy:attributes:)](appendinterpolation%28__privacy_attributes_%29-3czd2.md): Appends an interpolated object description with the specified attributes.
