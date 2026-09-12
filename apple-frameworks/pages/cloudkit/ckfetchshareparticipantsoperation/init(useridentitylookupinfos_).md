> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchshareparticipantsoperation/init(useridentitylookupinfos:)](https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/init(useridentitylookupinfos:))

# init(userIdentityLookupInfos:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for generating share participants from the specified user data.

## Declaration

```swift
convenience init(userIdentityLookupInfos: [CKUserIdentity.LookupInfo])
```

## Parameters

- `userIdentityLookupInfos`: The user data for the participants. If you specify `nil`, you must assign a value to the [userIdentityLookupInfos](useridentitylookupinfos.md) property before you execute this operation.

<a id="discussion"></a>

## Discussion

After you create the operation, assign a handler to the [fetchShareParticipantsCompletionBlock](fetchshareparticipantscompletionblock.md) property to process the results.

## See Also

### Creating an Operation

- [init()](init%28%29.md): Creates an empty operation.

# initWithUserIdentityLookupInfos: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for generating share participants from the specified user data.

## Declaration

```objectivec
- (instancetype) initWithUserIdentityLookupInfos:(NSArray<CKUserIdentityLookupInfo *> *) userIdentityLookupInfos;
```

## Parameters

- `userIdentityLookupInfos`: The user data for the participants. If you specify `nil`, you must assign a value to the [userIdentityLookupInfos](useridentitylookupinfos.md) property before you execute this operation.

<a id="discussion"></a>

## Discussion

After you create the operation, assign a handler to the [fetchShareParticipantsCompletionBlock](fetchshareparticipantscompletionblock.md) property to process the results.

## See Also

### Creating an Operation

- [init](init%28%29.md): Creates an empty operation.
