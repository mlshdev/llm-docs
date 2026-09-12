> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/uniformhandle(named:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/uniformhandle(named:))

# uniformHandle(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a handle for the named uniform.

## Declaration

```swift
func uniformHandle(named name: String) -> ComputeGraphComponent.UniformHandle?
```

## Parameters

- `name`: The name of the named uniform.

<a id="return-value"></a>

## Return Value

A [ComputeGraphComponent.UniformHandle](uniformhandle.md), or `nil` if no match is found.
