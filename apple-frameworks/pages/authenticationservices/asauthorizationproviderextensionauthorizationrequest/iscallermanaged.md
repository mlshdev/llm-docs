> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/iscallermanaged](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/iscallermanaged)

# isCallerManaged (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the app making the request is managed.

## Declaration

```swift
var isCallerManaged: Bool { get }
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

# callerManaged (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the app making the request is managed.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCallerManaged) BOOL callerManaged;
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.
