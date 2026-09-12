> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/setuniform(_:named:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/setuniform(_:named:))

# setUniform(\_:named:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Finds the named uniform and sets it to the given BitwiseCopyable value.

## Declaration

```swift
@discardableResult final func setUniform<V>(_ value: V, named name: String) -> Bool where V : BitwiseCopyable
```

<a id="discussion"></a>

## Discussion

Returns true if the value was found and set successfully
