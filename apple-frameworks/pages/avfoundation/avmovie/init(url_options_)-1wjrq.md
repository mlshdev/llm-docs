> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/init(url:options:)-1wjrq](https://developer.apple.com/documentation/avfoundation/avmovie/init(url:options:)-1wjrq)

# init(url:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.

## Declaration

```swift
init(url URL: URL, options: [String : Any]? = nil)
```

## Parameters

- `URL`: A URL that points to a file containing a movie header.
- `options`: A dictionary of options to use to initialize the movie.

<a id="Discussion"></a>

## Discussion

Upon creation, the values of the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmovietrack/mediadatastorage.md) properties are `nil`.

## See Also

### Creating a movie

- [init(url:)](init%28url_%29.md): Creates a movie that models the media at the specified URL.
- [init(data:options:)](init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](../initialization-options.md): Specify options to configure the initialization of a movie.

# initWithURL:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: A URL that points to a file containing a movie header.
- `options`: A dictionary of options to use to initialize the movie.

<a id="Discussion"></a>

## Discussion

Upon creation, the values of the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmovietrack/mediadatastorage.md) properties are `nil`.

## See Also

### Creating a movie

- [movieWithURL:options:](moviewithurl_options_.md): Returns a new movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:](moviewithdata_options_.md): Returns a new movie object from a movie file’s data.
- [initWithData:options:](init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](../initialization-options.md): Specify options to configure the initialization of a movie.
