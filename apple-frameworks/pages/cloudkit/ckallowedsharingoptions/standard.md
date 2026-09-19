> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckallowedsharingoptions/standard

# standard (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object set to the most permissive sharing options.

## Declaration

```swift
class var standard: CKAllowedSharingOptions { get }
```

<a id="discussion"></a>

## Discussion

The `standardOptions` has [allowedParticipantPermissionOptions](allowedparticipantpermissionoptions.md) set to [any](../cksharingparticipantpermissionoption/any.md) and [allowedParticipantAccessOptions](allowedparticipantaccessoptions.md) set to [any](../cksharingparticipantaccessoption/any.md).

# standardOptions (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object set to the most permissive sharing options.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) CKAllowedSharingOptions * standardOptions;
```

<a id="discussion"></a>

## Discussion

The `standardOptions` has [allowedParticipantPermissionOptions](allowedparticipantpermissionoptions.md) set to [CKSharingParticipantPermissionOptionAny](../cksharingparticipantpermissionoption/any.md) and [allowedParticipantAccessOptions](allowedparticipantaccessoptions.md) set to [CKSharingParticipantAccessOptionAny](../cksharingparticipantaccessoption/any.md).
