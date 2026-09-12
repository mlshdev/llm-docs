> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/contenteditingoutput](https://developer.apple.com/documentation/photos/phassetchangerequest/contenteditingoutput)

# contentEditingOutput (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The output of an asset content editing session.

## Declaration

```swift
var contentEditingOutput: PHContentEditingOutput? { get set }
```

## Mentioned In

- [Editing Asset Content](../../photokit/editing-asset-content.md)
- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

To edit an asset’s image or video content, you must first begin a content editing session with the asset’s [requestContentEditingInput(with:completionHandler:)](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method. You commit a content edit by setting the [contentEditingOutput](contenteditingoutput.md) property of a change request within a change block. For more information about asset content editing, see [PHAsset](../phasset.md).

## See Also

### Editing Asset Content

- [revertAssetContentToOriginal()](revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.
- [revertAssetContent(to:)](revertassetcontent%28to_%29.md): Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.

# contentEditingOutput (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The output of an asset content editing session.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) PHContentEditingOutput * contentEditingOutput;
```

## Mentioned In

- [Editing Asset Content](../../photokit/editing-asset-content.md)
- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

To edit an asset’s image or video content, you must first begin a content editing session with the asset’s [requestContentEditingInputWithOptions:completionHandler:](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method. You commit a content edit by setting the [contentEditingOutput](contenteditingoutput.md) property of a change request within a change block. For more information about asset content editing, see [PHAsset](../phasset.md).

## See Also

### Editing Asset Content

- [revertAssetContentToOriginal](revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.
- [revertAssetContentToOriginalResourceChoice:](revertassetcontent%28to_%29.md): Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.
