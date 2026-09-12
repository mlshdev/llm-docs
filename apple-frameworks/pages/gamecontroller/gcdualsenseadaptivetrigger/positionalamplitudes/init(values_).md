> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalamplitudes/init(values:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalamplitudes/init(values:))

# init(values:)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a positional amplitudes structure with the specified amplitude values.

## Declaration

```swift
init(values: (Float, Float, Float, Float, Float, Float, Float, Float, Float, Float))
```

## Parameters

- `values`: The amplitude values for possible trigger positions. Each value is between `0` and `1`, where `0` is the minimum and `1` is the maximum amplitude.

## See Also

### Creating multiple amplitudes

- [init()](init%28%29.md): Creates an empty positional amplitudes structure.
