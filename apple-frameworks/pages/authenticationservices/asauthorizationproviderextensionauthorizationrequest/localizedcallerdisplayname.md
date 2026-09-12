> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/localizedcallerdisplayname](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/localizedcallerdisplayname)

# localizedCallerDisplayName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The localized display name of the app making the request.

## Declaration

```swift
var localizedCallerDisplayName: String { get }
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [isCallerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

# localizedCallerDisplayName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The localized display name of the app making the request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedCallerDisplayName;
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [callerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.
