> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/init(configuration:)](https://developer.apple.com/documentation/createmlcomponents/linearregressor/init(configuration:))

# init(configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a linear regressor.

## Declaration

```swift
init(configuration: LinearRegressor<Scalar>.Configuration = Configuration())
```

## Parameters

- `configuration`: The configuration.

## See Also

### Creating a regressor

- [LinearRegressor.Configuration](configuration-swift.struct.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A linear regressor configuration.
