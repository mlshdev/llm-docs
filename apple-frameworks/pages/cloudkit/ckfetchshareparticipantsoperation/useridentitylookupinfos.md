> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchshareparticipantsoperation/useridentitylookupinfos](https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/useridentitylookupinfos)

# userIdentityLookupInfos (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user data for the participants.

## Declaration

```swift
var userIdentityLookupInfos: [CKUserIdentity.LookupInfo]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the participants user data. If you intend to specify or change the value of this property, do so before you execute the operation or submit it to a queue.

> **Note**

> If you don’t set [userIdentityLookupInfos](useridentitylookupinfos.md) prior to executing the operation, it returns immediately with no results.

# userIdentityLookupInfos (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user data for the participants.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKUserIdentityLookupInfo *> * userIdentityLookupInfos;
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the participants user data. If you intend to specify or change the value of this property, do so before you execute the operation or submit it to a queue.

> **Note**

> If you don’t set [userIdentityLookupInfos](useridentitylookupinfos.md) prior to executing the operation, it returns immediately with no results.
