> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal](https://developer.apple.com/documentation/metal)

# Metal (Swift)

**Framework:** Metal  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Render advanced 3D graphics and compute data in parallel with graphics processors.

<a id="overview"></a>

## Overview

The Metal framework gives your app direct access to a device’s graphics processing unit (GPU). With Metal, apps can leverage a GPU to quickly render complex scenes and run computational tasks in parallel. For example, apps in these categories use Metal to maximize their performance:

- Games that render sophisticated 2D or 3D environments
- Video processing apps, like Final Cut Pro
- Scientific research apps that analyze and process large datasets
- Fully immersive visionOS apps

Metal works hand-in-hand with other frameworks that supplement its capability. For example, [MetalFX](metalfx.md) upscales your renderings in less time than rendering them natively, and [MetalKit](metalkit.md) simplifies the tasks that display your Metal content onscreen. The [Metal Performance Shaders](metalperformanceshaders.md) framework provides a large library of optimized compute and rendering shaders that take advantage of each GPU’s unique hardware. In visionOS, create fully immersive stereoscopic content with the help of the [Compositor Services](compositorservices.md) framework.

Many high-level Apple frameworks leverage the performance of Metal, including [RealityKit](realitykit.md), [SpriteKit](spritekit.md), and [Core Image](coreimage.md). These high-level frameworks implement the GPU programming details for you. However, you can typically get better performance by writing your own custom Metal and shader code. See the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for shader implementation details.

## Topics

### Essentials

Begin with the Metal fundamentals.

- [Understanding the Metal 4 core API](metal/understanding-the-metal-4-core-api.md): Discover the features and functionality in the Metal 4 foundational APIs.
- [Drawing a triangle with Metal 4](metal/drawing-a-triangle-with-metal-4.md): Render a colorful, rotating 2D triangle by running draw commands with a render pipeline on a GPU.
- [Performing calculations on a GPU](metal/performing-calculations-on-a-gpu.md): Use Metal to find GPUs and perform calculations on them.
- [Using Metal to draw a view’s contents](metal/using-metal-to-draw-a-view's-contents.md): Create a MetalKit view and a render pass to draw the view’s contents.

### Samples

Discover graphics techniques and Metal features through sample code projects.

- [Metal sample code library](metal/metal-sample-code-library.md): Explore the complete set of Metal samples.

### GPU devices

Start with a Metal device instance to begin working with the GPU it represents.

- [GPU devices and work submission](metal/gpu-devices-and-work-submission.md): Find any available GPU, submit work to it with command buffers, suspend work, and coordinate between multiple GPUs.

### Command encoders

Send work to a GPU by issuing commands and configuring the pipeline states for those commands.

- [Render passes](metal/render-passes.md): Encode a render pass to draw graphics into an image.
- [Compute passes](metal/compute-passes.md): Encode a compute pass that runs computations in parallel on a thread grid, processing and manipulating Metal resource data on multiple cores of a GPU.
- [Machine learning passes](metal/machine-learning-passes.md): Add machine learning model inference to your Metal app’s GPU workflow.
- [Blit passes](metal/blit-passes.md): Encode a block information transfer pass to adjust and copy data to and from GPU resources, such as buffers and textures.
- [Indirect command encoding](metal/indirect-command-encoding.md): Store draw commands in Metal buffers and run them at a later time on the GPU, either once or repeatedly.
- [Ray tracing with acceleration structures](metal/ray-tracing-with-acceleration-structures.md): Build a representation of your scene’s geometry using triangles and bounding volumes to quickly trace rays through the scene.

### Resources

Store data in buffers and textures, and optionally manage the underlying GPU memory yourself.

- [Resource fundamentals](metal/resource-fundamentals.md): Control the common attributes of all Metal memory resources, including buffers and textures, and how to configure their underlying memory.
- [Buffers](metal/buffers.md): Create and manage untyped data your app uses to exchange information with its shader functions.
- [Textures](metal/textures.md): Create and manage typed data your app uses to exchange information with its shader functions.
- [Memory heaps](metal/memory-heaps.md): Take control of your app’s GPU memory management by creating a large memory allocation for various buffers, textures, and other resources.
- [Resource loading](metal/resource-loading.md): Load assets in your games and apps quickly by running a dedicated input/output queue alongside your GPU tasks.
- [Resource synchronization](metal/resource-synchronization.md): Prevent multiple commands that can access the same resources simultaneously by coordinating those reads and writes with barriers, fences, or events.

### Shader compilation and libraries

Compile and organize shaders, the GPU functions that run on a Metal device’s execution units.

- [Writing reusable GPU functions with generic pointers](metal/writing-reusable-gpu-functions-with-generic-pointers.md): Define utility functions once for multiple address spaces, and share types with your app’s main code.
- [Using the Metal 4 compilation API](metal/using-the-metal-4-compilation-api.md): Control when and how you compile an app’s shaders.
- [Shader libraries](metal/shader-libraries.md): Manage and load your app’s Metal shaders.
- [Using function specialization to build pipeline variants](metal/using-function-specialization-to-build-pipeline-variants.md): Create pipelines for different levels of detail from a common shader source.

### Presentation

Display standard or high-dynamic-range content on a device’s display with [Core Animation](quartzcore.md) or [MetalKit](metalkit.md), in standard or high dynamic range.

- [Managing your game window for Metal in macOS](metal/managing-your-game-window-for-metal-in-macos.md): Set up a window and view for optimally displaying your Metal content.
- [Managing your Metal app window in iPadOS](metal/managing-your-metal-app-window-in-ipados.md): Set up a window that handles dynamically resizing your Metal content.
- [Adapting your game interface for smaller screens](metal/adapting-your-game-interface-for-smaller-screens.md): Make text legible on all devices the player chooses to run your game on.
- [Onscreen presentation](metal/onscreen-presentation.md): Show the output from a GPU’s rendering pass to the user in your app.
- [HDR content](metal/hdr-content.md): Take advantage of high dynamic range to present more vibrant colors in your apps and games.

### Developer tools

Identify and fix issues with your app’s Metal API calls, shader code, resources, and performance during development by using Metal Debugger.

- [Supporting Simulator in a Metal app](metal/supporting-simulator-in-a-metal-app.md): Configure alternative render paths in your Metal app to enable running your app in Simulator.
- [Capturing Metal commands programmatically](metal/capturing-metal-commands-programmatically.md): Invoke a Metal frame capture from your app, then save the resulting GPU trace to a file or view it in Xcode.
- [Logging shader debug messages](metal/logging-shader-debug-messages.md): Print debugging messages that a shader generates using shader logging.
- [Developing Metal apps that run in Simulator](metal/developing-metal-apps-that-run-in-simulator.md): Prototype and test your Metal apps in Simulator.
- [Improving your game’s graphics performance and settings](metal/improving-your-games-graphics-performance-and-settings.md): Fix performance glitches and develop default settings for smooth experiences on Apple platforms using the powerful suite of Metal development tools.
- [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger): Debug and profile your Metal workload with a GPU trace.
- [Metal developer workflows](https://developer.apple.com/documentation/xcode/metal-developer-workflows): Locate and fix issues related to your app’s use of the Metal API and GPU functions.
- [GPU counters and counter sample buffers](metal/gpu-counters-and-counter-sample-buffers.md): Retrieve runtime data from a GPU device by sampling one or more of its counters.
- [Metal debugging types](metal/metal-debugging-types.md): Create capture managers and capture scopes, and review a GPU device’s log after it runs a command buffer.

### Apple silicon

Take advantage of the unique architecture of Apple silicon GPUs.

- [Porting your Metal code to Apple silicon](apple-silicon/porting-your-metal-code-to-apple-silicon.md): Create a version of your Metal app that runs on both Apple silicon and Intel-based Mac computers.
- [Tailor your apps for Apple GPUs and tile-based deferred rendering](metal/tailor-your-apps-for-apple-gpus-and-tile-based-deferred-rendering.md): Learn about characteristic Apple GPU features, including imageblocks, tile shaders, and raster order groups.

### Reference

- [Metal structures](metal/metal-structures.md)
- [Metal enumerations](metal/metal-enumerations.md)
- [Metal constants](metal/metal-constants.md)
- [Metal data types](metal/metal-data-types.md)
- [Metal variables](metal/metal-variables.md)

### Classes

- [MTLTensorAuxiliaryPlaneDescriptor](metal/mtltensorauxiliaryplanedescriptor.md): A configuration for an auxiliary plane in a multi-plane tensor.
- [MTLTensorAuxiliaryPlaneDescriptorMap](metal/mtltensorauxiliaryplanedescriptormap.md): A map of auxiliary plane descriptors keyed by plane type.
- [MTLTensorAuxiliaryPlaneType](metal/mtltensorauxiliaryplanetype.md): An auxiliary plane that a shader’s tensor argument requires.
- [MTLTensorBufferAttachments](metal/mtltensorbufferattachments.md): An object that associates each plane of a tensor with a buffer and byte offset for buffer-backed tensor creation.

### Protocols

- [MTLTensorAuxiliaryPlane](metal/mtltensorauxiliaryplane.md): A type that represents the configuration and storage of an auxiliary plane in a multi-plane tensor.

### Structures

- [MTLDeviceError](metal/mtldeviceerror-swift.struct.md)

### Variables

- [MTLDeviceErrorDomain](metal/mtldeviceerrordomain.md)

### Enumerations

- [MTLContentionRelief](metal/mtlcontentionrelief.md)
- [MTLFloatingPointConversionRoundingMode](metal/mtlfloatingpointconversionroundingmode.md)
- [MTLForwardProgressUsage](metal/mtlforwardprogressusage.md)
- [MTLTensorPlaneType](metal/mtltensorplanetype.md): The possible tensor plane types.

## See Also

### Related Documentation

- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)
- [Metal Best Practices Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/MTLBestPracticesGuide/index.html#//apple_ref/doc/uid/TP40016642)

# Metal (Objective-C)

**Framework:** Metal  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Render advanced 3D graphics and compute data in parallel with graphics processors.

<a id="overview"></a>

## Overview

The Metal framework gives your app direct access to a device’s graphics processing unit (GPU). With Metal, apps can leverage a GPU to quickly render complex scenes and run computational tasks in parallel. For example, apps in these categories use Metal to maximize their performance:

- Games that render sophisticated 2D or 3D environments
- Video processing apps, like Final Cut Pro
- Scientific research apps that analyze and process large datasets
- Fully immersive visionOS apps

Metal works hand-in-hand with other frameworks that supplement its capability. For example, [MetalFX](metalfx.md) upscales your renderings in less time than rendering them natively, and [MetalKit](metalkit.md) simplifies the tasks that display your Metal content onscreen. The [Metal Performance Shaders](metalperformanceshaders.md) framework provides a large library of optimized compute and rendering shaders that take advantage of each GPU’s unique hardware. In visionOS, create fully immersive stereoscopic content with the help of the [Compositor Services](compositorservices.md) framework.

Many high-level Apple frameworks leverage the performance of Metal, including [RealityKit](realitykit.md), [SpriteKit](spritekit.md), and [Core Image](coreimage.md). These high-level frameworks implement the GPU programming details for you. However, you can typically get better performance by writing your own custom Metal and shader code. See the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for shader implementation details.

## Topics

### Essentials

Begin with the Metal fundamentals.

- [Understanding the Metal 4 core API](metal/understanding-the-metal-4-core-api.md): Discover the features and functionality in the Metal 4 foundational APIs.
- [Drawing a triangle with Metal 4](metal/drawing-a-triangle-with-metal-4.md): Render a colorful, rotating 2D triangle by running draw commands with a render pipeline on a GPU.
- [Performing calculations on a GPU](metal/performing-calculations-on-a-gpu.md): Use Metal to find GPUs and perform calculations on them.
- [Using Metal to draw a view’s contents](metal/using-metal-to-draw-a-view's-contents.md): Create a MetalKit view and a render pass to draw the view’s contents.

### Samples

Discover graphics techniques and Metal features through sample code projects.

- [Metal sample code library](metal/metal-sample-code-library.md): Explore the complete set of Metal samples.

### GPU devices

Start with a Metal device instance to begin working with the GPU it represents.

- [GPU devices and work submission](metal/gpu-devices-and-work-submission.md): Find any available GPU, submit work to it with command buffers, suspend work, and coordinate between multiple GPUs.

### Command encoders

Send work to a GPU by issuing commands and configuring the pipeline states for those commands.

- [Render passes](metal/render-passes.md): Encode a render pass to draw graphics into an image.
- [Compute passes](metal/compute-passes.md): Encode a compute pass that runs computations in parallel on a thread grid, processing and manipulating Metal resource data on multiple cores of a GPU.
- [Machine learning passes](metal/machine-learning-passes.md): Add machine learning model inference to your Metal app’s GPU workflow.
- [Blit passes](metal/blit-passes.md): Encode a block information transfer pass to adjust and copy data to and from GPU resources, such as buffers and textures.
- [Indirect command encoding](metal/indirect-command-encoding.md): Store draw commands in Metal buffers and run them at a later time on the GPU, either once or repeatedly.
- [Ray tracing with acceleration structures](metal/ray-tracing-with-acceleration-structures.md): Build a representation of your scene’s geometry using triangles and bounding volumes to quickly trace rays through the scene.

### Resources

Store data in buffers and textures, and optionally manage the underlying GPU memory yourself.

- [Resource fundamentals](metal/resource-fundamentals.md): Control the common attributes of all Metal memory resources, including buffers and textures, and how to configure their underlying memory.
- [Buffers](metal/buffers.md): Create and manage untyped data your app uses to exchange information with its shader functions.
- [Textures](metal/textures.md): Create and manage typed data your app uses to exchange information with its shader functions.
- [Memory heaps](metal/memory-heaps.md): Take control of your app’s GPU memory management by creating a large memory allocation for various buffers, textures, and other resources.
- [Resource loading](metal/resource-loading.md): Load assets in your games and apps quickly by running a dedicated input/output queue alongside your GPU tasks.
- [Resource synchronization](metal/resource-synchronization.md): Prevent multiple commands that can access the same resources simultaneously by coordinating those reads and writes with barriers, fences, or events.

### Shader compilation and libraries

Compile and organize shaders, the GPU functions that run on a Metal device’s execution units.

- [Writing reusable GPU functions with generic pointers](metal/writing-reusable-gpu-functions-with-generic-pointers.md): Define utility functions once for multiple address spaces, and share types with your app’s main code.
- [Using the Metal 4 compilation API](metal/using-the-metal-4-compilation-api.md): Control when and how you compile an app’s shaders.
- [Shader libraries](metal/shader-libraries.md): Manage and load your app’s Metal shaders.
- [Using function specialization to build pipeline variants](metal/using-function-specialization-to-build-pipeline-variants.md): Create pipelines for different levels of detail from a common shader source.

### Presentation

Display standard or high-dynamic-range content on a device’s display with [Core Animation](quartzcore.md) or [MetalKit](metalkit.md), in standard or high dynamic range.

- [Managing your game window for Metal in macOS](metal/managing-your-game-window-for-metal-in-macos.md): Set up a window and view for optimally displaying your Metal content.
- [Managing your Metal app window in iPadOS](metal/managing-your-metal-app-window-in-ipados.md): Set up a window that handles dynamically resizing your Metal content.
- [Adapting your game interface for smaller screens](metal/adapting-your-game-interface-for-smaller-screens.md): Make text legible on all devices the player chooses to run your game on.
- [Onscreen presentation](metal/onscreen-presentation.md): Show the output from a GPU’s rendering pass to the user in your app.
- [HDR content](metal/hdr-content.md): Take advantage of high dynamic range to present more vibrant colors in your apps and games.

### Developer tools

Identify and fix issues with your app’s Metal API calls, shader code, resources, and performance during development by using Metal Debugger.

- [Supporting Simulator in a Metal app](metal/supporting-simulator-in-a-metal-app.md): Configure alternative render paths in your Metal app to enable running your app in Simulator.
- [Capturing Metal commands programmatically](metal/capturing-metal-commands-programmatically.md): Invoke a Metal frame capture from your app, then save the resulting GPU trace to a file or view it in Xcode.
- [Logging shader debug messages](metal/logging-shader-debug-messages.md): Print debugging messages that a shader generates using shader logging.
- [Developing Metal apps that run in Simulator](metal/developing-metal-apps-that-run-in-simulator.md): Prototype and test your Metal apps in Simulator.
- [Improving your game’s graphics performance and settings](metal/improving-your-games-graphics-performance-and-settings.md): Fix performance glitches and develop default settings for smooth experiences on Apple platforms using the powerful suite of Metal development tools.
- [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger): Debug and profile your Metal workload with a GPU trace.
- [Metal developer workflows](https://developer.apple.com/documentation/xcode/metal-developer-workflows): Locate and fix issues related to your app’s use of the Metal API and GPU functions.
- [GPU counters and counter sample buffers](metal/gpu-counters-and-counter-sample-buffers.md): Retrieve runtime data from a GPU device by sampling one or more of its counters.
- [Metal debugging types](metal/metal-debugging-types.md): Create capture managers and capture scopes, and review a GPU device’s log after it runs a command buffer.

### Apple silicon

Take advantage of the unique architecture of Apple silicon GPUs.

- [Porting your Metal code to Apple silicon](apple-silicon/porting-your-metal-code-to-apple-silicon.md): Create a version of your Metal app that runs on both Apple silicon and Intel-based Mac computers.
- [Tailor your apps for Apple GPUs and tile-based deferred rendering](metal/tailor-your-apps-for-apple-gpus-and-tile-based-deferred-rendering.md): Learn about characteristic Apple GPU features, including imageblocks, tile shaders, and raster order groups.

### Reference

- [Metal structures](metal/metal-structures.md)
- [Metal enumerations](metal/metal-enumerations.md)
- [Metal constants](metal/metal-constants.md)
- [Metal functions](metal/metal-functions.md)
- [Metal data types](metal/metal-data-types.md)
- [Metal variables](metal/metal-variables.md)
- [Metal macros](metal/metal-macros.md)

### Classes

- [MTLTensorAuxiliaryPlaneDescriptor](metal/mtltensorauxiliaryplanedescriptor.md): A configuration for an auxiliary plane in a multi-plane tensor.
- [MTLTensorAuxiliaryPlaneDescriptorMap](metal/mtltensorauxiliaryplanedescriptormap.md): A map of auxiliary plane descriptors keyed by plane type.
- [MTLTensorAuxiliaryPlaneType](metal/mtltensorauxiliaryplanetype.md): An auxiliary plane that a shader’s tensor argument requires.
- [MTLTensorBufferAttachments](metal/mtltensorbufferattachments.md): An object that associates each plane of a tensor with a buffer and byte offset for buffer-backed tensor creation.

### Protocols

- [MTLTensorAuxiliaryPlane](metal/mtltensorauxiliaryplane.md): A type that represents the configuration and storage of an auxiliary plane in a multi-plane tensor.

### Variables

- [MTLDeviceErrorDomain](metal/mtldeviceerrordomain.md)

### Enumerations

- [MTLContentionRelief](metal/mtlcontentionrelief.md)
- [MTLDeviceError](metal/mtldeviceerror-swift.struct/code.md): Enumeration of kinds of errors that methods on MTLDevice can produce.
- [MTLFloatingPointConversionRoundingMode](metal/mtlfloatingpointconversionroundingmode.md)
- [MTLForwardProgressUsage](metal/mtlforwardprogressusage.md)
- [MTLTensorPlaneType](metal/mtltensorplanetype.md): The possible tensor plane types.

## See Also

### Related Documentation

- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)
- [Metal Best Practices Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/MTLBestPracticesGuide/index.html#//apple_ref/doc/uid/TP40016642)
