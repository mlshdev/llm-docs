> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkwatchfacelibrary](https://developer.apple.com/documentation/clockkit/clkwatchfacelibrary)

# CLKWatchFaceLibrary (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.0+

An object for importing watch faces that the app provides.

## Declaration

```swift
class CLKWatchFaceLibrary
```

## Mentioned In

- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

Use a [CLKWatchFaceLibrary](clkwatchfacelibrary.md) object to add an existing .`watchface` file to the Watch app. Add watch faces only on devices that support pairing with an Apple Watch.

## Topics

### Importing a Watch Face

- [addWatchFace(at:completionHandler:)](clkwatchfacelibrary/addwatchface%28at_completionhandler_%29.md): Adds a watch face from the app’s bundle.

### Handling Errors

- [ErrorDomain](clkwatchfacelibrary/errordomain.md): The domain for errors while importing watch faces.
- [CLKWatchFaceLibrary.ErrorCode](clkwatchfacelibrary/errorcode.md): Error codes that the watch face library returns.

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

### Face Sharing

- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md): Distribute a customized watch face to Apple Watch users.

# CLKWatchFaceLibrary (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.0+

An object for importing watch faces that the app provides.

## Declaration

```objectivec
@interface CLKWatchFaceLibrary : NSObject
```

## Mentioned In

- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

Use a [CLKWatchFaceLibrary](clkwatchfacelibrary.md) object to add an existing .`watchface` file to the Watch app. Add watch faces only on devices that support pairing with an Apple Watch.

## Topics

### Importing a Watch Face

- [addWatchFaceAtURL:completionHandler:](clkwatchfacelibrary/addwatchface%28at_completionhandler_%29.md): Adds a watch face from the app’s bundle.

### Handling Errors

- [CLKWatchFaceLibraryErrorDomain](clkwatchfacelibrary/errordomain.md): The domain for errors while importing watch faces.
- [CLKWatchFaceLibraryErrorCode](clkwatchfacelibrary/errorcode.md): Error codes that the watch face library returns.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Face Sharing

- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md): Distribute a customized watch face to Apple Watch users.
