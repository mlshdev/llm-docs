> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceinlinemovie/setautoplays(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceinlinemovie/setautoplays(_:))

# setAutoplays(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.

## Declaration

```swift
func setAutoplays(_ autoplays: Bool)
```

## Parameters

- `autoplays`: A Boolean value indicating the movie’s autoplay behavior. Specify [true](https://developer.apple.com/documentation/swift/true) to have the movie automatically play as soon as the scene is presented. If set to [false](https://developer.apple.com/documentation/swift/false), the inline movie object displays the poster image instead. The movie does not begin playing until the user taps the poster, or until you programmatically call either the [play()](play%28%29.md) or [playFromBeginning()](playfrombeginning%28%29.md) method. Defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Movie Properties

- [setLoops(\_:)](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL(\_:)](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage(\_:)](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setVideoGravity(\_:)](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.

# setAutoplays: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.

## Declaration

```objectivec
- (void) setAutoplays:(BOOL) autoplays;
```

## Parameters

- `autoplays`: A Boolean value indicating the movie’s autoplay behavior. Specify [true](https://developer.apple.com/documentation/swift/true) to have the movie automatically play as soon as the scene is presented. If set to [false](https://developer.apple.com/documentation/swift/false), the inline movie object displays the poster image instead. The movie does not begin playing until the user taps the poster, or until you programmatically call either the [play](play%28%29.md) or [playFromBeginning](playfrombeginning%28%29.md) method. Defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Movie Properties

- [setLoops:](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
- [setMovieURL:](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage:](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setVideoGravity:](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
