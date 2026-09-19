> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckallowedsharingoptions/init(allowedparticipantpermissionoptions:allowedparticipantaccessoptions:)

# init(allowedParticipantPermissionOptions:allowedParticipantAccessOptions:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes an allowed sharing options object.

## Declaration

```swift
init(allowedParticipantPermissionOptions: CKSharingParticipantPermissionOption, allowedParticipantAccessOptions: CKSharingParticipantAccessOption)
```

## Parameters

- `allowedParticipantPermissionOptions`: The [CKSharingParticipantPermissionOption](../cksharingparticipantpermissionoption.md) setting.
- `allowedParticipantAccessOptions`: The [CKSharingParticipantAccessOption](../cksharingparticipantaccessoption.md) setting.

# initWithAllowedParticipantPermissionOptions:allowedParticipantAccessOptions: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes an allowed sharing options object.

## Declaration

```objectivec
- (instancetype) initWithAllowedParticipantPermissionOptions:(CKSharingParticipantPermissionOption) allowedParticipantPermissionOptions allowedParticipantAccessOptions:(CKSharingParticipantAccessOption) allowedParticipantAccessOptions;
```

## Parameters

- `allowedParticipantPermissionOptions`: The [CKSharingParticipantPermissionOption](../cksharingparticipantpermissionoption.md) setting.
- `allowedParticipantAccessOptions`: The [CKSharingParticipantAccessOption](../cksharingparticipantaccessoption.md) setting.
