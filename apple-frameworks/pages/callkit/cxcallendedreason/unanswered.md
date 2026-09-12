> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallendedreason/unanswered](https://developer.apple.com/documentation/callkit/cxcallendedreason/unanswered)

# CXCallEndedReason.unanswered (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.

## Declaration

```swift
case unanswered
```

## See Also

### Constants

- [CXCallEndedReason.failed](failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReason.remoteEnded](remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReason.answeredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReason.declinedElsewhere](declinedelsewhere.md): Another device declined the call.

# CXCallEndedReasonUnanswered (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.

## Declaration

```objectivec
CXCallEndedReasonUnanswered
```

## See Also

### Constants

- [CXCallEndedReasonFailed](failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReasonRemoteEnded](remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReasonAnsweredElsewhere](answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReasonDeclinedElsewhere](declinedelsewhere.md): Another device declined the call.
