> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phcontenteditingcontroller/cancelcontentediting()](https://developer.apple.com/documentation/photosui/phcontenteditingcontroller/cancelcontentediting())

# cancelContentEditing() (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Tells your extension to cancel editing.

## Declaration

```swift
func cancelContentEditing()
```

<a id="Discussion"></a>

## Discussion

Photos may call this method at any time after your extension view controller’s view appears, including while your app is preparing the editing output.

At this time, your extension should clean up any resources related to your edit and cancel any background work. If the user cancels editing while your app is preparing output, do not call the `completionHandler` block that Photos provided in the [finishContentEditing(completionHandler:)](finishcontentediting%28completionhandler_%29.md) method.

## See Also

### Canceling an Edit

- [shouldShowCancelConfirmation](shouldshowcancelconfirmation.md): A Boolean value that determines whether Photos should prompt the user when canceling the editing session.

# cancelContentEditing (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Tells your extension to cancel editing.

## Declaration

```objectivec
- (void) cancelContentEditing;
```

<a id="Discussion"></a>

## Discussion

Photos may call this method at any time after your extension view controller’s view appears, including while your app is preparing the editing output.

At this time, your extension should clean up any resources related to your edit and cancel any background work. If the user cancels editing while your app is preparing output, do not call the `completionHandler` block that Photos provided in the [finishContentEditingWithCompletionHandler:](finishcontentediting%28completionhandler_%29.md) method.

## See Also

### Canceling an Edit

- [shouldShowCancelConfirmation](shouldshowcancelconfirmation.md): A Boolean value that determines whether Photos should prompt the user when canceling the editing session.
