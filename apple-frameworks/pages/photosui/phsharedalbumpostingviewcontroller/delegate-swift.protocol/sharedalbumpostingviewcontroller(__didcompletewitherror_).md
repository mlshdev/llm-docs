> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.protocol/sharedalbumpostingviewcontroller(_:didcompletewitherror:)](https://developer.apple.com/documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.protocol/sharedalbumpostingviewcontroller(_:didcompletewitherror:))

# sharedAlbumPostingViewController(\_:didCompleteWithError:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func sharedAlbumPostingViewController(_ postingViewController: PHSharedAlbumPostingViewController, didCompleteWithError error: (any Error)?)
```

<a id="discussion"></a>

## Discussion

Called when asset posting has completed.

`error` will be `nil` if asset posting was successful and non-`nil` if it was unsuccessful. The view controller won’t be dismissed automatically when this method is called.

# sharedAlbumPostingViewController:didCompleteWithError: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) sharedAlbumPostingViewController:(PHSharedAlbumPostingViewController *) postingViewController didCompleteWithError:(NSError *) error;
```

<a id="discussion"></a>

## Discussion

Called when asset posting has completed.

`error` will be `nil` if asset posting was successful and non-`nil` if it was unsuccessful. The view controller won’t be dismissed automatically when this method is called.
