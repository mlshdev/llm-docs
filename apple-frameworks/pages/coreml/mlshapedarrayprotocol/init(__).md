> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(_:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(_:))

# init(\_:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array type from a multiarray.

## Declaration

```swift
init(_ multiArray: MLMultiArray)
```

## Parameters

- `multiArray`: An [MLMultiArray](../mlmultiarray.md) with the same underlying type as the shaped array type.

## See Also

### Creating a shaped array type from another type

- [init(converting:)](init%28converting_%29.md): Initialize by converting a MLMultiArray of different scalar type.
