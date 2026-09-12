> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/removekeyword(_:)](https://developer.apple.com/documentation/photos/phassetchangerequest/removekeyword(_:))

# removeKeyword(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func removeKeyword(_ keyword: String)
```

## See Also

### Modifying Assets

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](location.md): The location information saved with the asset.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [isHidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword(\_:)](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled(\_:)](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)

# removeKeyword: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) removeKeyword:(NSString *) keyword;
```

## See Also

### Modifying Assets

- [changeRequestForAsset:](init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](location.md): The location information saved with the asset.
- [favorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [hidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword:](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled:](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)
