> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/matchpath](https://developer.apple.com/documentation/networkextension/neapprule/matchpath)

# matchPath (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The file system path of the app that matches the rule.

## Declaration

```swift
var matchPath: String? { get set }
```

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

# matchPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The file system path of the app that matches the rule.

## Declaration

```objectivec
@property (copy, nullable) NSString * matchPath;
```

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.
