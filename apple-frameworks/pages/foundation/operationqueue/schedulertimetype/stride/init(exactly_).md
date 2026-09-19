> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/operationqueue/schedulertimetype/stride/init(exactly:)

# init(exactly:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a stride using the specified integer, if it can be represented exactly.

## Declaration

```swift
init?<T>(exactly source: T) where T : BinaryInteger
```

## See Also

### Creating Scheduler Time Strides

- [init(\_:)](init%28__%29.md): Creates a stride using the specified time interval.
- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates a stride using the specified floating-point value.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates a stride using the specified integer value.
