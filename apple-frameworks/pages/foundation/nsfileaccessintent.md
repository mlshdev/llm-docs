> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileaccessintent](https://developer.apple.com/documentation/foundation/nsfileaccessintent)

# NSFileAccessIntent (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The details of a coordinated-read or coordinated-write operation.

## Declaration

```swift
class NSFileAccessIntent
```

<a id="overview"></a>

## Overview

Use this class when performing asynchronous operations with a file coordinator using the coordinator’s [coordinate(with:queue:byAccessor:)](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method.

## Topics

### Creating a File Access Intent

- [readingIntent(with:options:)](nsfileaccessintent/readingintent%28with_options_%29.md): Returns a file access intent object for reading the given URL with the provided options.
- [writingIntent(with:options:)](nsfileaccessintent/writingintent%28with_options_%29.md): Returns a file access intent object for writing to the given URL with the provided options.

### Accessing the Current URL

- [url](nsfileaccessintent/url.md): The current URL for the item managed by the file access intent instance. (read-only)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Coordinated file access

- [NSFilePresenter](nsfilepresenter.md): The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
- [NSFileCoordinator](nsfilecoordinator.md): An object that coordinates the reading and writing of files and directories among file presenters.

# NSFileAccessIntent (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The details of a coordinated-read or coordinated-write operation.

## Declaration

```objectivec
@interface NSFileAccessIntent : NSObject
```

<a id="overview"></a>

## Overview

Use this class when performing asynchronous operations with a file coordinator using the coordinator’s [coordinateAccessWithIntents:queue:byAccessor:](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method.

## Topics

### Creating a File Access Intent

- [readingIntentWithURL:options:](nsfileaccessintent/readingintent%28with_options_%29.md): Returns a file access intent object for reading the given URL with the provided options.
- [writingIntentWithURL:options:](nsfileaccessintent/writingintent%28with_options_%29.md): Returns a file access intent object for writing to the given URL with the provided options.

### Accessing the Current URL

- [URL](nsfileaccessintent/url.md): The current URL for the item managed by the file access intent instance. (read-only)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Coordinated file access

- [NSFilePresenter](nsfilepresenter.md): The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
- [NSFileCoordinator](nsfilecoordinator.md): An object that coordinates the reading and writing of files and directories among file presenters.
