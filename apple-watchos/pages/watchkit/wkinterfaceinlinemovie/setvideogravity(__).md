> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceinlinemovie/setvideogravity(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceinlinemovie/setvideogravity(_:))

# setVideoGravity(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets the resizing behavior for the movie content.

## Declaration

```swift
func setVideoGravity(_ videoGravity: WKVideoGravity)
```

## Parameters

- `videoGravity`: The resizing option for the movie. For a list of possible values, see the [WKVideoGravity](../wkvideogravity.md) type. Defaults to [WKVideoGravity.resizeAspect](../wkvideogravity/resizeaspect.md).

## See Also

### Setting Movie Properties

- [setAutoplays(\_:)](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setLoops(\_:)](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL(\_:)](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage(\_:)](setposterimage%28__%29.md): Sets the poster image to display for the movie.

# setVideoGravity: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets the resizing behavior for the movie content.

## Declaration

```objectivec
- (void) setVideoGravity:(WKVideoGravity) videoGravity;
```

## Parameters

- `videoGravity`: The resizing option for the movie. For a list of possible values, see the [WKVideoGravity](../wkvideogravity.md) type. Defaults to [WKVideoGravityResizeAspect](../wkvideogravity/resizeaspect.md).

## See Also

### Setting Movie Properties

- [setAutoplays:](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setLoops:](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL:](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage:](setposterimage%28__%29.md): Sets the poster image to display for the movie.
