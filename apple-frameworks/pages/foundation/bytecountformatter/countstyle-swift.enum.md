> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/countstyle-swift.enum](https://developer.apple.com/documentation/foundation/bytecountformatter/countstyle-swift.enum)

# ByteCountFormatter.CountStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies display of file or storage byte counts. The display style is platform specific.

## Declaration

```swift
enum CountStyle
```

## Topics

### Constants

- [ByteCountFormatter.CountStyle.file](countstyle-swift.enum/file.md): Specifies display of file byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the decimal style, but that may change over time.
- [ByteCountFormatter.CountStyle.memory](countstyle-swift.enum/memory.md): Specifies display of memory byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the binary style, but that may change over time.
- [ByteCountFormatter.CountStyle.decimal](countstyle-swift.enum/decimal.md): Causes 1000 bytes to be shown as 1 KB. It is better to use [ByteCountFormatter.CountStyle.file](countstyle-swift.enum/file.md) or [ByteCountFormatter.CountStyle.memory](countstyle-swift.enum/memory.md) in most cases.
- [ByteCountFormatter.CountStyle.binary](countstyle-swift.enum/binary.md): Causes 1024 bytes to be shown as 1 KB. It is better to use [ByteCountFormatter.CountStyle.file](countstyle-swift.enum/file.md) or [ByteCountFormatter.CountStyle.memory](countstyle-swift.enum/memory.md) in most cases.

### Initializers

- [init(rawValue:)](countstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [ByteCountFormatter.Units](units.md): Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.

# NSByteCountFormatterCountStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies display of file or storage byte counts. The display style is platform specific.

## Declaration

```objectivec
enum NSByteCountFormatterCountStyle : NSInteger;
```

## Topics

### Constants

- [NSByteCountFormatterCountStyleFile](countstyle-swift.enum/file.md): Specifies display of file byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the decimal style, but that may change over time.
- [NSByteCountFormatterCountStyleMemory](countstyle-swift.enum/memory.md): Specifies display of memory byte counts. The actual behavior for this is platform-specific; in macOS 10.8, this uses the binary style, but that may change over time.
- [NSByteCountFormatterCountStyleDecimal](countstyle-swift.enum/decimal.md): Causes 1000 bytes to be shown as 1 KB. It is better to use [NSByteCountFormatterCountStyleFile](countstyle-swift.enum/file.md) or [NSByteCountFormatterCountStyleMemory](countstyle-swift.enum/memory.md) in most cases.
- [NSByteCountFormatterCountStyleBinary](countstyle-swift.enum/binary.md): Causes 1024 bytes to be shown as 1 KB. It is better to use [NSByteCountFormatterCountStyleFile](countstyle-swift.enum/file.md) or [NSByteCountFormatterCountStyleMemory](countstyle-swift.enum/memory.md) in most cases.

## See Also

### Constants

- [NSByteCountFormatterUnits](units.md): Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.
