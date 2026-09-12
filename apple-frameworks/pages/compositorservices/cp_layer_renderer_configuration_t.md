> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_t](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_t)

# cp_layer_renderer_configuration_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that stores the texture formats, layout information, and other details you use to configure your rendering loop code.

## Declaration

```objectivec
typedef CP_OBJECT_cp_layer_renderer_configuration * cp_layer_renderer_configuration_t;
```

<a id="discussion"></a>

## Discussion

A [cp_layer_renderer_configuration_t](cp_layer_renderer_configuration_t.md) type stores the configuration options for your app’s `cp_layer_t` object. When configuring the content for your app’s immersive space, use this type to specify information about the texture layouts, pixel formats, and rendering options you want. The system uses the provided information to initialize the `cp_layer_t` object. It also uses the information to create the Metal textures and other data structures that you use for each frame of content.

You don’t create this type directly. When implementing the `makeConfiguration` method of your `CompositorConfiguration` type, the system passes a set of default configuration values for you to modify.
