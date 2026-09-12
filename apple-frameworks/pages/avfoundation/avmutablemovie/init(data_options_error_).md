> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/init(data:options:error:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/init(data:options:error:))

# init(data:options:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a mutable movie object from a movie stored in a data object.

## Declaration

```swift
init(data: Data, options: [String : Any]? = nil, error: ()) throws
```

## Parameters

- `data`: An `NSData` object that contains a movie header.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.

<a id="return-value"></a>

## Return Value

An `AVMutableMovie` object.

<a id="Discussion"></a>

## Discussion

On initialization, the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmutablemovietrack/mediadatastorage.md) properties are set to `nil`. To create an `AVMutableMovie` from a file and then append sample buffers to any of its tracks, you must first set one of these properties to indicate where the sample data should be written.

Use this method to create movies from movie headers that are not stored in files, which can include movies on the pasteboard.

## See Also

### Creating a movie

- [init(url:options:error:)](init%28url_options_error_%29-8rnnj.md): Creates a mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [init(settingsFrom:options:)](init%28settingsfrom_options_%29.md): Creates a mutable movie object without tracks.

# initWithData:options:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a mutable movie object from a movie stored in a data object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options error:(NSError **) outError;
```

## Parameters

- `data`: An `NSData` object that contains a movie header.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.
- `outError`: A description of the error that occurred. Default value is `nil`.

<a id="return-value"></a>

## Return Value

An `AVMutableMovie` object.

<a id="Discussion"></a>

## Discussion

On initialization, the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmutablemovietrack/mediadatastorage.md) properties are set to `nil`. To create an `AVMutableMovie` from a file and then append sample buffers to any of its tracks, you must first set one of these properties to indicate where the sample data should be written.

Use this method to create movies from movie headers that are not stored in files, which can include movies on the pasteboard.

## See Also

### Creating a movie

- [movieWithURL:options:error:](moviewithurl_options_error_.md): Returns a new mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithURL:options:error:](init%28url_options_error_%29-8rnnj.md): Creates a mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:error:](moviewithdata_options_error_.md): Returns a new mutable movie object from a movie stored in a data object.
- [movieWithSettingsFromMovie:options:error:](moviewithsettingsfrommovie_options_error_.md): Returns a new mutable movie object without tracks.
- [initWithSettingsFromMovie:options:error:](init%28settingsfrom_options_%29.md): Creates a mutable movie object without tracks.
