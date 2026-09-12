> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/mask/hash](https://developer.apple.com/documentation/os/oslogprivacy/mask/hash)

# OSLogPrivacy.Mask.hash

**Framework:** os  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An option to replace a redacted value with a string that contains a hashed version of the original value.

## Declaration

```swift
case hash
```

## Mentioned In

- [Generating Log Messages from Your Code](../../generating-log-messages-from-your-code.md)

<a id="Discussion"></a>

## Discussion

Use this option when you want to hide potentially sensitive data in log messages, but still want to know when two or more log messages contain the same hidden value. An [OSLogPrivacy](../../oslogprivacy.md) structure with this option generates a hash string for a redacted value. The system displays that hash string as part of the log message, making it possible for you to compare log messages with the same value.

## See Also

### Privacy Mask Options

- [OSLogPrivacy.Mask.none](none.md): An option to replace a redacted value with a generic string.
