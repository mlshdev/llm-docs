> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallendedreason/failed](https://developer.apple.com/documentation/callkit/cxcallendedreason/failed)

# CXCallEndedReason.failed (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An error occurred while attempting to service the call.

## Declaration

```swift
case failed
```

## See Also

### Constants

- [CXCallEndedReason.remoteEnded](remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReason.unanswered](unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReason.answeredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReason.declinedElsewhere](declinedelsewhere.md): Another device declined the call.

# CXCallEndedReasonFailed (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An error occurred while attempting to service the call.

## Declaration

```objectivec
CXCallEndedReasonFailed
```

## See Also

### Constants

- [CXCallEndedReasonRemoteEnded](remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReasonUnanswered](unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReasonAnsweredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReasonDeclinedElsewhere](declinedelsewhere.md): Another device declined the call.
