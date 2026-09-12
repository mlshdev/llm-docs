> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmultipassstorage](https://developer.apple.com/documentation/videotoolbox/vtmultipassstorage)

# VTMultiPassStorage (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An object for storing information for each frame of a multipass compression session.

## Declaration

```swift
class VTMultiPassStorage
```

<a id="overview"></a>

## Overview

The multipass storage object is a reference-counted CoreFoundation (CF) type. The data stored in the multipass storage object is private to the video encoder.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# VTMultiPassStorageRef (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An object for storing information for each frame of a multipass compression session.

## Declaration

```objectivec
typedef struct OpaqueVTMultiPassStorage * VTMultiPassStorageRef;
```

<a id="overview"></a>

## Overview

The multipass storage object is a reference-counted CoreFoundation (CF) type. The data stored in the multipass storage object is private to the video encoder.
