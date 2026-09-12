> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptiongrouper](https://developer.apple.com/documentation/avfoundation/avcaptiongrouper)

# AVCaptionGrouper (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.

## Declaration

```swift
class AVCaptionGrouper
```

## Topics

### Adding captions

- [add(\_:)](avcaptiongrouper/add%28__%29.md): Adds a caption to the pending group.

### Generating captions groups

- [flushAddedCaptions(upTo:)](avcaptiongrouper/flushaddedcaptions%28upto_%29.md): Creates caption groups for the captions you enqueue up to the time.

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

### Groups

- [AVCaptionGroup](avcaptiongroup.md): An object that represents zero or more captions that intersect in time.

# AVCaptionGrouper (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.

## Declaration

```objectivec
@interface AVCaptionGrouper : NSObject
```

## Topics

### Adding captions

- [addCaption:](avcaptiongrouper/add%28__%29.md): Adds a caption to the pending group.

### Generating captions groups

- [flushAddedCaptionsIntoGroupsUpToTime:](avcaptiongrouper/flushaddedcaptions%28upto_%29.md): Creates caption groups for the captions you enqueue up to the time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Groups

- [AVCaptionGroup](avcaptiongroup.md): An object that represents zero or more captions that intersect in time.
