> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvbuffermovietimekey](https://developer.apple.com/documentation/corevideo/kcvbuffermovietimekey)

# kCVBufferMovieTimeKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The movie time associated with the buffer. Generally only available for frames emitted by QuickTime (type `CFDictionary` containing the [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md) and [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md) keys).

## Declaration

```swift
let kCVBufferMovieTimeKey: CFString
```

## See Also

### Constants

- [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md): The time value associated with the movie.
- [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md): The time scale associated with the movie.

# kCVBufferMovieTimeKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The movie time associated with the buffer. Generally only available for frames emitted by QuickTime (type `CFDictionary` containing the [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md) and [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md) keys).

## Declaration

```objectivec
extern CFStringRef const kCVBufferMovieTimeKey;
```

## See Also

### Constants

- [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md): The time value associated with the movie.
- [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md): The time scale associated with the movie.
