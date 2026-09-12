> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltererror-swift.struct/code/invalidnetworkurl](https://developer.apple.com/documentation/identitylookup/ilmessagefiltererror-swift.struct/code/invalidnetworkurl)

# ILMessageFilterError.Code.invalidNetworkURL (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.

## Declaration

```swift
case invalidNetworkURL
```

## See Also

### Error Codes

- [ILMessageFilterError.Code.system](system.md): An unspecified system error occurred.
- [ILMessageFilterError.Code.networkURLUnauthorized](networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterError.Code.networkRequestFailed](networkrequestfailed.md): The network request failed.
- [ILMessageFilterError.Code.redundantNetworkDeferral](redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.

# ILMessageFilterErrorInvalidNetworkURL (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.

## Declaration

```objectivec
ILMessageFilterErrorInvalidNetworkURL
```

## See Also

### Error Codes

- [ILMessageFilterErrorSystem](system.md): An unspecified system error occurred.
- [ILMessageFilterErrorNetworkURLUnauthorized](networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterErrorNetworkRequestFailed](networkrequestfailed.md): The network request failed.
- [ILMessageFilterErrorRedundantNetworkDeferral](redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.
