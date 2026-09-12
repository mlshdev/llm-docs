> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptiongrouper/flushaddedcaptions(upto:)](https://developer.apple.com/documentation/avfoundation/avcaptiongrouper/flushaddedcaptions(upto:))

# flushAddedCaptions(upTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates caption groups for the captions you enqueue up to the time.

## Declaration

```swift
func flushAddedCaptions(upTo upToTime: CMTime) -> [AVCaptionGroup]
```

## Parameters

- `upToTime`: The time up to which the system flushes the queue.

<a id="return-value"></a>

## Return Value

An array of zero or more caption groups.

# flushAddedCaptionsIntoGroupsUpToTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates caption groups for the captions you enqueue up to the time.

## Declaration

```objectivec
- (NSArray<AVCaptionGroup *> *) flushAddedCaptionsIntoGroupsUpToTime:(CMTime) upToTime;
```

## Parameters

- `upToTime`: The time up to which the system flushes the queue.

<a id="return-value"></a>

## Return Value

An array of zero or more caption groups.
