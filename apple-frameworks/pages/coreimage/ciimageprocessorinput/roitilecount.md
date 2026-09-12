> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorinput/roitilecount](https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/roitilecount)

# roiTileCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

This property tells a tiled-input processor how many input tiles will be processed.

## Declaration

```swift
var roiTileCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This property is only relevant if your processor implements `/CIImageProcessorKernel/roiTileArrayForInput:arguments:outputRect:`

This can be useful if the processor needs to do work [CIImageProcessorOutput](../ciimageprocessoroutput.md) after the last tile is processed.

## See Also

### Instance Properties

- [digest](digest.md): A 64-bit digest that uniquely describes the contents of the input to a processor.
- [roiTileIndex](roitileindex.md): This property tells a tiled-input processor which input tile index is being processed.

# roiTileCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

This property tells a tiled-input processor how many input tiles will be processed.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger roiTileCount;
```

<a id="discussion"></a>

## Discussion

This property is only relevant if your processor implements `/CIImageProcessorKernel/roiTileArrayForInput:arguments:outputRect:`

This can be useful if the processor needs to do work [CIImageProcessorOutput](../ciimageprocessoroutput.md) after the last tile is processed.

## See Also

### Instance Properties

- [digest](digest.md): A 64-bit digest that uniquely describes the contents of the input to a processor.
- [roiTileIndex](roitileindex.md): This property tells a tiled-input processor which input tile index is being processed.
