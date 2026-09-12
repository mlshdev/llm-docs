> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltererror-swift.struct/code/system](https://developer.apple.com/documentation/identitylookup/ilmessagefiltererror-swift.struct/code/system)

# ILMessageFilterError.Code.system (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An unspecified system error occurred.

## Declaration

```swift
case system
```

## See Also

### Error Codes

- [ILMessageFilterError.Code.invalidNetworkURL](invalidnetworkurl.md): The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.
- [ILMessageFilterError.Code.networkURLUnauthorized](networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterError.Code.networkRequestFailed](networkrequestfailed.md): The network request failed.
- [ILMessageFilterError.Code.redundantNetworkDeferral](redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.

# ILMessageFilterErrorSystem (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An unspecified system error occurred.

## Declaration

```objectivec
ILMessageFilterErrorSystem
```

## See Also

### Error Codes

- [ILMessageFilterErrorInvalidNetworkURL](invalidnetworkurl.md): The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.
- [ILMessageFilterErrorNetworkURLUnauthorized](networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterErrorNetworkRequestFailed](networkrequestfailed.md): The network request failed.
- [ILMessageFilterErrorRedundantNetworkDeferral](redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.
