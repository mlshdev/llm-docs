> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollector](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector)

# AVPlayerItemMetadataCollector (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

## Declaration

```swift
class AVPlayerItemMetadataCollector
```

<a id="overview"></a>

## Overview

You can use the HLS `#EXT-X-DATERANGE` tag to define date range metadata in a media playlist. This tag is useful for defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream. To access this metadata when the stream is played using an [AVPlayer](avplayer.md), you create an instance of `AVPlayerItemMetadataCollector`, configure its delegate object (see [AVPlayerItemMetadataCollectorPushDelegate](avplayeritemmetadatacollectorpushdelegate.md)), and add it as a media data collector to the [AVPlayerItem](avplayeritem.md) (see example).

**Swift**

```swift
class PlaybackController: NSObject, AVPlayerItemMetadataCollectorPushDelegate {
    
    let player = AVPlayer()
    var playerItem: AVPlayerItem!
    var metadataCollector: AVPlayerItemMetadataCollector!
    
    func prepareToPlay(url: URL) {
        metadataCollector = AVPlayerItemMetadataCollector()
        metadataCollector.setDelegate(self, queue: DispatchQueue.main)
        
        playerItem = AVPlayerItem(url: url)
        playerItem.add(metadataCollector)
        
        player.replaceCurrentItem(with: playerItem)
    }
    
    func metadataCollector(_ metadataCollector: AVPlayerItemMetadataCollector,
                           didCollect metadataGroups: [AVDateRangeMetadataGroup],
                           indexesOfNewGroups: IndexSet,
                           indexesOfModifiedGroups: IndexSet) {
        // Process metadata
    }
}
```

**Objective-C**

```objc
// Adopts AVPlayerItemMetadataCollectorPushDelegate
@implementation PlaybackController
 
- (void)prepareToPlay:(NSURL *)url {
    self.metadataCollector = [[AVPlayerItemMetadataCollector alloc] init];
    [self.metadataCollector setDelegate:self queue:dispatch_get_main_queue()];
 
    self.playerItem = [AVPlayerItem playerItemWithURL:url];
    [self.playerItem addMediaDataCollector:self.metadataCollector];
 
    self.player = [AVPlayer playerWithPlayerItem:self.playerItem];
}
 
- (void)metadataCollector:(AVPlayerItemMetadataCollector *)metadataCollector
didCollectDateRangeMetadataGroups:(NSArray<AVDateRangeMetadataGroup *> *)metadataGroups
       indexesOfNewGroups:(NSIndexSet *)indexesOfNewGroups
  indexesOfModifiedGroups:(NSIndexSet *)indexesOfModifiedGroups {
    // Process metadata
}
 
@end
```

Creating an `AVPlayerItemMetadataCollector` as shown in the example, will capture all `#EXT-X-DATERANGE` metadata defined in your stream. If you would like to filter the output to only the metadata of interest, you can create an instance to filter by identifier and/or classifying labels using the [init(identifiers:classifyingLabels:)](avplayeritemmetadatacollector/init%28identifiers_classifyinglabels_%29.md) initializer.

## Topics

### Creating a metadata collector

- [init(identifiers:classifyingLabels:)](avplayeritemmetadatacollector/init%28identifiers_classifyinglabels_%29.md): Creates a metadata collector to access a stream’s metadata groups matching the specified array of identifiers and classifying labels.

### Accessing the delegate and callback queue

- [setDelegate(\_:queue:)](avplayeritemmetadatacollector/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](avplayeritemmetadatacollector/delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](avplayeritemmetadatacollector/delegatequeue.md): The dispatch queue on which the delegate’s methods are called.

## Relationships

### Inherits From

- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md)

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

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.

# AVPlayerItemMetadataCollector (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

## Declaration

```objectivec
@interface AVPlayerItemMetadataCollector : AVPlayerItemMediaDataCollector
```

<a id="overview"></a>

## Overview

You can use the HLS `#EXT-X-DATERANGE` tag to define date range metadata in a media playlist. This tag is useful for defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream. To access this metadata when the stream is played using an [AVPlayer](avplayer.md), you create an instance of `AVPlayerItemMetadataCollector`, configure its delegate object (see [AVPlayerItemMetadataCollectorPushDelegate](avplayeritemmetadatacollectorpushdelegate.md)), and add it as a media data collector to the [AVPlayerItem](avplayeritem.md) (see example).

**Swift**

```swift
class PlaybackController: NSObject, AVPlayerItemMetadataCollectorPushDelegate {
    
    let player = AVPlayer()
    var playerItem: AVPlayerItem!
    var metadataCollector: AVPlayerItemMetadataCollector!
    
    func prepareToPlay(url: URL) {
        metadataCollector = AVPlayerItemMetadataCollector()
        metadataCollector.setDelegate(self, queue: DispatchQueue.main)
        
        playerItem = AVPlayerItem(url: url)
        playerItem.add(metadataCollector)
        
        player.replaceCurrentItem(with: playerItem)
    }
    
    func metadataCollector(_ metadataCollector: AVPlayerItemMetadataCollector,
                           didCollect metadataGroups: [AVDateRangeMetadataGroup],
                           indexesOfNewGroups: IndexSet,
                           indexesOfModifiedGroups: IndexSet) {
        // Process metadata
    }
}
```

**Objective-C**

```objc
// Adopts AVPlayerItemMetadataCollectorPushDelegate
@implementation PlaybackController
 
- (void)prepareToPlay:(NSURL *)url {
    self.metadataCollector = [[AVPlayerItemMetadataCollector alloc] init];
    [self.metadataCollector setDelegate:self queue:dispatch_get_main_queue()];
 
    self.playerItem = [AVPlayerItem playerItemWithURL:url];
    [self.playerItem addMediaDataCollector:self.metadataCollector];
 
    self.player = [AVPlayer playerWithPlayerItem:self.playerItem];
}
 
- (void)metadataCollector:(AVPlayerItemMetadataCollector *)metadataCollector
didCollectDateRangeMetadataGroups:(NSArray<AVDateRangeMetadataGroup *> *)metadataGroups
       indexesOfNewGroups:(NSIndexSet *)indexesOfNewGroups
  indexesOfModifiedGroups:(NSIndexSet *)indexesOfModifiedGroups {
    // Process metadata
}
 
@end
```

Creating an `AVPlayerItemMetadataCollector` as shown in the example, will capture all `#EXT-X-DATERANGE` metadata defined in your stream. If you would like to filter the output to only the metadata of interest, you can create an instance to filter by identifier and/or classifying labels using the [initWithIdentifiers:classifyingLabels:](avplayeritemmetadatacollector/init%28identifiers_classifyinglabels_%29.md) initializer.

## Topics

### Creating a metadata collector

- [initWithIdentifiers:classifyingLabels:](avplayeritemmetadatacollector/init%28identifiers_classifyinglabels_%29.md): Creates a metadata collector to access a stream’s metadata groups matching the specified array of identifiers and classifying labels.

### Accessing the delegate and callback queue

- [setDelegate:queue:](avplayeritemmetadatacollector/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](avplayeritemmetadatacollector/delegate.md): Accesses the metadata collector’s delegate object.
- [AVPlayerItemMetadataCollectorPushDelegate](avplayeritemmetadatacollectorpushdelegate.md): A protocol you implement to receive metadata callbacks from a player item metadata collector.
- [delegateQueue](avplayeritemmetadatacollector/delegatequeue.md): The dispatch queue on which the delegate’s methods are called.

## Relationships

### Inherits From

- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
