> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpskipintervalcommandevent/interval](https://developer.apple.com/documentation/mediaplayer/mpskipintervalcommandevent/interval)

# interval (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The chosen interval, in seconds, for the skip command event.

## Declaration

```swift
var interval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The `interval` property provides the number of seconds to be skipped when a skip command is executed.

# interval (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The chosen interval, in seconds, for the skip command event.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval interval;
```

<a id="Discussion"></a>

## Discussion

The `interval` property provides the number of seconds to be skipped when a skip command is executed.
