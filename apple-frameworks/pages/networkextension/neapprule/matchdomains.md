> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/matchdomains](https://developer.apple.com/documentation/networkextension/neapprule/matchdomains)

# matchDomains (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The hostname domains that match the rule.

## Declaration

```swift
var matchDomains: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to a nonempty array, then only connections to destinations in the domains specified in the array will use the VPN.

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

# matchDomains (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The hostname domains that match the rule.

## Declaration

```objectivec
@property (copy, nullable) NSArray * matchDomains;
```

<a id="Discussion"></a>

## Discussion

If this property is set to a nonempty array, then only connections to destinations in the domains specified in the array will use the VPN.

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.
