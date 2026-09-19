> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/init(screensize:layer:label:)

# init(screenSize:layer:label:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS

A convenience initializer that creates a rate map descriptor with a single rate layer.

## Declaration

```swift
convenience init(screenSize: MTLSize, layer: MTLRasterizationRateLayerDescriptor, label: String? = nil)
```

## Parameters

- `screenSize`: The logical size, in pixels, of the viewport coordinate system.
- `layer`: A descriptor for the rate layer to create.
- `label`: A string that identifies the resulting rate map.

<a id="return-value"></a>

## Return Value

A descriptor object whose [screenSize](screensize.md) and [label](label.md) properties are set to the provided values. Layer `0` in the rate map is set to the provided layer descriptor.

## See Also

### Creating rate map descriptors

- [init(screenSize:label:)](init%28screensize_label_%29.md): A convenience initializer that creates a rate map descriptor with a given size and identifier.
- [init(screenSize:layers:label:)](init%28screensize_layers_label_%29.md): A convenience initializer that creates a rate map descriptor with a set of layer descriptors.
