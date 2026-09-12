> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcestatus](https://developer.apple.com/documentation/imageio/cgimagesourcestatus)

# CGImageSourceStatus (Swift)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of status values for images and image sources.

## Declaration

```swift
enum CGImageSourceStatus
```

<a id="overview"></a>

## Overview

The [CGImageSourceGetStatus(\_:)](cgimagesourcegetstatus%28__%29.md) and [CGImageSourceGetStatusAtIndex(\_:\_:)](cgimagesourcegetstatusatindex%28____%29.md) functions return these values.

## Topics

### Status Values

- [CGImageSourceStatus.statusUnexpectedEOF](cgimagesourcestatus/statusunexpectedeof.md): The end of the file occurred unexpectedly.
- [CGImageSourceStatus.statusInvalidData](cgimagesourcestatus/statusinvaliddata.md): The data is not valid.
- [CGImageSourceStatus.statusUnknownType](cgimagesourcestatus/statusunknowntype.md): The image is an unknown type.
- [CGImageSourceStatus.statusReadingHeader](cgimagesourcestatus/statusreadingheader.md): The image source is reading the header.
- [CGImageSourceStatus.statusIncomplete](cgimagesourcestatus/statusincomplete.md): The operation is not complete
- [CGImageSourceStatus.statusComplete](cgimagesourcestatus/statuscomplete.md): The operation is complete.

### Initializers

- [init(rawValue:)](cgimagesourcestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Image Status

- [CGImageSourceGetStatus(\_:)](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceGetStatusAtIndex(\_:\_:)](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.

# CGImageSourceStatus (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of status values for images and image sources.

## Declaration

```objectivec
enum CGImageSourceStatus : int32_t;
```

<a id="overview"></a>

## Overview

The [CGImageSourceGetStatus](cgimagesourcegetstatus%28__%29.md) and [CGImageSourceGetStatusAtIndex](cgimagesourcegetstatusatindex%28____%29.md) functions return these values.

## Topics

### Status Values

- [kCGImageStatusUnexpectedEOF](cgimagesourcestatus/statusunexpectedeof.md): The end of the file occurred unexpectedly.
- [kCGImageStatusInvalidData](cgimagesourcestatus/statusinvaliddata.md): The data is not valid.
- [kCGImageStatusUnknownType](cgimagesourcestatus/statusunknowntype.md): The image is an unknown type.
- [kCGImageStatusReadingHeader](cgimagesourcestatus/statusreadingheader.md): The image source is reading the header.
- [kCGImageStatusIncomplete](cgimagesourcestatus/statusincomplete.md): The operation is not complete
- [kCGImageStatusComplete](cgimagesourcestatus/statuscomplete.md): The operation is complete.

## See Also

### Getting the Image Status

- [CGImageSourceGetStatus](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceGetStatusAtIndex](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.
