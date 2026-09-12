> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemovie/setmovieurl(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacemovie/setmovieurl(_:))

# setMovieURL(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the URL of the movie to play.

## Declaration

```swift
func setMovieURL(_ URL: URL)
```

## Parameters

- `URL`: The URL of the movie to play. The URL must be a file-based URL that refers to a movie or audio file in the appropriate format.

  The URL must be in a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

<a id="Discussion"></a>

## Discussion

Movies must be local to the device before playback begins. If you specify a URL that is on a remote server, Apple Watch downloads the movie before playing it.

## See Also

### Setting the Movie Attributes

- [setVideoGravity(\_:)](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
- [setPosterImage(\_:)](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setLoops(\_:)](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.

# setMovieURL: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the URL of the movie to play.

## Declaration

```objectivec
- (void) setMovieURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL of the movie to play. The URL must be a file-based URL that refers to a movie or audio file in the appropriate format.

  The URL must be in a shared location that can be accessed by both the Watch app interface and the WatchKit extension. For more information, see [Sharing Data](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html#//apple_ref/doc/uid/TP40014969-CH29) in [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

<a id="Discussion"></a>

## Discussion

Movies must be local to the device before playback begins. If you specify a URL that is on a remote server, Apple Watch downloads the movie before playing it.

## See Also

### Setting the Movie Attributes

- [setVideoGravity:](setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
- [setPosterImage:](setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setLoops:](setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.
