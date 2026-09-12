> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistcreationmetadata/authordisplayname](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistcreationmetadata/authordisplayname)

# authorDisplayName (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

App defined display name for the playlist.

## Declaration

```swift
var authorDisplayName: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The system requires this property for 3rd party apps. Defaults to the app display name when not defined.

## See Also

### Metadata for a playlist

- [descriptionText](descriptiontext.md): The descriptive text for the playlist.
- [name](name.md): The playlist’s displayed name.

# authorDisplayName (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

App defined display name for the playlist.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSString * authorDisplayName;
```

<a id="Discussion"></a>

## Discussion

The system requires this property for 3rd party apps. Defaults to the app display name when not defined.

## See Also

### Metadata for a playlist

- [descriptionText](descriptiontext.md): The descriptive text for the playlist.
- [name](name.md): The playlist’s displayed name.
