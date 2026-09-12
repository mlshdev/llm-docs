> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phcontenteditingcontroller/startcontentediting(with:placeholderimage:)](https://developer.apple.com/documentation/photosui/phcontenteditingcontroller/startcontentediting(with:placeholderimage:))

# startContentEditing(with:placeholderImage:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Tells your extension that asset data is available for editing.

## Declaration

```swift
func startContentEditing(with contentEditingInput: PHContentEditingInput, placeholderImage: UIImage)
```

```swift
func startContentEditing(with contentEditingInput: PHContentEditingInput, placeholderImage: NSImage)
```

## Parameters

- `contentEditingInput`: An object that describes the asset to be edited.
- `placeholderImage`: An image representing the current state of the asset suitable for temporarily displaying in your extension’s UI.

<a id="Discussion"></a>

## Discussion

Photos calls this method before your extension view controller’s view appears.

For a photo asset, use the [displaySizeImage](../../photos/phcontenteditinginput/displaysizeimage.md) property of the provided [PHContentEditingInput](../../photos/phcontenteditinginput.md) object to perform editing in your extension’s UI. If your extension returned `true` from the [canHandle(\_:)](canhandle%28__%29.md) method, this image represents the previous version of the asset—you need to use the [adjustmentData](../../photos/phcontenteditinginput/adjustmentdata.md) object to reconstruct the last edit made to the asset. Because asynchronously rendering the results of the previous edit may take some time, you can display the `placeholderImage` until your extension is ready to begin editing.

You don’t need to use the content editing input’s [fullSizeImageURL](../../photos/phcontenteditinginput/fullsizeimageurl.md) property until the user has finished editing and you need to render final output.

For a video asset, use the [PHContentEditingInput](../../photos/phcontenteditinginput.md) object to retrieve AVFoundation objects for editing audio and video content.

## See Also

### Performing an Edit

- [finishContentEditing(completionHandler:)](finishcontentediting%28completionhandler_%29.md): Asks your extension for edited asset data to finish the editing session.

# startContentEditingWithInput:placeholderImage: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Tells your extension that asset data is available for editing.

## Declaration

```objectivec
- (void) startContentEditingWithInput:(PHContentEditingInput *) contentEditingInput placeholderImage:(UIImage *) placeholderImage;
```

```objectivec
- (void) startContentEditingWithInput:(PHContentEditingInput *) contentEditingInput placeholderImage:(NSImage *) placeholderImage;
```

## Parameters

- `contentEditingInput`: An object that describes the asset to be edited.
- `placeholderImage`: An image representing the current state of the asset suitable for temporarily displaying in your extension’s UI.

<a id="Discussion"></a>

## Discussion

Photos calls this method before your extension view controller’s view appears.

For a photo asset, use the [displaySizeImage](../../photos/phcontenteditinginput/displaysizeimage.md) property of the provided [PHContentEditingInput](../../photos/phcontenteditinginput.md) object to perform editing in your extension’s UI. If your extension returned `true` from the [canHandleAdjustmentData:](canhandle%28__%29.md) method, this image represents the previous version of the asset—you need to use the [adjustmentData](../../photos/phcontenteditinginput/adjustmentdata.md) object to reconstruct the last edit made to the asset. Because asynchronously rendering the results of the previous edit may take some time, you can display the `placeholderImage` until your extension is ready to begin editing.

You don’t need to use the content editing input’s [fullSizeImageURL](../../photos/phcontenteditinginput/fullsizeimageurl.md) property until the user has finished editing and you need to render final output.

For a video asset, use the [PHContentEditingInput](../../photos/phcontenteditinginput.md) object to retrieve AVFoundation objects for editing audio and video content.

## See Also

### Performing an Edit

- [finishContentEditingWithCompletionHandler:](finishcontentediting%28completionhandler_%29.md): Asks your extension for edited asset data to finish the editing session.
