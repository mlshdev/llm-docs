> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovieminder/fragmentedmovieminderwithmovie:mindinginterval:](https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/fragmentedmovieminderwithmovie:mindinginterval:)

# fragmentedMovieMinderWithMovie:mindingInterval:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie minder and adds a movie with a minding interval.

## Declaration

```objectivec
+ (instancetype) fragmentedMovieMinderWithMovie:(AVFragmentedMovie *) movie mindingInterval:(NSTimeInterval) mindingInterval;
```

## Parameters

- `movie`: The fragmented movie object added to the movie minder.
- `mindingInterval`: The initial minding interval for the movie minder.

<a id="return-value"></a>

## Return Value

A new `AVFragmentedMovieMinder` instance.

## See Also

### Creating a movie minder

- [initWithMovie:mindingInterval:](init%28movie_mindinginterval_%29.md): Creates a movie minder and adds a movie with a minding interval.
