> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/units](https://developer.apple.com/documentation/foundation/bytecountformatter/units)

# ByteCountFormatter.Units (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.

## Declaration

```swift
struct Units
```

## Topics

### Constants

- [useBytes](units/usebytes.md): Displays bytes in the formatter content.
- [useKB](units/usekb.md): Displays kilobytes in the formatter content.
- [useMB](units/usemb.md): Displays megabytes in the formatter content.
- [useGB](units/usegb.md): Displays gigabytes in the formatter content.
- [useTB](units/usetb.md): Displays terabytes in the formatter content.
- [usePB](units/usepb.md): Displays petabyte in the formatter content.
- [useEB](units/useeb.md): Displays exabytes in the formatter content.
- [useZB](units/usezb.md): Displays zettabytes in the formatter content.
- [useYBOrHigher](units/useyborhigher.md): Displays yottabytes in the formatter content.
- [useAll](units/useall.md): Can use any unit in the formatter content.

### Initializers

- [init(rawValue:)](units/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [ByteCountFormatter.CountStyle](countstyle-swift.enum.md): Specifies display of file or storage byte counts. The display style is platform specific.

# NSByteCountFormatterUnits (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.

## Declaration

```objectivec
enum NSByteCountFormatterUnits : NSUInteger;
```

## Topics

### Constants

- [NSByteCountFormatterUseBytes](units/usebytes.md): Displays bytes in the formatter content.
- [NSByteCountFormatterUseKB](units/usekb.md): Displays kilobytes in the formatter content.
- [NSByteCountFormatterUseMB](units/usemb.md): Displays megabytes in the formatter content.
- [NSByteCountFormatterUseGB](units/usegb.md): Displays gigabytes in the formatter content.
- [NSByteCountFormatterUseTB](units/usetb.md): Displays terabytes in the formatter content.
- [NSByteCountFormatterUsePB](units/usepb.md): Displays petabyte in the formatter content.
- [NSByteCountFormatterUseEB](units/useeb.md): Displays exabytes in the formatter content.
- [NSByteCountFormatterUseZB](units/usezb.md): Displays zettabytes in the formatter content.
- [NSByteCountFormatterUseYBOrHigher](units/useyborhigher.md): Displays yottabytes in the formatter content.
- [NSByteCountFormatterUseAll](units/useall.md): Can use any unit in the formatter content.
- [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md): This causes default units appropriate for the platform to be used. This is the default.

## See Also

### Constants

- [NSByteCountFormatterCountStyle](countstyle-swift.enum.md): Specifies display of file or storage byte counts. The display style is platform specific.
