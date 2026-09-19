> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/callerteamidentifier

# callerTeamIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The team identifier of the app making the request.

## Declaration

```swift
var callerTeamIdentifier: String { get }
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [isCallerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

# callerTeamIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The team identifier of the app making the request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * callerTeamIdentifier;
```

## See Also

### Getting Context

- [callerBundleIdentifier](callerbundleidentifier.md): The bundle ID of the app making the request.
- [localizedCallerDisplayName](localizedcallerdisplayname.md): The localized display name of the app making the request.
- [callerManaged](iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.
