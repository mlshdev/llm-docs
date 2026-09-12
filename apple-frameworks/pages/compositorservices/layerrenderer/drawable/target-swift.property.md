> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/target-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/target-swift.property)

# target (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns a value that indicates the target of the drawable type.

## Declaration

```swift
var target: LayerRenderer.Drawable.Target { get }
```

<a id="discussion"></a>

## Discussion

When drawing for the drawable this can be used to alter what is rendered for different targets. Renderer should always prioritize [LayerRenderer.Drawable.Target.builtIn](target-swift.enum/builtin.md) target type.

## See Also

### Retrieving the target

- [LayerRenderer.Drawable.Target](target-swift.enum.md): The target where the drawable will be displayed/used.

# cp_drawable_get_target (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns a value that indicates the target of the drawable type.

## Declaration

```objectivec
cp_drawable_target cp_drawable_get_target(cp_drawable_t drawable);
```

<a id="return-value"></a>

## Return Value

[cp_drawable_target_built_in](target-swift.enum/builtin.md) if the drawable will be displayed for the user in the device, or any other value if the drawable maybe used for other purposes.

<a id="discussion"></a>

## Discussion

When drawing for the drawable this can be used to alter what is rendered for different targets. Renderer should always prioritize [cp_drawable_target_built_in](target-swift.enum/builtin.md) target type.

## See Also

### Retrieving the target

- [cp_drawable_target](target-swift.enum.md): The target where the drawable will be displayed/used.
