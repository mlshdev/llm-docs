> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baerrorcode](https://developer.apple.com/documentation/backgroundassets/baerrorcode)

# BAErrorCode (Swift)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
enum BAErrorCode
```

## Topics

### Error codes

- [BAErrorCode.callFromExtensionNotAllowed](baerrorcode/callfromextensionnotallowed.md)
- [BAErrorCode.callFromInactiveProcessNotAllowed](baerrorcode/callfrominactiveprocessnotallowed.md)
- [BAErrorCode.callerConnectionInvalid](baerrorcode/callerconnectioninvalid.md)
- [BAErrorCode.callerConnectionNotAccepted](baerrorcode/callerconnectionnotaccepted.md)
- [BAErrorCode.downloadAlreadyFailed](baerrorcode/downloadalreadyfailed.md)
- [BAErrorCode.downloadAlreadyScheduled](baerrorcode/downloadalreadyscheduled.md)
- [BAErrorCode.downloadBackgroundActivityProhibited](baerrorcode/downloadbackgroundactivityprohibited.md)
- [BAErrorCode.downloadEssentialDownloadNotPermitted](baerrorcode/downloadessentialdownloadnotpermitted.md)
- [BAErrorCode.downloadFailedToStart](baerrorcode/downloadfailedtostart.md)
- [BAErrorCode.downloadInvalid](baerrorcode/downloadinvalid.md)
- [BAErrorCode.downloadNotScheduled](baerrorcode/downloadnotscheduled.md)
- [BAErrorCode.downloadWouldExceedAllowance](baerrorcode/downloadwouldexceedallowance.md)
- [BAErrorCode.sessionDownloadAllowanceExceeded](baerrorcode/sessiondownloadallowanceexceeded.md)
- [BAErrorCode.sessionDownloadDisallowedByAllowance](baerrorcode/sessiondownloaddisallowedbyallowance.md)
- [BAErrorCode.sessionDownloadDisallowedByDomain](baerrorcode/sessiondownloaddisallowedbydomain.md)
- [BAErrorCode.sessionDownloadNotPermittedBeforeAppLaunch](baerrorcode/sessiondownloadnotpermittedbeforeapplaunch.md)

### Initializers

- [init(rawValue:)](baerrorcode/init%28rawvalue_%29.md)

### Enumeration Cases

- [BAErrorCode.downloadDoesNotExist](baerrorcode/downloaddoesnotexist.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ManagedBackgroundAssetsError](managedbackgroundassetserror.md): An error for a managed asset pack.
- [BAErrorDomain](baerrordomain.md)
- [AssetPackManager.LocalAvailabilityError](assetpackmanager/localavailabilityerror.md): An error that provides information about local asset pack availability, distinguishing between successes and failures.

# BAErrorCode (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
enum BAErrorCode : NSInteger;
```

## Topics

### Error codes

- [BAErrorCodeCallFromExtensionNotAllowed](baerrorcode/callfromextensionnotallowed.md)
- [BAErrorCodeCallFromInactiveProcessNotAllowed](baerrorcode/callfrominactiveprocessnotallowed.md)
- [BAErrorCodeCallerConnectionInvalid](baerrorcode/callerconnectioninvalid.md)
- [BAErrorCodeCallerConnectionNotAccepted](baerrorcode/callerconnectionnotaccepted.md)
- [BAErrorCodeDownloadAlreadyFailed](baerrorcode/downloadalreadyfailed.md)
- [BAErrorCodeDownloadAlreadyScheduled](baerrorcode/downloadalreadyscheduled.md)
- [BAErrorCodeDownloadBackgroundActivityProhibited](baerrorcode/downloadbackgroundactivityprohibited.md)
- [BAErrorCodeDownloadEssentialDownloadNotPermitted](baerrorcode/downloadessentialdownloadnotpermitted.md)
- [BAErrorCodeDownloadFailedToStart](baerrorcode/downloadfailedtostart.md)
- [BAErrorCodeDownloadInvalid](baerrorcode/downloadinvalid.md)
- [BAErrorCodeDownloadNotScheduled](baerrorcode/downloadnotscheduled.md)
- [BAErrorCodeDownloadWouldExceedAllowance](baerrorcode/downloadwouldexceedallowance.md)
- [BAErrorCodeSessionDownloadAllowanceExceeded](baerrorcode/sessiondownloadallowanceexceeded.md)
- [BAErrorCodeSessionDownloadDisallowedByAllowance](baerrorcode/sessiondownloaddisallowedbyallowance.md)
- [BAErrorCodeSessionDownloadDisallowedByDomain](baerrorcode/sessiondownloaddisallowedbydomain.md)
- [BAErrorCodeSessionDownloadNotPermittedBeforeAppLaunch](baerrorcode/sessiondownloadnotpermittedbeforeapplaunch.md)

### Enumeration Cases

- [BAErrorCodeDownloadDoesNotExist](baerrorcode/downloaddoesnotexist.md)

## See Also

### Errors

- [BAAssetPackIdentifierErrorKey](baassetpackidentifiererrorkey.md): The `-[NSError userInfo]` key for an asset pack’s identifier.
- [BAManagedErrorDomain](bamanagederrordomain.md): The error domain for managed asset packs.
- [BAManagedErrorCode](bamanagederrorcode.md): An error code for a managed asset pack.
- [BAErrorDomain](baerrordomain.md)
