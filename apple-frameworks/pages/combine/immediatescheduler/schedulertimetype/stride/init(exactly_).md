> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/immediatescheduler/schedulertimetype/stride/init(exactly:)

# init(exactly:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an immediate scheduler time interval from a binary integer type.

## Declaration

```swift
init?<T>(exactly source: T) where T : BinaryInteger
```

<a id="discussion"></a>

## Discussion

If `exactly` can’t convert to an `Int`, the resulting time interval is `nil`.

## See Also

### Creating Scheduler Time Strides

- [init(\_:)](init%28__%29.md): Creates an immediate scheduler time interval from the given time interval.
- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an immediate scheduler time interval from a floating-point seconds value.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates an immediate scheduler time interval from an integer seconds value.
