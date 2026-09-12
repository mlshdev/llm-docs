> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovieminder/remove(_:)](https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/remove(_:))

# remove(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Removes a fragmented movie from the array of movies being minded.

## Declaration

```swift
func remove(_ movie: AVFragmentedMovie)
```

## Parameters

- `movie`: The fragmented movie removed from the minder.

## See Also

### Adding and removing movies

- [movies](movies.md): An array containing the fragmented movie objects being minded.
- [add(\_:)](add%28__%29.md): Adds a fragmented movie to the array of movies being minded.

# removeFragmentedMovie: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Removes a fragmented movie from the array of movies being minded.

## Declaration

```objectivec
- (void) removeFragmentedMovie:(AVFragmentedMovie *) movie;
```

## Parameters

- `movie`: The fragmented movie removed from the minder.

## See Also

### Adding and removing movies

- [movies](movies.md): An array containing the fragmented movie objects being minded.
- [addFragmentedMovie:](add%28__%29.md): Adds a fragmented movie to the array of movies being minded.
