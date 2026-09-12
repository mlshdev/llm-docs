> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/countstyle-swift.enum/binary](https://developer.apple.com/documentation/foundation/bytecountformatter/countstyle-swift.enum/binary)

# ByteCountFormatter.CountStyle.binary (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes 1024 bytes to be shown as 1 KB. It is better to use [ByteCountFormatter.CountStyle.file](file.md) or [ByteCountFormatter.CountStyle.memory](memory.md) in most cases.

## Declaration

```swift
case binary
```

## See Also

### Constants

- [ByteCountFormatter.CountStyle.file](file.md): Specifies display of file byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the decimal style, but that may change over time.
- [ByteCountFormatter.CountStyle.memory](memory.md): Specifies display of memory byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the binary style, but that may change over time.
- [ByteCountFormatter.CountStyle.decimal](decimal.md): Causes 1000 bytes to be shown as 1 KB. It is better to use [ByteCountFormatter.CountStyle.file](file.md) or [ByteCountFormatter.CountStyle.memory](memory.md) in most cases.

# NSByteCountFormatterCountStyleBinary (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes 1024 bytes to be shown as 1 KB. It is better to use [NSByteCountFormatterCountStyleFile](file.md) or [NSByteCountFormatterCountStyleMemory](memory.md) in most cases.

## Declaration

```objectivec
NSByteCountFormatterCountStyleBinary
```

## See Also

### Constants

- [NSByteCountFormatterCountStyleFile](file.md): Specifies display of file byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the decimal style, but that may change over time.
- [NSByteCountFormatterCountStyleMemory](memory.md): Specifies display of memory byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the binary style, but that may change over time.
- [NSByteCountFormatterCountStyleDecimal](decimal.md): Causes 1000 bytes to be shown as 1 KB. It is better to use [NSByteCountFormatterCountStyleFile](file.md) or [NSByteCountFormatterCountStyleMemory](memory.md) in most cases.
