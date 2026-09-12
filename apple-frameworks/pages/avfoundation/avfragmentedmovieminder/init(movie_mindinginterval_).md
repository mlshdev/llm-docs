> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovieminder/init(movie:mindinginterval:)](https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/init(movie:mindinginterval:))

# init(movie:mindingInterval:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie minder and adds a movie with a minding interval.

## Declaration

```swift
init(movie: AVFragmentedMovie, mindingInterval: TimeInterval)
```

## Parameters

- `movie`: The fragmented movie object added to the movie minder.
- `mindingInterval`: The initial minding interval for the movie minder.

<a id="return-value"></a>

## Return Value

A new `AVFragmentedMovieMinder` instance.

# initWithMovie:mindingInterval: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie minder and adds a movie with a minding interval.

## Declaration

```objectivec
- (instancetype) initWithMovie:(AVFragmentedMovie *) movie mindingInterval:(NSTimeInterval) mindingInterval;
```

## Parameters

- `movie`: The fragmented movie object added to the movie minder.
- `mindingInterval`: The initial minding interval for the movie minder.

<a id="return-value"></a>

## Return Value

A new `AVFragmentedMovieMinder` instance.

## See Also

### Creating a movie minder

- [fragmentedMovieMinderWithMovie:mindingInterval:](fragmentedmovieminderwithmovie_mindinginterval_.md): Creates a movie minder and adds a movie with a minding interval.
