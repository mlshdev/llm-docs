> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/formatstyle/formatinput

# FormatInput

**Framework:** Foundation  
**Kind:** Associated Type  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type this format style accepts as input.

## Declaration

```swift
associatedtype FormatInput
```

<a id="Discussion"></a>

## Discussion

Swift type inference uses this value to determine which static accessors are available at a given call point. For example, when you format an [Int32](https://developer.apple.com/documentation/swift/int32), you can use the static [number](number-4cj49.md) property that provies a `IntegerFormatStyle<Int32>`, as seen in the following example. This works because the style’s input type `IntegerFormatStyle/FormatInput` is a [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) generically constrained to the [Int32](https://developer.apple.com/documentation/swift/int32) type.

```swift
let perihelionDistanceToSunInKm: Int32 = 147098291
perihelionDistanceToSunInKm.formatted(.number
    .notation(.scientific)) // "1.470983E8"
```

## See Also

### Declaring input and output types

- [FormatOutput](formatoutput.md): The type this format style produces as output.
