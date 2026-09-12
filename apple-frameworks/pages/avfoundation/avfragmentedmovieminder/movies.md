> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovieminder/movies](https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/movies)

# movies (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An array containing the fragmented movie objects being minded.

## Declaration

```swift
var movies: [AVFragmentedMovie] { get }
```

## See Also

### Adding and removing movies

- [add(\_:)](add%28__%29.md): Adds a fragmented movie to the array of movies being minded.
- [remove(\_:)](remove%28__%29.md): Removes a fragmented movie from the array of movies being minded.

# movies (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An array containing the fragmented movie objects being minded.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVFragmentedMovie *> * movies;
```

## See Also

### Adding and removing movies

- [addFragmentedMovie:](add%28__%29.md): Adds a fragmented movie to the array of movies being minded.
- [removeFragmentedMovie:](remove%28__%29.md): Removes a fragmented movie from the array of movies being minded.
