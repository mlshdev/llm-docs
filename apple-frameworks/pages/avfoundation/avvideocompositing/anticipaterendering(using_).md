> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/anticipaterendering(using:)](https://developer.apple.com/documentation/avfoundation/avvideocompositing/anticipaterendering(using:))

# anticipateRendering(using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Informs a custom video compositor about upcoming rendering requests.

## Declaration

```swift
optional func anticipateRendering(using renderHint: AVVideoCompositionRenderHint)
```

## Parameters

- `renderHint`: Information about the upcoming composition requests.

<a id="Discussion"></a>

## Discussion

In this method, the compositor can load composition resources, such as overlay images, that will be needed in the anticipated rendering time range.

Unlike the [startRequest(\_:)](startrequest%28__%29.md) method, which is invoked only when the frame compositing is necessary, this method is typically called every frame duration. It allows the custom compositor to load and unload a composition resource such as overlay images at an appropriate time.

In forward playback, the render hint’s [startCompositionTime](../avvideocompositionrenderhint/startcompositiontime.md) is less than its [endCompositionTime](../avvideocompositionrenderhint/endcompositiontime.md). In reverse playback, its [endCompositionTime](../avvideocompositionrenderhint/endcompositiontime.md) is less than its [startCompositionTime](../avvideocompositionrenderhint/startcompositiontime.md). For seeking, the two values are equivalent, which means the upcoming composition request time range is unknown.

This method is guaranteed to be called before [startRequest(\_:)](startrequest%28__%29.md) for a given composition time.

This method is synchronous. Make sure that your implementation returns quickly to ensure that playback doesn’t stall and cause frame drops.

## See Also

### Preparing to render frames

- [prerollForRendering(using:)](prerollforrendering%28using_%29.md): Tells a custom video compositor to perform any work in the prerolling phase.
- [AVVideoCompositionRenderHint](../avvideocompositionrenderhint.md): Information about upcoming composition requests, such as composition start time and end time.

# anticipateRenderingUsingHint: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Informs a custom video compositor about upcoming rendering requests.

## Declaration

```objectivec
- (void) anticipateRenderingUsingHint:(AVVideoCompositionRenderHint *) renderHint;
```

## Parameters

- `renderHint`: Information about the upcoming composition requests.

<a id="Discussion"></a>

## Discussion

In this method, the compositor can load composition resources, such as overlay images, that will be needed in the anticipated rendering time range.

Unlike the [startVideoCompositionRequest:](startrequest%28__%29.md) method, which is invoked only when the frame compositing is necessary, this method is typically called every frame duration. It allows the custom compositor to load and unload a composition resource such as overlay images at an appropriate time.

In forward playback, the render hint’s [startCompositionTime](../avvideocompositionrenderhint/startcompositiontime.md) is less than its [endCompositionTime](../avvideocompositionrenderhint/endcompositiontime.md). In reverse playback, its [endCompositionTime](../avvideocompositionrenderhint/endcompositiontime.md) is less than its [startCompositionTime](../avvideocompositionrenderhint/startcompositiontime.md). For seeking, the two values are equivalent, which means the upcoming composition request time range is unknown.

This method is guaranteed to be called before [startVideoCompositionRequest:](startrequest%28__%29.md) for a given composition time.

This method is synchronous. Make sure that your implementation returns quickly to ensure that playback doesn’t stall and cause frame drops.

## See Also

### Preparing to render frames

- [prerollForRenderingUsingHint:](prerollforrendering%28using_%29.md): Tells a custom video compositor to perform any work in the prerolling phase.
- [AVVideoCompositionRenderHint](../avvideocompositionrenderhint.md): Information about upcoming composition requests, such as composition start time and end time.
