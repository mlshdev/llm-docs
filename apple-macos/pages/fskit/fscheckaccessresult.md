> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscheckaccessresult](https://developer.apple.com/documentation/fskit/fscheckaccessresult)

# FSCheckAccessResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a check-access call.

## Declaration

```swift
class FSCheckAccessResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [checkAccess(to:requestedAccess:context:replyHandler:)](fsvolume/accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md).

## Topics

### Creating a check-access result

- [init(accessAllowed:)](fscheckaccessresult/init%28accessallowed_%29.md): Creates a result for an access-checking operation.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Checking access

- [checkAccess(to:requestedAccess:context:replyHandler:)](fsvolume/accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSVolume.AccessMask](fsvolume/accessmask.md): A bitmask of access rights.

# FSCheckAccessResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a check-access call.

## Declaration

```objectivec
@interface FSCheckAccessResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [checkAccessToItem:requestedAccess:context:replyHandler:](fsvolume/accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md).

## Topics

### Creating a check-access result

- [initWithAccessAllowed:](fscheckaccessresult/init%28accessallowed_%29.md): Creates a result for an access-checking operation.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Checking access

- [checkAccessToItem:requestedAccess:context:replyHandler:](fsvolume/accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSAccessMask](fsvolume/accessmask.md): A bitmask of access rights.
