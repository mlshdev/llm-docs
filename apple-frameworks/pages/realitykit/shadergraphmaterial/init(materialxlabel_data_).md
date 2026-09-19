> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraphmaterial/init(materialxlabel:data:)

# init(materialXLabel:data:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads a ShaderGraphMaterial from MaterialX data.

## Declaration

```swift
init(materialXLabel: String, data: Data) async throws
```

## Parameters

- `materialXLabel`: The name of the ShaderGraphMaterial in the MaterialX data.
- `data`: The data containing the MaterialX file contents.

<a id="return-value"></a>

## Return Value

A ShaderGraphMaterial object from the data with the label specified.
