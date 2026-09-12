> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/mask/none](https://developer.apple.com/documentation/os/oslogprivacy/mask/none)

# OSLogPrivacy.Mask.none

**Framework:** os  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An option to replace a redacted value with a generic string.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

Use this option when you don’t want to correlate log messages with identical redacted values.

## See Also

### Privacy Mask Options

- [OSLogPrivacy.Mask.hash](hash.md): An option to replace a redacted value with a string that contains a hashed version of the original value.
