> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmedialibrary/default](https://developer.apple.com/documentation/shazamkit/shmedialibrary/default)

# default (Swift)

**Framework:** ShazamKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

An instance of the user’s default Shazam library.

> Use SHLibrary instead

## Declaration

```swift
class var `default`: SHMediaLibrary { get }
```

## See Also

### Adding a matched song to the library

- [add(\_:completionHandler:)](add%28__completionhandler_%29.md): Deprecated. Adds an array of songs to the user’s Shazam library.

# defaultLibrary (Objective-C)

**Framework:** ShazamKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

An instance of the user’s default Shazam library.

> Use SHLibrary instead

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) SHMediaLibrary * defaultLibrary;
```

```objectivec
@property (class, atomic, strong, readonly) SHMediaLibrary * defaultLibrary;
```

## See Also

### Adding a matched song to the library

- [addMediaItems:completionHandler:](add%28__completionhandler_%29.md): Deprecated. Adds an array of songs to the user’s Shazam library.
