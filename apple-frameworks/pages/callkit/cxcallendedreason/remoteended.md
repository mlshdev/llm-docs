> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallendedreason/remoteended](https://developer.apple.com/documentation/callkit/cxcallendedreason/remoteended)

# CXCallEndedReason.remoteEnded (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The remote party explicitly ended the call.

## Declaration

```swift
case remoteEnded
```

## See Also

### Constants

- [CXCallEndedReason.failed](failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReason.unanswered](unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReason.answeredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReason.declinedElsewhere](declinedelsewhere.md): Another device declined the call.

# CXCallEndedReasonRemoteEnded (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The remote party explicitly ended the call.

## Declaration

```objectivec
CXCallEndedReasonRemoteEnded
```

## See Also

### Constants

- [CXCallEndedReasonFailed](failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReasonUnanswered](unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReasonAnsweredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReasonDeclinedElsewhere](declinedelsewhere.md): Another device declined the call.
