> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckshare/participant/useridentity

# userIdentity (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The identity of the participant.

## Declaration

```swift
@NSCopying var userIdentity: CKUserIdentity { get }
```

<a id="discussion"></a>

## Discussion

This property contains a reference to the user identity for the share participant.

# userIdentity (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The identity of the participant.

## Declaration

```objectivec
@property (copy, readonly) CKUserIdentity * userIdentity;
```

<a id="discussion"></a>

## Discussion

This property contains a reference to the user identity for the share participant.
