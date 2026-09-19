> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckshare/blockedidentity/useridentity

# userIdentity (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The identity of the user who has been blocked from requesting access to the share.

## Declaration

```swift
@NSCopying var userIdentity: CKUserIdentity { get }
```

# userIdentity (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The identity of the user who has been blocked from requesting access to the share.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKUserIdentity * userIdentity;
```
