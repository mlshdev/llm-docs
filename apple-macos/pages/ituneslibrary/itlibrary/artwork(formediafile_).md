> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/artwork(formediafile:)](https://developer.apple.com/documentation/ituneslibrary/itlibrary/artwork(formediafile:))

# artwork(forMediaFile:) (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Retrieves the artwork from a media file that may or may not be in the iTunes library.

## Declaration

```swift
func artwork(forMediaFile mediaFileURL: URL) -> ITLibArtwork?
```

## Parameters

- `mediaFileURL`: The URL of the media file whose artwork you want to retrieve. The media file may or may not be in the iTunes library.

<a id="return-value"></a>

## Return Value

An [ITLibArtwork](../itlibartwork.md) instance representing the media file artwork, or `nil` if the media file doesn’t contain any artwork or the system can’t extract the artwork.

# artworkForMediaFile: (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Retrieves the artwork from a media file that may or may not be in the iTunes library.

## Declaration

```objectivec
- (ITLibArtwork *) artworkForMediaFile:(NSURL *) mediaFileURL;
```

## Parameters

- `mediaFileURL`: The URL of the media file whose artwork you want to retrieve. The media file may or may not be in the iTunes library.

<a id="return-value"></a>

## Return Value

An [ITLibArtwork](../itlibartwork.md) instance representing the media file artwork, or `nil` if the media file doesn’t contain any artwork or the system can’t extract the artwork.
