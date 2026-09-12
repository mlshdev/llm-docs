> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/nonconformingfloatencodingstrategy-swift.enum/converttostring(positiveinfinity:negativeinfinity:nan:)](https://developer.apple.com/documentation/foundation/jsonencoder/nonconformingfloatencodingstrategy-swift.enum/converttostring(positiveinfinity:negativeinfinity:nan:))

# JSONEncoder.NonConformingFloatEncodingStrategy.convertToString(positiveInfinity:negativeInfinity:nan:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that encodes exceptional floating-point values from a specified string representation.

## Declaration

```swift
case convertToString(positiveInfinity: String, negativeInfinity: String, nan: String)
```

## See Also

### Exceptional Values

- [JSONEncoder.NonConformingFloatEncodingStrategy.throw](throw.md): The strategy that throws an error upon encoding an exceptional floating-point value.
