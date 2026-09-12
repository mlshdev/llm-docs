> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalresistivestrengths/init(values:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalresistivestrengths/init(values:))

# init(values:)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a resistive strengths structure with the specified strength values.

## Declaration

```swift
init(values: (Float, Float, Float, Float, Float, Float, Float, Float, Float, Float))
```

## Parameters

- `values`: The strength values for possible trigger positions. Each value is between `0` and `1`, where `0` is the minimum and `1` is the maximum strength.

## See Also

### Creating resistive strengths

- [init()](init%28%29.md): Creates an empty resistive strengths structure.
