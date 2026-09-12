> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasseteditoperation/content](https://developer.apple.com/documentation/photos/phasseteditoperation/content)

# PHAssetEditOperation.content (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset’s photo or video content can be edited.

## Declaration

```swift
case content
```

<a id="Discussion"></a>

## Discussion

To begin the process of editing an asset, use the [requestContentEditingInput(with:completionHandler:)](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

## See Also

### Constants

- [PHAssetEditOperation.delete](delete.md): The asset can be deleted from the photo library.
- [PHAssetEditOperation.properties](properties.md): The asset’s metadata properties can be edited.

# PHAssetEditOperationContent (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset’s photo or video content can be edited.

## Declaration

```objectivec
PHAssetEditOperationContent
```

<a id="Discussion"></a>

## Discussion

To begin the process of editing an asset, use the [requestContentEditingInputWithOptions:completionHandler:](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

## See Also

### Constants

- [PHAssetEditOperationDelete](delete.md): The asset can be deleted from the photo library.
- [PHAssetEditOperationProperties](properties.md): The asset’s metadata properties can be edited.
