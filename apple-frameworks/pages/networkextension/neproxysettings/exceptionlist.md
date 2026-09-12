> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/exceptionlist](https://developer.apple.com/documentation/networkextension/neproxysettings/exceptionlist)

# exceptionList (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.

## Declaration

```swift
var exceptionList: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The pattern strings may contain ‘\*’ characters as wildcards.

## See Also

### Accessing General Proxy Properties

- [excludeSimpleHostnames](excludesimplehostnames.md): A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.
- [matchDomains](matchdomains.md): An array of domain strings.

# exceptionList (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * exceptionList;
```

<a id="Discussion"></a>

## Discussion

The pattern strings may contain ‘\*’ characters as wildcards.

## See Also

### Accessing General Proxy Properties

- [excludeSimpleHostnames](excludesimplehostnames.md): A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.
- [matchDomains](matchdomains.md): An array of domain strings.
