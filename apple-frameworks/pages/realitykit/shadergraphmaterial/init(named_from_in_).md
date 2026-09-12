> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/init(named:from:in:)](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/init(named:from:in:))

# init(named:from:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads a ShaderGraphMaterial from a bundle.

## Declaration

```swift
init(named name: String, from file: String, in bundle: Bundle? = nil) async throws
```

## Parameters

- `name`: The name of the ShaderGraphMaterial within the file. For USD files, this is the full path of the material prim (such as “/Root/MyMaterial”).
- `file`: The name of the file within the bundle.
- `bundle`: The bundle containing the resource. Specify nil to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

A ShaderGraphMaterial object from the file with the name specified.

<a id="discussion"></a>

## Discussion

Supported file formats are USD (.usd, .usda, .usdc, .usdz) and Reality File (.reality).
