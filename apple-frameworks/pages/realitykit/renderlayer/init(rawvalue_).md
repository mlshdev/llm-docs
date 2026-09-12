> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayer/init(rawvalue:)](https://developer.apple.com/documentation/realitykit/renderlayer/init(rawvalue:))

# init(rawValue:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a custom render layer with the specified runtime name.

## Declaration

```swift
init?(rawValue: String)
```

## Parameters

- `rawValue`: A unique name for this layer.

<a id="return-value"></a>

## Return Value

A new render layer, or `nil` if `rawValue` is empty.

<a id="discussion"></a>

## Discussion

Use this failable initializer when the layer name comes from a runtime string, such as user input or data loaded from a file. To define a layer constant from a string literal, use [init(\_:)](init%28__%29.md) instead.

Use descriptive names with namespace prefixes such as `"com.myapp.hero"` or `"com.myapp.background"` to avoid conflicts with other layers.
