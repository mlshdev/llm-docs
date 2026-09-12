> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/naming-resources-and-commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands)

# Naming resources and commands

**Kind:** Article

Enhance the debugging of your Metal app using labels and grouping.

<a id="Overview"></a>

## Overview

Resource labels and command debug groups are useful when debugging and profiling your app using Metal tools. Assigning meaningful resource labels helps you find your specific resources more quickly. Logically grouping commands lets you easily navigate the workload after capturing it.

> **Note**

> The properties and methods described here don’t affect the graphics-rendering or compute-processing behavior of your app.

<a id="Annotate-resources"></a>

### Annotate resources

Many Metal objects provide a [label](https://developer.apple.com/documentation/metal/mtlresource/label) property where you can assign a meaningful string. These labels appear in each Metal tool, allowing you to easily identify specific objects.

In addition, for [MTLBuffer](https://developer.apple.com/documentation/metal/mtlbuffer), the [addDebugMarker(\_:range:)](https://developer.apple.com/documentation/metal/mtlbuffer/adddebugmarker%28_:range:%29) method allows you to mark and identify specific data ranges. You can call the [removeAllDebugMarkers()](https://developer.apple.com/documentation/metal/mtlbuffer/removealldebugmarkers%28%29) method to clear the existing markers.

<a id="Annotate-commands"></a>

### Annotate commands

Command buffers and command encoders provide the following methods for you to easily identify specific groups of Metal commands in your app:

- On an [MTLCommandBuffer](https://developer.apple.com/documentation/metal/mtlcommandbuffer) object, call [pushDebugGroup(\_:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/pushdebuggroup%28_:%29) and [popDebugGroup()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/popdebuggroup%28%29) to group commands within that buffer.
- On an [MTLCommandEncoder](https://developer.apple.com/documentation/metal/mtlcommandencoder) object, call [pushDebugGroup(\_:)](https://developer.apple.com/documentation/metal/mtlcommandencoder/pushdebuggroup%28_:%29) and [popDebugGroup()](https://developer.apple.com/documentation/metal/mtlcommandencoder/popdebuggroup%28%29) to group commands within that encoder. In addition, call [insertDebugSignpost(\_:)](https://developer.apple.com/documentation/metal/mtlcommandencoder/insertdebugsignpost%28_:%29) to mark interesting locations in the encoder.

Xcode pushes and pops debug groups using unique stacks that exist only within the lifetime of their associated [MTLCommandBuffer](https://developer.apple.com/documentation/metal/mtlcommandbuffer) or [MTLCommandEncoder](https://developer.apple.com/documentation/metal/mtlcommandencoder). You can nest debug groups by pushing multiple groups onto the stack before popping previous groups.

Use these methods to simplify your app development process, particularly for tasks that involve many Metal commands per buffer or encoder.

The following example demonstrates pushing and popping multiple debug groups:

```swift
func encodeRenderPass(commandBuffer: MTLCommandBuffer, descriptor: MTLRenderPassDescriptor) { 
    guard let renderEncoder = commandBuffer.makeRenderCommandEncoder(descriptor: descriptor) else { return }
    renderEncoder.label = "My Render Encoder"
    renderEncoder.pushDebugGroup("My Render Pass")

        renderEncoder.pushDebugGroup("Pipeline Setup")
        // Render pipeline commands.
        renderEncoder.popDebugGroup() // Pops "Pipeline Setup".

        renderEncoder.pushDebugGroup("Vertex Setup")
        // Vertex function commands.
        renderEncoder.popDebugGroup() // Pops "Vertex Setup".

        renderEncoder.pushDebugGroup("Fragment Setup")
        // Fragment function commands.
        renderEncoder.popDebugGroup() // Pops "Fragment Setup".

        renderEncoder.pushDebugGroup("Draw Calls")
        // Drawing commands.
        renderEncoder.popDebugGroup() // Pops "Draw Calls".

    renderEncoder.popDebugGroup() // Pops "My Render Pass".
    renderEncoder.endEncoding()
}
```

The following screenshot shows how the debug groups appear in Xcode’s Debug navigator after you capture a frame:

![A screenshot of Xcode’s Debug navigator showing nested debug groups inside a render pass.](https://developer.apple.com/images/com.apple.Xcode/gputools-metal-debugger-debug-navigator-labels.png)

## See Also

### Project preparation for debugging

- [Building your project with embedded shader sources](building-your-project-with-embedded-shader-sources.md): Prepare to debug your project’s shaders by including source code in the build.
- [Creating and using custom capture scopes](creating-and-using-custom-capture-scopes.md): Capture specific GPU commands by using custom capture scopes.
