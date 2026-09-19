> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/setuniformvalue(_:named:)

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
