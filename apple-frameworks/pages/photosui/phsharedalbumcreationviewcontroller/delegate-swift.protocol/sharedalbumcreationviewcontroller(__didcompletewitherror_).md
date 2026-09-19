> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phsharedalbumcreationviewcontroller/delegate-swift.protocol/sharedalbumcreationviewcontroller(_:didcompletewitherror:)

# sharedAlbumCreationViewController(\_:didCompleteWithError:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func sharedAlbumCreationViewController(_ creationViewController: PHSharedAlbumCreationViewController, didCompleteWithError error: (any Error)?)
```

<a id="discussion"></a>

## Discussion

Called when shared album creation completes.

If creation was successful, `-[PHSharedAlbumCreationViewController albumIdentifier]` will be non-`nil` and `error` will be `nil`. If creation was unsuccessful, `-[PHSharedAlbumCreationViewController albumIdentifier]` will be `nil` and `error` will be non-`nil`. The creation was cancelled by the user, both `-[PHSharedAlbumCreationViewController albumIdentifier]` and `error` will be `nil`. The view controller won’t be dismissed automatically when this method is called.

# sharedAlbumCreationViewController:didCompleteWithError: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) sharedAlbumCreationViewController:(PHSharedAlbumCreationViewController *) creationViewController didCompleteWithError:(NSError *) error;
```

<a id="discussion"></a>

## Discussion

Called when shared album creation completes.

If creation was successful, `-[PHSharedAlbumCreationViewController albumIdentifier]` will be non-`nil` and `error` will be `nil`. If creation was unsuccessful, `-[PHSharedAlbumCreationViewController albumIdentifier]` will be `nil` and `error` will be non-`nil`. The creation was cancelled by the user, both `-[PHSharedAlbumCreationViewController albumIdentifier]` and `error` will be `nil`. The view controller won’t be dismissed automatically when this method is called.
