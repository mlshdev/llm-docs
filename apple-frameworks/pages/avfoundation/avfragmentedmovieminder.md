> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovieminder](https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder)

# AVFragmentedMovieMinder (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that checks whether a fragmented movie appends additional movie fragments.

## Declaration

```swift
class AVFragmentedMovieMinder
```

<a id="overview"></a>

## Overview

This class is identical to [AVFragmentedAssetMinder](avfragmentedassetminder.md) except that it’s capable of minding only assets of type [AVFragmentedMovie](avfragmentedmovie.md).

## Topics

### Creating a movie minder

- [init(movie:mindingInterval:)](avfragmentedmovieminder/init%28movie_mindinginterval_%29.md): Creates a movie minder and adds a movie with a minding interval.

### Adding and removing movies

- [movies](avfragmentedmovieminder/movies.md): An array containing the fragmented movie objects being minded.
- [add(\_:)](avfragmentedmovieminder/add%28__%29.md): Adds a fragmented movie to the array of movies being minded.
- [remove(\_:)](avfragmentedmovieminder/remove%28__%29.md): Removes a fragmented movie from the array of movies being minded.

### Accessing minder information

- [mindingInterval](avfragmentedmovieminder/mindinginterval.md): The amount of time between checks for additional movie fragments.

## Relationships

### Inherits From

- [AVFragmentedAssetMinder](avfragmentedassetminder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fragmented movies

- [AVFragmentedMovie](avfragmentedmovie.md): An object that represents a fragmented movie file.
- [AVFragmentedMovieTrack](avfragmentedmovietrack.md): An object that represents a track in a fragmented movie.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

# AVFragmentedMovieMinder (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that checks whether a fragmented movie appends additional movie fragments.

## Declaration

```objectivec
@interface AVFragmentedMovieMinder : AVFragmentedAssetMinder
```

<a id="overview"></a>

## Overview

This class is identical to [AVFragmentedAssetMinder](avfragmentedassetminder.md) except that it’s capable of minding only assets of type [AVFragmentedMovie](avfragmentedmovie.md).

## Topics

### Creating a movie minder

- [initWithMovie:mindingInterval:](avfragmentedmovieminder/init%28movie_mindinginterval_%29.md): Creates a movie minder and adds a movie with a minding interval.
- [fragmentedMovieMinderWithMovie:mindingInterval:](avfragmentedmovieminder/fragmentedmovieminderwithmovie_mindinginterval_.md): Creates a movie minder and adds a movie with a minding interval.

### Adding and removing movies

- [movies](avfragmentedmovieminder/movies.md): An array containing the fragmented movie objects being minded.
- [addFragmentedMovie:](avfragmentedmovieminder/add%28__%29.md): Adds a fragmented movie to the array of movies being minded.
- [removeFragmentedMovie:](avfragmentedmovieminder/remove%28__%29.md): Removes a fragmented movie from the array of movies being minded.

### Accessing minder information

- [mindingInterval](avfragmentedmovieminder/mindinginterval.md): The amount of time between checks for additional movie fragments.

## Relationships

### Inherits From

- [AVFragmentedAssetMinder](avfragmentedassetminder.md)

## See Also

### Fragmented movies

- [AVFragmentedMovie](avfragmentedmovie.md): An object that represents a fragmented movie file.
- [AVFragmentedMovieTrack](avfragmentedmovietrack.md): An object that represents a track in a fragmented movie.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.
