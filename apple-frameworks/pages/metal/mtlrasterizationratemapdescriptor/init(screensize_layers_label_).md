> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor/init(screensize:layers:label:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/init(screensize:layers:label:))

# init(screenSize:layers:label:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS

A convenience initializer that creates a rate map descriptor with a set of layer descriptors.

## Declaration

```swift
convenience init(screenSize: MTLSize, layers: [MTLRasterizationRateLayerDescriptor], label: String? = nil)
```

## Parameters

- `screenSize`: The logical size, in pixels, of the viewport coordinate system.
- `layers`: An array of rate layer descriptors for the rate map’s layers.
- `label`: A string that identifies the resulting rate map.

<a id="return-value"></a>

## Return Value

A descriptor object whose [screenSize](screensize.md) and [label](label.md) properties are set to the provided values and whose rate map layers are set to the array you provided.

## See Also

### Creating rate map descriptors

- [init(screenSize:label:)](init%28screensize_label_%29.md): A convenience initializer that creates a rate map descriptor with a given size and identifier.
- [init(screenSize:layer:label:)](init%28screensize_layer_label_%29.md): A convenience initializer that creates a rate map descriptor with a single rate layer.
