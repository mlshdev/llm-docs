> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogfloatformatting/hybrid](https://developer.apple.com/documentation/os/oslogfloatformatting/hybrid)

# hybrid

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A hybrid option that changes the format according to the size of the number.

## Declaration

```swift
static var hybrid: OSLogFloatFormatting { get }
```

## Mentioned In

- [Generating Log Messages from Your Code](../generating-log-messages-from-your-code.md)

<a id="Discussion"></a>

## Discussion

This option is equivalent to the `%g` option in `fprintf`. It behaves like the [fixed](fixed.md) option when the number is close to `1.0`, and like the [exponential](exponential.md) option when the number has a large exponent.

## See Also

### Getting the Standard Formats

- [fixed](fixed.md): The standard fixed-point format option.
- [hex](hex.md): The standard hexadecimal format for floating-point values.
- [exponential](exponential.md): The standard exponential format option.
