> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileasset/artist](https://developer.apple.com/documentation/watchkit/wkaudiofileasset/artist)

# artist (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The artist information for the audio file.

## Declaration

```swift
var artist: String? { get }
```

<a id="Discussion"></a>

## Discussion

If you do not set the artist name directly at initialization time, the asset object obtains the information from the audio file’s metadata.

## See Also

### Getting the Asset’s Properties

- [url](url.md): Deprecated. The URL of the audio file.
- [duration](duration.md): Deprecated. The duration (in seconds) of the audio file.
- [title](title.md): Deprecated. The title information for the audio file.
- [albumTitle](albumtitle.md): Deprecated. The album title information for the audio file.

# artist (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The artist information for the audio file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * artist;
```

<a id="Discussion"></a>

## Discussion

If you do not set the artist name directly at initialization time, the asset object obtains the information from the audio file’s metadata.

## See Also

### Getting the Asset’s Properties

- [URL](url.md): Deprecated. The URL of the audio file.
- [duration](duration.md): Deprecated. The duration (in seconds) of the audio file.
- [title](title.md): Deprecated. The title information for the audio file.
- [albumTitle](albumtitle.md): Deprecated. The album title information for the audio file.
