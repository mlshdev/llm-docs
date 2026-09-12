> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phcontenteditingcontroller/finishcontentediting(completionhandler:)](https://developer.apple.com/documentation/photosui/phcontenteditingcontroller/finishcontentediting(completionhandler:))

# finishContentEditing(completionHandler:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Asks your extension for edited asset data to finish the editing session.

## Declaration

```swift
func finishContentEditing(completionHandler: @escaping (PHContentEditingOutput?) -> Void)
```

```swift
func finishContentEditing() async -> PHContentEditingOutput?
```

## Parameters

- `completionHandler`: A block for your extension to call when you have finished editing.

  The block takes the following parameter:

  - **output**: The [PHContentEditingOutput](../../photos/phcontenteditingoutput.md) object you created and populated before calling the completion handler.

<a id="Discussion"></a>

## Discussion

Photos calls this method when the user chooses to end the editing session. Your extension view controller should:

1. Disable UI elements to prevent the user from editing further while you complete the remaining steps on a background queue.
2. Create a [PHContentEditingOutput](../../photos/phcontenteditingoutput.md) object from the [PHContentEditingInput](../../photos/phcontenteditinginput.md) object that Photos provided to your extension in the [startContentEditing(with:placeholderImage:)](startcontentediting%28with_placeholderimage_%29.md) method.

Use the content editing output to store the rendered photo or video data from the user’s edits and a [PHAdjustmentData](../../photos/phadjustmentdata.md) object describing the edits.

> **Note**

>  To end editing without committing changes to the asset, leave the content editing output’s [adjustmentData](../../photos/phcontenteditingoutput/adjustmentdata.md) property set to `nil` and do not write to the location specified by its [renderedContentURL](../../photos/phcontenteditingoutput/renderedcontenturl.md) property.

3. Call the `completionHandler` block with your content editing output, to notify Photos that the edit is complete.
4. After the `completionHandler` block finishes executing, you may safely clean up any data or files related to your edit.

## See Also

### Performing an Edit

- [startContentEditing(with:placeholderImage:)](startcontentediting%28with_placeholderimage_%29.md): Tells your extension that asset data is available for editing.

# finishContentEditingWithCompletionHandler: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Asks your extension for edited asset data to finish the editing session.

## Declaration

```objectivec
- (void) finishContentEditingWithCompletionHandler:(void (^)(PHContentEditingOutput *)) completionHandler;
```

## Parameters

- `completionHandler`: A block for your extension to call when you have finished editing.

  The block takes the following parameter:

  - **output**: The [PHContentEditingOutput](../../photos/phcontenteditingoutput.md) object you created and populated before calling the completion handler.

<a id="Discussion"></a>

## Discussion

Photos calls this method when the user chooses to end the editing session. Your extension view controller should:

1. Disable UI elements to prevent the user from editing further while you complete the remaining steps on a background queue.
2. Create a [PHContentEditingOutput](../../photos/phcontenteditingoutput.md) object from the [PHContentEditingInput](../../photos/phcontenteditinginput.md) object that Photos provided to your extension in the [startContentEditingWithInput:placeholderImage:](startcontentediting%28with_placeholderimage_%29.md) method.

Use the content editing output to store the rendered photo or video data from the user’s edits and a [PHAdjustmentData](../../photos/phadjustmentdata.md) object describing the edits.

> **Note**

>  To end editing without committing changes to the asset, leave the content editing output’s [adjustmentData](../../photos/phcontenteditingoutput/adjustmentdata.md) property set to `nil` and do not write to the location specified by its [renderedContentURL](../../photos/phcontenteditingoutput/renderedcontenturl.md) property.

3. Call the `completionHandler` block with your content editing output, to notify Photos that the edit is complete.
4. After the `completionHandler` block finishes executing, you may safely clean up any data or files related to your edit.

## See Also

### Performing an Edit

- [startContentEditingWithInput:placeholderImage:](startcontentediting%28with_placeholderimage_%29.md): Tells your extension that asset data is available for editing.
