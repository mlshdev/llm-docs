> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/videoproperties-swift.struct](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/videoproperties-swift.struct)

# AVPlaybackUserInterfaceContentMetadata.VideoProperties

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Properties specific to video content.

## Declaration

```swift
struct VideoProperties
```

<a id="overview"></a>

## Overview

The presence of a `VideoProperties` instance indicates the content contains video. Use [AVPlaybackUserInterfaceContentMetadata.VideoProperties](videoproperties-swift.struct.md) to provide the natural presentation size for video content.

## Topics

### Initializers

- [init(presentationSize:)](videoproperties-swift.struct/init%28presentationsize_%29.md): Creates a new video properties instance.

### Instance Properties

- [presentationSize](videoproperties-swift.struct/presentationsize.md): The natural pixel dimensions of the video content, used for aspect ratio calculations and layout.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
