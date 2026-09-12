> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.protocol/sharedalbumcustomizationviewcontroller(_:didcompletewitherror:)](https://developer.apple.com/documentation/photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.protocol/sharedalbumcustomizationviewcontroller(_:didcompletewitherror:))

# sharedAlbumCustomizationViewController(\_:didCompleteWithError:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func sharedAlbumCustomizationViewController(_ customizationViewController: PHSharedAlbumCustomizationViewController, didCompleteWithError error: (any Error)?)
```

<a id="discussion"></a>

## Discussion

Called when shared album customization completes.

`error` will be `nil` if customization was successful and non-`nil` if it was unsuccessful. The view controller won’t be dismissed automatically when this method is called.

# sharedAlbumCustomizationViewController:didCompleteWithError: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) sharedAlbumCustomizationViewController:(PHSharedAlbumCustomizationViewController *) customizationViewController didCompleteWithError:(NSError *) error;
```

<a id="discussion"></a>

## Discussion

Called when shared album customization completes.

`error` will be `nil` if customization was successful and non-`nil` if it was unsuccessful. The view controller won’t be dismissed automatically when this method is called.
