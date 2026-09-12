> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovieshouldsupportaliasdatareferenceskey](https://developer.apple.com/documentation/avfoundation/avmovieshouldsupportaliasdatareferenceskey)

# AVMovieShouldSupportAliasDataReferencesKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A key that specifies a Boolean value that indicates whether the system parses and resolves alias data references in the movie.

> AVMovieShouldSupportAliasDataReferencesKey is not supported on this platform

## Declaration

```swift
let AVMovieShouldSupportAliasDataReferencesKey: String
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Most QuickTime movie files contain all of the media data they require, but some contain references to media stored in other files. While AVFoundation and CoreMedia typically use a URL reference for this purpose, older implementations such as QuickTime 7 have commonly used a Macintosh alias instead, as documented in the QuickTime File Format specification. If your app must work with legacy QuickTime movie files containing alias-based references to media data stored in other files, set this value to [true](https://developer.apple.com/documentation/swift/true).

If you provide a value for [AVMovieReferenceRestrictionsKey](avmoviereferencerestrictionskey.md), the movie observes these restrictions for resolved alias references just as they’re for URL references.

## See Also

### Options

- [AVMovieReferenceRestrictionsKey](avmoviereferencerestrictionskey.md): A key that specifies restrictions for a movie to use when it resolves references to external media data.

# AVMovieShouldSupportAliasDataReferencesKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A key that specifies a Boolean value that indicates whether the system parses and resolves alias data references in the movie.

> AVMovieShouldSupportAliasDataReferencesKey is not supported on this platform

## Declaration

```objectivec
extern NSString * const AVMovieShouldSupportAliasDataReferencesKey;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Most QuickTime movie files contain all of the media data they require, but some contain references to media stored in other files. While AVFoundation and CoreMedia typically use a URL reference for this purpose, older implementations such as QuickTime 7 have commonly used a Macintosh alias instead, as documented in the QuickTime File Format specification. If your app must work with legacy QuickTime movie files containing alias-based references to media data stored in other files, set this value to [true](https://developer.apple.com/documentation/swift/true).

If you provide a value for [AVMovieReferenceRestrictionsKey](avmoviereferencerestrictionskey.md), the movie observes these restrictions for resolved alias references just as they’re for URL references.

## See Also

### Options

- [AVMovieReferenceRestrictionsKey](avmoviereferencerestrictionskey.md): A key that specifies restrictions for a movie to use when it resolves references to external media data.
