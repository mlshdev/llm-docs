> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasyncproperty](https://developer.apple.com/documentation/avfoundation/avasyncproperty)

# AVAsyncProperty

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous property that constrains its type and value.

## Declaration

```swift
class AVAsyncProperty<Root, Value>
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)

<a id="overview"></a>

## Overview

This class subclasses [AVPartialAsyncProperty](avpartialasyncproperty.md) to provide a type constraint on the property value.

## Topics

### Accessing the status

- [AVAsyncProperty.Status](avasyncproperty/status.md): Loaded status values for asynchronous properties.

## Relationships

### Inherits From

- [AVPartialAsyncProperty](avpartialasyncproperty.md)

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Property loading

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md): A protocol that defines the interface to load media data asynchronously.
- [AVPartialAsyncProperty](avpartialasyncproperty.md): An asynchronous property that constrains its type.
- [AVAnyAsyncProperty](avanyasyncproperty.md): A base class for asynchronous properties.
