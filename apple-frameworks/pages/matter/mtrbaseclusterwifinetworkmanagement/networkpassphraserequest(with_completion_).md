> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwifinetworkmanagement/networkpassphraserequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwifinetworkmanagement/networkpassphraserequest(with:completion:))

# networkPassphraseRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command NetworkPassphraseRequest

## Declaration

```swift
func networkPassphraseRequest(with params: MTRWiFiNetworkManagementClusterNetworkPassphraseRequestParams?, completion: @escaping @Sendable (MTRWiFiNetworkManagementClusterNetworkPassphraseResponseParams?, (any Error)?) -> Void)
```

```swift
func networkPassphraseRequest(with params: MTRWiFiNetworkManagementClusterNetworkPassphraseRequestParams?) async throws -> MTRWiFiNetworkManagementClusterNetworkPassphraseResponseParams
```

<a id="discussion"></a>

## Discussion

This command is used to request the current WPA-Personal passphrase or PSK associated with the Wi-Fi network provided by this device.

# networkPassphraseRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command NetworkPassphraseRequest

## Declaration

```objectivec
- (void) networkPassphraseRequestWithParams:(MTRWiFiNetworkManagementClusterNetworkPassphraseRequestParams *) params completion:(void (^)(MTRWiFiNetworkManagementClusterNetworkPassphraseResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to request the current WPA-Personal passphrase or PSK associated with the Wi-Fi network provided by this device.
