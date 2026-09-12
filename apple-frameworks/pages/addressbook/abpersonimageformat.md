> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonimageformat](https://developer.apple.com/documentation/addressbook/abpersonimageformat)

# ABPersonImageFormat (Swift)

**Framework:** Address Book  
**Kind:** Structure  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Indicates an image format.

## Declaration

```swift
struct ABPersonImageFormat
```

<a id="overview"></a>

## Overview

See `Image Format`.

## Topics

### Constants

- [init(\_:)](abpersonimageformat/init%28__%29.md): Deprecated. Initializes an image format with an integer value.
- [init(rawValue:)](abpersonimageformat/init%28rawvalue_%29.md): Deprecated. Initializes an image format with a raw integer value.

### Instance Properties

- [rawValue](abpersonimageformat/rawvalue.md): Deprecated. The raw value of an image format.
- [kABPersonImageFormatOriginalSize](kabpersonimageformatoriginalsize.md): The image at its original size and shape.
- [kABPersonImageFormatThumbnail](kabpersonimageformatthumbnail.md): The small square thumbnail.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Deprecated

- [ABAuthorizationStatus](abauthorizationstatus.md): Deprecated. Different possible values for the authorization status of an app with respect to address book data.

# ABPersonImageFormat (Objective-C)

**Framework:** Address Book  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Indicates an image format.

## Declaration

```objectivec
typedef enum { ... } ABPersonImageFormat;
```

<a id="overview"></a>

## Overview

See `Image Format`.

## Topics

### Instance Properties

- [kABPersonImageFormatOriginalSize](kabpersonimageformatoriginalsize.md): The image at its original size and shape.
- [kABPersonImageFormatThumbnail](kabpersonimageformatthumbnail.md): The small square thumbnail.

## See Also

### Deprecated

- [ABAuthorizationStatus](abauthorizationstatus.md): Deprecated. Different possible values for the authorization status of an app with respect to address book data.
