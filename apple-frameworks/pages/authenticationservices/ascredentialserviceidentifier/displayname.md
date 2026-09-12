> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialserviceidentifier/displayname](https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/displayname)

# displayName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

A user visible name for the identifier. For `app` types it will contain the localized name of the app. For `URL` types it will contain the host name of the URL if it contains a valid host. For `URL` type identifiers that do not contain a valid host and for `domain` type identifiers, this will be equal to `identifier`. This property is meant only as a best effort suggestion for display purposes. It is not used by the system to identify the service or suggest a credential for AutoFill.

## Declaration

```swift
var displayName: String? { get }
```

# displayName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

A user visible name for the identifier. For `app` types it will contain the localized name of the app. For `URL` types it will contain the host name of the URL if it contains a valid host. For `URL` type identifiers that do not contain a valid host and for `domain` type identifiers, this will be equal to `identifier`. This property is meant only as a best effort suggestion for display purposes. It is not used by the system to identify the service or suggest a credential for AutoFill.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * displayName;
```
