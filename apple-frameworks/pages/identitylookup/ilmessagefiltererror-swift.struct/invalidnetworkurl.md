> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookup/ilmessagefiltererror-swift.struct/invalidnetworkurl

# invalidNetworkURL

**Framework:** SMS and Call Reporting  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s information property list file is either missing or invalid.

## Declaration

```swift
static var invalidNetworkURL: ILMessageFilterError.Code { get }
```

## See Also

### Error Codes

- [networkRequestFailed](networkrequestfailed.md): The network request failed.
- [networkURLUnauthorized](networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its information property list file.
- [redundantNetworkDeferral](redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.
- [system](system.md): An unspecified system error occurred.
