> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aurendercontextobserver](https://developer.apple.com/documentation/audiotoolbox/aurendercontextobserver)

# AURenderContextObserver

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A custom block that tells the audio unit which thread context to use for the next render cycle.

## Declaration

```objectivec
typedef void (^)(const struct AudioUnitRenderContext *) __attribute__((nonblocking)) AURenderContextObserver;
```

## Mentioned In

- [Adding Audio Unit Auxiliary Real-Time Threads to Audio Workgroups](adding-audio-unit-auxiliary-real-time-threads-to-audio-workgroups.md)

<a id="Discussion"></a>

## Discussion

Provide this block if your Audio Unit creates its own auxiliary real-time rendering threads and operates them in parallel with the host app’s rendering thread. For a v3 Audio Unit, assign your block to the [renderContextObserver](auaudiounit/rendercontextobserver.md) property of your [AUAudioUnit](auaudiounit.md) object. For a v2 Audio Unit, assign this block to the [kAudioUnitProperty_RenderContextObserver](kaudiounitproperty_rendercontextobserver.md) property of the audio unit.

Use the implementation of your block to prepare your Audio Unit’s rendering threads. For example, use this block to remove the thread from its previous workgroup and join the new workgroup in the [AudioUnitRenderContext](audiounitrendercontext.md) structure passed to the block. If the new render context does not correspond to a real-time operation, the new workgroup might be `NULL`.

The system fetches and caches this block when it opens the Audio Unit. When the render context changes, the system calls the block from the render thread before it issues any new render requests.

## See Also

### Host App Workgroup

- [kAudioUnitProperty_RenderContextObserver](kaudiounitproperty_rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [AudioUnitRenderContext](audiounitrendercontext.md): A structure that contains thread context information for a real-time rendering operation.
