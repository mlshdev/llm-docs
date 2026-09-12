> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceinlinemovie/setposterimage(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceinlinemovie/setposterimage(_:))

# setPosterImage(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets the poster image to display for the movie.

## Declaration

```swift
func setPosterImage(_ posterImage: WKImage?)
```

## Parameters

- `posterImage`: The image to be displayed. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

This method changes the poster image that is displayed for the movie.

## See Also

### Setting Movie Properties

- [setAutoplays(\_:)](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setLoops(\_:)](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL(\_:)](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setVideoGravity(\_:)](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.

# setPosterImage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets the poster image to display for the movie.

## Declaration

```objectivec
- (void) setPosterImage:(WKImage *) posterImage;
```

## Parameters

- `posterImage`: The image to be displayed. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

This method changes the poster image that is displayed for the movie.

## See Also

### Setting Movie Properties

- [setAutoplays:](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setLoops:](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL:](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setVideoGravity:](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
