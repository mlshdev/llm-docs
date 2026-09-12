> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceinlinemovie/setloops(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceinlinemovie/setloops(_:))

# setLoops(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets a Boolean value indicating whether the movie plays in a continuous loop.

## Declaration

```swift
func setLoops(_ loops: Bool)
```

## Parameters

- `loops`: A Boolean value indicating the looping behavior. Specify [true](https://developer.apple.com/documentation/swift/true) to play the movie in a continuous loop or [false](https://developer.apple.com/documentation/swift/false) to play the movie once and then stop playback. Defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Movie Properties

- [setAutoplays(\_:)](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setMovieURL(\_:)](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage(\_:)](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setVideoGravity(\_:)](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.

# setLoops: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Sets a Boolean value indicating whether the movie plays in a continuous loop.

## Declaration

```objectivec
- (void) setLoops:(BOOL) loops;
```

## Parameters

- `loops`: A Boolean value indicating the looping behavior. Specify [true](https://developer.apple.com/documentation/swift/true) to play the movie in a continuous loop or [false](https://developer.apple.com/documentation/swift/false) to play the movie once and then stop playback. Defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Movie Properties

- [setAutoplays:](setautoplays%28__%29.md): Sets a Boolean value indicating whether the movie automatically begins playing as soon as the scene is presented.
- [setMovieURL:](setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setPosterImage:](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setVideoGravity:](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
