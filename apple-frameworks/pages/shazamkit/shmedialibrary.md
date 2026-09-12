> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmedialibrary](https://developer.apple.com/documentation/shazamkit/shmedialibrary)

# SHMediaLibrary (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

An object that represents the user’s Shazam library.

> Use [SHLibrary](shlibrary.md) instead.

## Declaration

```swift
class SHMediaLibrary
```

<a id="overview"></a>

## Overview

Use `SHMediaLibrary` to add matched songs from the Shazam catalog to the user’s Shazam library.

> **Note**

>  There’s no system permission necessary to write to the user’s Shazam library. Consider requesting permission from the user before adding songs to the library.

## Topics

### Adding a matched song to the library

- [default](shmedialibrary/default.md): Deprecated. An instance of the user’s default Shazam library.
- [add(\_:completionHandler:)](shmedialibrary/add%28__completionhandler_%29.md): Deprecated. Adds an array of songs to the user’s Shazam library.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Update the user’s Shazam library

- [SHLibrary](shlibrary.md): An object that represents a user’s synced Shazam library.

# SHMediaLibrary (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

An object that represents the user’s Shazam library.

> Use [SHLibrary](shlibrary.md) instead.

## Declaration

```objectivec
@interface SHMediaLibrary : NSObject
```

<a id="overview"></a>

## Overview

Use `SHMediaLibrary` to add matched songs from the Shazam catalog to the user’s Shazam library.

> **Note**

>  There’s no system permission necessary to write to the user’s Shazam library. Consider requesting permission from the user before adding songs to the library.

## Topics

### Adding a matched song to the library

- [defaultLibrary](shmedialibrary/default.md): Deprecated. An instance of the user’s default Shazam library.
- [addMediaItems:completionHandler:](shmedialibrary/add%28__completionhandler_%29.md): Deprecated. Adds an array of songs to the user’s Shazam library.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
