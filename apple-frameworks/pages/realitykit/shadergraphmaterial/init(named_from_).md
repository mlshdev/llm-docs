> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/init(named:from:)](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/init(named:from:))

# init(named:from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads a ShaderGraphMaterial from a named material within a USD file.

## Declaration

```swift
init(named name: String, from data: Data) async throws
```

## Parameters

- `name`: The name of the ShaderGraphMaterial within the USD file.
- `data`: A data object containing USD file data

<a id="return-value"></a>

## Return Value

A ShaderGraphMaterial object from the file with the name specified.

<a id="discussion"></a>

## Discussion

Supported file formats are USD (.usd, .usda, .usdc, .usdz)
