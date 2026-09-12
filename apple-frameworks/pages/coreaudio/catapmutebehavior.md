> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapmutebehavior](https://developer.apple.com/documentation/coreaudio/catapmutebehavior)

# CATapMuteBehavior (Swift)

**Framework:** Core Audio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+

## Declaration

```swift
enum CATapMuteBehavior
```

<a id="overview"></a>

## Overview

CATapMuteBehavior describes the playback behavior of the process being tapped. The default value is CATapUnmuted.

```
Audio is captured by the tap and also sent to the audio hardware
```

```
Audio is captured by the tap but no audio is sent from the process to the audio hardware
```

```
Audio is captured by the tap and also sent to the audio hardware until the tap is read by another audio client. 
For the duration of the read activity on the tap no audio is sent to the audio hardware.
```

## Topics

### Enumeration Cases

- [CATapMuteBehavior.muted](catapmutebehavior/muted.md)
- [CATapMuteBehavior.mutedWhenTapped](catapmutebehavior/mutedwhentapped.md)
- [CATapMuteBehavior.unmuted](catapmutebehavior/unmuted.md)

### Initializers

- [init(rawValue:)](catapmutebehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [Anonymous](1580748-anonymous.md)
- [Anonymous](1580731-anonymous.md)
- [Anonymous](1580722-anonymous.md)
- [Anonymous](1580720-anonymous.md)
- [Anonymous](1580736-anonymous.md)
- [Anonymous](1580737-anonymous.md)
- [Anonymous](1580746-anonymous.md)
- [Anonymous](1580723-anonymous.md)
- [Anonymous](1580747-anonymous.md)
- [Anonymous](1580749-anonymous.md)
- [Anonymous](1580719-anonymous.md)
- [Anonymous](1580715-anonymous.md)
- [Anonymous](1580740-anonymous.md)
- [Anonymous](1580741-anonymous.md)
- [Anonymous](1580726-anonymous.md)

# CATapMuteBehavior (Objective-C)

**Framework:** Core Audio  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

## Declaration

```objectivec
enum CATapMuteBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

CATapMuteBehavior describes the playback behavior of the process being tapped. The default value is CATapUnmuted.

```
Audio is captured by the tap and also sent to the audio hardware
```

```
Audio is captured by the tap but no audio is sent from the process to the audio hardware
```

```
Audio is captured by the tap and also sent to the audio hardware until the tap is read by another audio client. 
For the duration of the read activity on the tap no audio is sent to the audio hardware.
```

## Topics

### Enumeration Cases

- [CATapMuted](catapmutebehavior/muted.md)
- [CATapMutedWhenTapped](catapmutebehavior/mutedwhentapped.md)
- [CATapUnmuted](catapmutebehavior/unmuted.md)

## See Also

### Enumerations

- [Anonymous](1580748-anonymous.md)
- [Anonymous](1580731-anonymous.md)
- [Anonymous](1580722-anonymous.md)
- [Anonymous](1580720-anonymous.md)
- [Anonymous](1580736-anonymous.md)
- [Anonymous](1580737-anonymous.md)
- [Anonymous](1580746-anonymous.md)
- [Anonymous](1580723-anonymous.md)
- [Anonymous](1580747-anonymous.md)
- [Anonymous](1580749-anonymous.md)
- [Anonymous](1580719-anonymous.md)
- [Anonymous](1580715-anonymous.md)
- [Anonymous](1580740-anonymous.md)
- [Anonymous](1580741-anonymous.md)
- [Anonymous](1580726-anonymous.md)
