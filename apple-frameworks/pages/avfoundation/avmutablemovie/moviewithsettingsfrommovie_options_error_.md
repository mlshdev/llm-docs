> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/moviewithsettingsfrommovie:options:error:](https://developer.apple.com/documentation/avfoundation/avmutablemovie/moviewithsettingsfrommovie:options:error:)

# movieWithSettingsFromMovie:options:error:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a new mutable movie object without tracks.

## Declaration

```objectivec
+ (instancetype) movieWithSettingsFromMovie:(AVMovie *) movie options:(NSDictionary<NSString *,id> *) options error:(NSError **) outError;
```

## Parameters

- `movie`: An [AVMovie](../avmovie.md) object containing settings from an existing movie.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.
- `outError`: A description of the error that occurred. Default value is `nil`.

<a id="return-value"></a>

## Return Value

An `AVMutableMovie` object.

<a id="Discussion"></a>

## Discussion

On initialization, the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmutablemovietrack/mediadatastorage.md) properties are set to `nil`. To create an `AVMutableMovie` from a file and then append sample buffers to any of its tracks, you must first set one of these properties to indicate where the sample data should be written.

## See Also

### Creating a movie

- [movieWithURL:options:error:](moviewithurl_options_error_.md): Returns a new mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithURL:options:error:](init%28url_options_error_%29-8rnnj.md): Creates a mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:error:](moviewithdata_options_error_.md): Returns a new mutable movie object from a movie stored in a data object.
- [initWithData:options:error:](init%28data_options_error_%29.md): Creates a mutable movie object from a movie stored in a data object.
- [initWithSettingsFromMovie:options:error:](init%28settingsfrom_options_%29.md): Creates a mutable movie object without tracks.
