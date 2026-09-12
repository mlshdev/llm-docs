> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/moviewithurl:options:](https://developer.apple.com/documentation/avfoundation/avmovie/moviewithurl:options:)

# movieWithURL:options:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Returns a new movie object from a movie header stored in a QuickTime movie file of ISO base media file.

## Declaration

```objectivec
+ (instancetype) movieWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: A URL that points to a file containing a movie header.
- `options`: A dictionary of initialization options with which to create the movie.

<a id="return-value"></a>

## Return Value

A movie object.

<a id="Discussion"></a>

## Discussion

Upon creation, the values of the [defaultMediaDataStorage](defaultmediadatastorage.md) property and any associated [mediaDataStorage](../avmovietrack/mediadatastorage.md) properties are `nil`.

## See Also

### Creating a movie

- [initWithURL:options:](init%28url_options_%29-1wjrq.md): Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:](moviewithdata_options_.md): Returns a new movie object from a movie file’s data.
- [initWithData:options:](init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](../initialization-options.md): Specify options to configure the initialization of a movie.
