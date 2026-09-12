> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdishwasheralarmclusterresetparams/serversideprocessingtimeout](https://developer.apple.com/documentation/matter/mtrdishwasheralarmclusterresetparams/serversideprocessingtimeout)

# serverSideProcessingTimeout (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

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
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Controls how much time, in seconds, we will allow for the server to process the command.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * serverSideProcessingTimeout;
```

<a id="discussion"></a>

## Discussion

The command will then time out if that much time, plus an allowance for retransmits due to network failures, passes.

If nil, the framework will try to select an appropriate timeout value itself.
