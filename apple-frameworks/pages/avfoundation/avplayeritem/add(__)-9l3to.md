> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/add(_:)-9l3to](https://developer.apple.com/documentation/avfoundation/avplayeritem/add(_:)-9l3to)

# add(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Adds the specified media data collector to the player item’s collection of media collectors.

## Declaration

```swift
nonisolated func add(_ collector: AVPlayerItemMediaDataCollector)
```

## Parameters

- `collector`: An instance of [AVPlayerItemMediaDataCollector](../avplayeritemmediadatacollector.md).

<a id="Discussion"></a>

## Discussion

This method may incur additional I/O to collect the requested media data asynchronously.

## See Also

### Managing player item data collectors

- [mediaDataCollectors](mediadatacollectors.md): The collection of associated media data collectors.
- [remove(\_:)](remove%28__%29-29iuz.md): Removes the specified media data collector from the player item’s collection of media collectors.

# addMediaDataCollector: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Adds the specified media data collector to the player item’s collection of media collectors.

## Declaration

```objectivec
- (void) addMediaDataCollector:(AVPlayerItemMediaDataCollector *) collector;
```

## Parameters

- `collector`: An instance of [AVPlayerItemMediaDataCollector](../avplayeritemmediadatacollector.md).

<a id="Discussion"></a>

## Discussion

This method may incur additional I/O to collect the requested media data asynchronously.

## See Also

### Managing player item data collectors

- [mediaDataCollectors](mediadatacollectors.md): The collection of associated media data collectors.
- [removeMediaDataCollector:](remove%28__%29-29iuz.md): Removes the specified media data collector from the player item’s collection of media collectors.
