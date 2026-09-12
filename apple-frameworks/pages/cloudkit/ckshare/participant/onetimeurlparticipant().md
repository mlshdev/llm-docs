> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participant/onetimeurlparticipant()](https://developer.apple.com/documentation/cloudkit/ckshare/participant/onetimeurlparticipant())

# oneTimeURLParticipant() (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Generate a unique URL for inviting a participant without knowing their handle

## Declaration

```swift
class func oneTimeURLParticipant() -> Self
```

<a id="discussion"></a>

## Discussion

When a participant’s email address / phone number / userRecordID isn’t known up-front, you can add a [oneTimeURLParticipant()](onetimeurlparticipant%28%29.md) to the share. Once you save the share, you can get a custom invitation link or one-time URL for the added participant via [oneTimeURL(for:)](../onetimeurl%28for_%29.md). Any recipient user can use this custom link to fetch share metadata and accept the share.

Note that a one-time URL participant in the [CKShare.ParticipantAcceptanceStatus.pending](../participantacceptancestatus/pending.md) state has empty [nameComponents](../../ckuseridentity/namecomponents.md) and a nil [lookupInfo](../../ckuseridentity/lookupinfo-swift.property.md).

# oneTimeURLParticipant (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Generate a unique URL for inviting a participant without knowing their handle

## Declaration

```objectivec
+ (instancetype) oneTimeURLParticipant;
```

<a id="discussion"></a>

## Discussion

When a participant’s email address / phone number / userRecordID isn’t known up-front, you can add a [oneTimeURLParticipant](onetimeurlparticipant%28%29.md) to the share. Once you save the share, you can get a custom invitation link or one-time URL for the added participant via [oneTimeURL(for:)](../onetimeurl%28for_%29.md). Any recipient user can use this custom link to fetch share metadata and accept the share.

Note that a one-time URL participant in the [CKShareParticipantAcceptanceStatusPending](../participantacceptancestatus/pending.md) state has empty [nameComponents](../../ckuseridentity/namecomponents.md) and a nil [lookupInfo](../../ckuseridentity/lookupinfo-swift.property.md).
