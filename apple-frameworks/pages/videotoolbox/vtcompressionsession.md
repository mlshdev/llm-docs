> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsession](https://developer.apple.com/documentation/videotoolbox/vtcompressionsession)

# VTCompressionSession (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A reference to a VideoToolbox compression session.

## Declaration

```swift
class VTCompressionSession
```

<a id="overview"></a>

## Overview

A compression session supports the compression of a sequence of video frames. The session is a reference-counted CoreFoundation (CF) object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [VTEncodeInfoFlags](vtencodeinfoflags.md): Flags that indicate encoder state.

# VTCompressionSessionRef (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A reference to a VideoToolbox compression session.

## Declaration

```objectivec
typedef struct OpaqueVTCompressionSession * VTCompressionSessionRef;
```

<a id="overview"></a>

## Overview

A compression session supports the compression of a sequence of video frames. The session is a reference-counted CoreFoundation (CF) object.

## See Also

### Data Types

- [VTEncodeInfoFlags](vtencodeinfoflags.md): Flags that indicate encoder state.
