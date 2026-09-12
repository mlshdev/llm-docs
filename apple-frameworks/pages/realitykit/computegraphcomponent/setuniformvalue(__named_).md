> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/setuniformvalue(_:named:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/setuniformvalue(_:named:))

# setUniformValue(\_:named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of a named uniform to a `BitwiseCopyable` typed value.

## Declaration

```swift
@discardableResult mutating func setUniformValue<V>(_ value: V, named name: String) -> Bool where V : BitwiseCopyable
```

## Parameters

- `value`: The value to write.
- `name`: The name of the uniform to update.

<a id="return-value"></a>

## Return Value

`true` if the uniform was found and updated; `false` otherwise.
