> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/public](https://developer.apple.com/documentation/os/oslogprivacy/public)

# public

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The standard option to always show the interpolated value.

## Declaration

```swift
static var `public`: OSLogPrivacy { get }
```

## Mentioned In

- [Generating Log Messages from Your Code](../generating-log-messages-from-your-code.md)

## See Also

### Getting the Privacy Options

- [auto](auto.md): The standard option to let the system determine whether to redact or display a value.
- [private](private.md): The standard option to always redact the interpolated value.
- [sensitive](sensitive.md): The option to always redact interpolated values that contain sensitive information.
