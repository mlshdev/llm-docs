> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/moviewithdata:options:](https://developer.apple.com/documentation/avfoundation/avmovie/moviewithdata:options:)

# movieWithData:options:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a new movie object from a movie file’s data.

## Declaration

```objectivec
+ (instancetype) movieWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `data`: A data object that contains a movie header.
- `options`: A dictionary of options to use to initialize the movie.

<a id="return-value"></a>

## Return Value

A movie object.

<a id="Discussion"></a>

## Discussion

Use this method to create movies from movie headers that aren’t stored in files, which can include movies that the pasteboard contains.

## See Also

### Creating a movie

- [movieWithURL:options:](moviewithurl_options_.md): Returns a new movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithURL:options:](init%28url_options_%29-1wjrq.md): Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithData:options:](init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](../initialization-options.md): Specify options to configure the initialization of a movie.
