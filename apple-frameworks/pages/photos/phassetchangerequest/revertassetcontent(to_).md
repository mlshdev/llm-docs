> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/revertassetcontent(to:)](https://developer.apple.com/documentation/photos/phassetchangerequest/revertassetcontent(to:))

# revertAssetContent(to:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.

## Declaration

```swift
func revertAssetContent(to choice: PHAsset.OriginalResourceChoice)
```

## Parameters

- `choice`: The original resource to use as the unadjusted base after reverting.

<a id="discussion"></a>

## Discussion

In addition to reverting all adjustments, this selects either the RAW ([PHAsset.OriginalResourceChoice.raw](../phasset/originalresourcechoice-swift.enum/raw.md)) or the compressed ([PHAsset.OriginalResourceChoice.compressed](../phasset/originalresourcechoice-swift.enum/compressed.md)) resource as the source for all renders. This applies to RAW+JPEG assets only. Using this with other types of assets is not supported.

## See Also

### Editing Asset Content

- [contentEditingOutput](contenteditingoutput.md): The output of an asset content editing session.
- [revertAssetContentToOriginal()](revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.

# revertAssetContentToOriginalResourceChoice: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.

## Declaration

```objectivec
- (void) revertAssetContentToOriginalResourceChoice:(PHOriginalResourceChoice) choice;
```

## Parameters

- `choice`: The original resource to use as the unadjusted base after reverting.

<a id="discussion"></a>

## Discussion

In addition to reverting all adjustments, this selects either the RAW ([PHOriginalResourceChoiceRaw](../phasset/originalresourcechoice-swift.enum/raw.md)) or the compressed ([PHOriginalResourceChoiceCompressed](../phasset/originalresourcechoice-swift.enum/compressed.md)) resource as the source for all renders. This applies to RAW+JPEG assets only. Using this with other types of assets is not supported.

## See Also

### Editing Asset Content

- [contentEditingOutput](contenteditingoutput.md): The output of an asset content editing session.
- [revertAssetContentToOriginal](revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.
