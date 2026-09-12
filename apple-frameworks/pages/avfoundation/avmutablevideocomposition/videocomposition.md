> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/videocomposition](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/videocomposition)

# videoComposition

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a new mutable video composition.

## Declaration

```objectivec
+ (AVMutableVideoComposition *) videoComposition;
```

<a id="return-value"></a>

## Return Value

A newly created and initialized instance of `AVMutableVideoComposition`.

<a id="Discussion"></a>

## Discussion

The returned `AVMutableVideoComposition` has the following properties:

- A [frameDuration](frameduration.md) of [kCMTimeZero](../../coremedia/cmtime/zero.md).
- A [renderSize](rendersize.md) of `{0.0, 0.0}`.
- A `nil` array of [instructions](instructions.md).
- The [animationTool](animationtool.md) property set to `nil`.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
