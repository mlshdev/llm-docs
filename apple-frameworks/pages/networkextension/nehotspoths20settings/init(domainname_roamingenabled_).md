> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings/init(domainname:roamingenabled:)](https://developer.apple.com/documentation/networkextension/nehotspoths20settings/init(domainname:roamingenabled:))

# init(domainName:roamingEnabled:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new hotspot configuration of a legacy Hotspot or HS 2.0 Wi-Fi network. with optional roaming enabled.

## Declaration

```swift
init(domainName: String, roamingEnabled: Bool)
```

## Parameters

- `domainName`: The domain name of a Hotspot 2.0 Wi-Fi network. See [domainName](domainname.md).
- `roamingEnabled`: A Boolean value indicating whether roaming is enabled on the network (`true`) or not (`false`).

# initWithDomainName:roamingEnabled: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new hotspot configuration of a legacy Hotspot or HS 2.0 Wi-Fi network. with optional roaming enabled.

## Declaration

```objectivec
- (instancetype) initWithDomainName:(NSString *) domainName roamingEnabled:(BOOL) roamingEnabled;
```

## Parameters

- `domainName`: The domain name of a Hotspot 2.0 Wi-Fi network. See [domainName](domainname.md).
- `roamingEnabled`: A Boolean value indicating whether roaming is enabled on the network (`true`) or not (`false`).
