> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplannerprogress/overallprogress](https://developer.apple.com/documentation/avfoundation/avassetwritingplannerprogress/overallprogress)

# overallProgress (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The overall progress across all tracks.

## Declaration

```swift
var overallProgress: Float { get }
```

<a id="discussion"></a>

## Discussion

Returns a float value between 0.0 and 1.0 representing the overall progress. This is calculated as the average progress of all tracks weighted by their durations.

## See Also

### Getting progress

- [progress(forTrack:)](progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.
- [progress(forTrack:)](progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.

# overallProgress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The overall progress across all tracks.

## Declaration

```objectivec
@property (readonly) float overallProgress;
```

<a id="discussion"></a>

## Discussion

Returns a float value between 0.0 and 1.0 representing the overall progress. This is calculated as the average progress of all tracks weighted by their durations.

## See Also

### Getting progress

- [progressForTrack:](progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.
- [progressForTrack:](progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.
