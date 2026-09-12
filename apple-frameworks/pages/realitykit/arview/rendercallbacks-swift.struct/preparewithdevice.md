> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/rendercallbacks-swift.struct/preparewithdevice](https://developer.apple.com/documentation/realitykit/arview/rendercallbacks-swift.struct/preparewithdevice)

# prepareWithDevice

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

A callback function for doing initial setup work.

## Declaration

```swift
var prepareWithDevice: ((any MTLDevice) -> Void)?
```

## Mentioned In

- [Applying core image filters as a postprocess effect](../../applying-core-image-filters-as-a-postprocess-effect.md)
- [Implementing postprocess effects using Metal compute functions](../../implementing-postprocess-effects-using-metal-compute-functions.md)

<a id="discussion"></a>

## Discussion

If you assign a function to [prepareWithDevice](preparewithdevice.md), RealityKit calls that function once, after it does its setup work, but before it renders the next frame. If you register a [prepareWithDevice](preparewithdevice.md) callback during app startup, RealityKit calls it before it renders the first frame. A callback function looks like this:

```swift
    func myPostProcessSetupCallback(device: MTLDevice) {
        // Handle setup work here.
    }
```

To register the function so RealityKit calls it, assign it to the [prepareWithDevice](preparewithdevice.md) property of the view’s [renderCallbacks](../rendercallbacks-swift.property.md) property.

```swift
arView.renderCallbacks.prepareWithDevice = myPostProcessSetupCallback
```

To remove the callback, assign `nil`.

```swift
arView.renderCallbacks.prepareWithDevice = nil
```

If you assign a new closure or function to the property after setting it to `nil`, RealityKit calls the new closure before it renders the next frame. In that case, avoid doing long-running tasks in the callback function to avoid rendering hitches.

## See Also

### Register callback closures

- [postProcess](postprocess.md): A callback function for implementing postprocess effects.
