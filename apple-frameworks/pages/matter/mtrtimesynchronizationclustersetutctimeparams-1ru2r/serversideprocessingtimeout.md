> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrtimesynchronizationclustersetutctimeparams-1ru2r/serversideprocessingtimeout](https://developer.apple.com/documentation/matter/mtrtimesynchronizationclustersetutctimeparams-1ru2r/serversideprocessingtimeout)

# serverSideProcessingTimeout (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

Controls how much time, in seconds, we will allow for the server to process the command.

## Declaration

```swift
@NSCopying var serverSideProcessingTimeout: NSNumber? { get set }
```

<a id="discussion"></a>

## Discussion

The command will then time out if that much time, plus an allowance for retransmits due to network failures, passes.

If nil, the framework will try to select an appropriate timeout value itself.

# serverSideProcessingTimeout (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

Controls how much time, in seconds, we will allow for the server to process the command.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * serverSideProcessingTimeout;
```

<a id="discussion"></a>

## Discussion

The command will then time out if that much time, plus an allowance for retransmits due to network failures, passes.

If nil, the framework will try to select an appropriate timeout value itself.
