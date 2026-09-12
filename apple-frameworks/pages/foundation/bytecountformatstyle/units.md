> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatstyle/units](https://developer.apple.com/documentation/foundation/bytecountformatstyle/units)

# ByteCountFormatStyle.Units

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The units to use when formatting a byte count, such as kilobytes or gigabytes.

## Declaration

```swift
struct Units
```

## Topics

### Units

- [default](units/default.md): A value that indicates a format style should use the most appropriate units to express a byte count.
- [all](units/all.md): A value that allows the use of all byte-count units.
- [bytes](units/bytes.md): A value that indicates a format style should express byte counts in individual bytes.
- [kb](units/kb.md): The kilobytes unit.
- [mb](units/mb.md): The megabytes unit.
- [gb](units/gb.md): The gigabytes unit.
- [tb](units/tb.md): The terabytes unit.
- [pb](units/pb.md): The petabytes unit.
- [eb](units/eb.md): The exabytes unit.
- [zb](units/zb.md): The zettabytes unit.
- [ybOrHigher](units/yborhigher.md): A value that indicates a format style should express byte counts as yottabytes or higher.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a byte count style

- [init(style:allowedUnits:spellsOutZero:includesActualByteCount:locale:)](init%28style_allowedunits_spellsoutzero_includesactualbytecount_locale_%29.md): Initializes a byte count format style.
