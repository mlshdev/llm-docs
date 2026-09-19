> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.property

# delegate (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The delegate to respond to `PHSharedAlbumPostingViewController` events.

## Declaration

```swift
weak var delegate: (any PHSharedAlbumPostingViewController.Delegate)? { get set }
```

# delegate (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The delegate to respond to `PHSharedAlbumPostingViewController` events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PHSharedAlbumPostingViewControllerDelegate> delegate;
```
