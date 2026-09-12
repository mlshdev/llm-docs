> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchshareparticipantsoperation/init()](https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an empty operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You can use this operation only once.

> **Note**

> If you don’t set [userIdentityLookupInfos](useridentitylookupinfos.md) prior to executing the operation, it returns immediately with no results.

## See Also

### Creating an Operation

- [init(userIdentityLookupInfos:)](init%28useridentitylookupinfos_%29.md): Creates an operation for generating share participants from the specified user data.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an empty operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You can use this operation only once.

> **Note**

> If you don’t set [userIdentityLookupInfos](useridentitylookupinfos.md) prior to executing the operation, it returns immediately with no results.

## See Also

### Creating an Operation

- [initWithUserIdentityLookupInfos:](init%28useridentitylookupinfos_%29.md): Creates an operation for generating share participants from the specified user data.
