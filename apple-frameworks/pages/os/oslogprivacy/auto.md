> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/auto](https://developer.apple.com/documentation/os/oslogprivacy/auto)

# auto

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The standard option to let the system determine whether to redact or display a value.

## Declaration

```swift
static var auto: OSLogPrivacy { get }
```

<a id="Discussion"></a>

## Discussion

Use this option to apply the default rules for redacting or showing interpolated values. When it redacts a value, the system displays a generic string in place of the value. If you want to correlate log messages that contain the same value, use the [auto(mask:)](auto%28mask_%29.md) function to create a structure with the [OSLogPrivacy.Mask.hash](mask/hash.md) mask.

## See Also

### Getting the Privacy Options

- [private](private.md): The standard option to always redact the interpolated value.
- [public](public.md): The standard option to always show the interpolated value.
- [sensitive](sensitive.md): The option to always redact interpolated values that contain sensitive information.
