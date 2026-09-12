> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/callerbundleidentifier](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/callerbundleidentifier)

# callerBundleIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The bundle ID of the app making the request.

## Declaration

```swift
var callerBundleIdentifier: String { get }
```

## See Also

### Getting Context

- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [isCallerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

# callerBundleIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The bundle ID of the app making the request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * callerBundleIdentifier;
```

## See Also

### Getting Context

- [callerTeamIdentifier](callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [callerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.
