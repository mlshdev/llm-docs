> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/matchdesignatedrequirement](https://developer.apple.com/documentation/networkextension/neapprule/matchdesignatedrequirement)

# matchDesignatedRequirement (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The designated requirement of the app that matches the rule.

## Declaration

```swift
var matchDesignatedRequirement: String { get }
```

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

# matchDesignatedRequirement (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The designated requirement of the app that matches the rule.

## Declaration

```objectivec
@property (readonly) NSString * matchDesignatedRequirement;
```

## See Also

### Accessing app rule properties

- [matchSigningIdentifier](matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchPath](matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](matchdomains.md): The hostname domains that match the rule.
- [matchTools](matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.
