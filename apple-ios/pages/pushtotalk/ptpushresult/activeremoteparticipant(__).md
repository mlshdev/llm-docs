> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pushtotalk/ptpushresult/activeremoteparticipant(_:)

# activeRemoteParticipant(\_:) (Swift)

**Framework:** Push to Talk  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a push result for reporting that a remote participant started to speak.

## Declaration

```swift
class func activeRemoteParticipant(_ participant: PTParticipant) -> PTPushResult
```

## Parameters

- `participant`: The active participant.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

# pushResultForActiveRemoteParticipant: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a push result for reporting that a remote participant started to speak.

## Declaration

```objectivec
+ (PTPushResult *) pushResultForActiveRemoteParticipant:(PTParticipant *) participant;
```

## Parameters

- `participant`: The active participant.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)
