> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager/getconfiguredssids(completionhandler:)](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/getconfiguredssids(completionhandler:))

# getConfiguredSSIDs(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Submits a completion handler the configuration manager calls to send your app the names of the SSIDs or Wi-Fi hotspot domains in the configuration.

## Declaration

```swift
func getConfiguredSSIDs(completionHandler: @escaping @Sendable ([String]) -> Void)
```

```swift
func configuredSSIDs() async -> [String]
```

## Parameters

- `completionHandler`: A completion handler that accepts an array of strings.

<a id="Discussion"></a>

## Discussion

The hotspot configuration manager sends your app a list of network SSIDs or Hotspot 2.0 domain names from the configuration by calling the completion handler you pass to the method.

For Hotspot 2.0 Enterprise (802.1X) networks, the list contains HS 2.0 domain names, and for other Wi-Fi networks, it contains their SSID.

# getConfiguredSSIDsWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Submits a completion handler the configuration manager calls to send your app the names of the SSIDs or Wi-Fi hotspot domains in the configuration.

## Declaration

```objectivec
- (void) getConfiguredSSIDsWithCompletionHandler:(void (^)(NSArray<NSString *> *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that accepts an array of strings.

<a id="Discussion"></a>

## Discussion

The hotspot configuration manager sends your app a list of network SSIDs or Hotspot 2.0 domain names from the configuration by calling the completion handler you pass to the method.

For Hotspot 2.0 Enterprise (802.1X) networks, the list contains HS 2.0 domain names, and for other Wi-Fi networks, it contains their SSID.
