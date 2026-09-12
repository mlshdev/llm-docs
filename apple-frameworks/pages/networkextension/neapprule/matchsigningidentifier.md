> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/matchsigningidentifier](https://developer.apple.com/documentation/networkextension/neapprule/matchsigningidentifier)

# matchSigningIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The signing identifier of the app that matches the rule.

## Declaration

```swift
var matchSigningIdentifier: String { get }
```

## See Also

### Accessing app rule properties

- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

# matchSigningIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The signing identifier of the app that matches the rule.

## Declaration

```objectivec
@property (readonly) NSString * matchSigningIdentifier;
```

## See Also

### Accessing app rule properties

- [matchDesignatedRequirement](matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.
