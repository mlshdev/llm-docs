> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogfloatformatting/fixed](https://developer.apple.com/documentation/os/oslogfloatformatting/fixed)

# fixed

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The standard fixed-point format option.

## Declaration

```swift
static var fixed: OSLogFloatFormatting { get }
```

## Mentioned In

- [Generating Log Messages from Your Code](../generating-log-messages-from-your-code.md)

<a id="Discussion"></a>

## Discussion

This option is equivalent to the `%f` option of `fprintf`, which prints all digits before the radix point and a system-specific number of digits after the radix point.

## See Also

### Getting the Standard Formats

- [hex](hex.md): The standard hexadecimal format for floating-point values.
- [exponential](exponential.md): The standard exponential format option.
- [hybrid](hybrid.md): A hybrid option that changes the format according to the size of the number.
