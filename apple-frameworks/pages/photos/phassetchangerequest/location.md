> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/location](https://developer.apple.com/documentation/photos/phassetchangerequest/location)

# location (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The location information saved with the asset.

## Declaration

```swift
var location: CLLocation? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured. Use this property to provide a different location.

## See Also

### Modifying Assets

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [isHidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword(\_:)](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword(\_:)](removekeyword%28__%29.md)
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled(\_:)](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)

# location (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The location information saved with the asset.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured. Use this property to provide a different location.

## See Also

### Modifying Assets

- [changeRequestForAsset:](init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [favorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [hidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword:](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword:](removekeyword%28__%29.md)
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled:](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)
