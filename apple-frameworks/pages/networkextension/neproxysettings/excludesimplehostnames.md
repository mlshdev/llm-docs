> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/excludesimplehostnames](https://developer.apple.com/documentation/networkextension/neproxysettings/excludesimplehostnames)

# excludeSimpleHostnames (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.

## Declaration

```swift
var excludeSimpleHostnames: Bool { get set }
```

## See Also

### Accessing General Proxy Properties

- [exceptionList](exceptionlist.md): An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.
- [matchDomains](matchdomains.md): An array of domain strings.

# excludeSimpleHostnames (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.

## Declaration

```objectivec
@property BOOL excludeSimpleHostnames;
```

## See Also

### Accessing General Proxy Properties

- [exceptionList](exceptionlist.md): An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.
- [matchDomains](matchdomains.md): An array of domain strings.
