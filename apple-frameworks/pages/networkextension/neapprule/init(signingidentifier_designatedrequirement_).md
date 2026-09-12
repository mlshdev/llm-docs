> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/init(signingidentifier:designatedrequirement:)](https://developer.apple.com/documentation/networkextension/neapprule/init(signingidentifier:designatedrequirement:))

# init(signingIdentifier:designatedRequirement:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Create an app rule that matches an app with a given signing identifier and a given designated requirement.

## Declaration

```swift
init(signingIdentifier: String, designatedRequirement: String)
```

## Parameters

- `signingIdentifier`: The signing identifier of the app that matches the rule. For apps that are signed using Xcode, the app’s signing identifier is equivalent to the app’s bundle identifier.
- `designatedRequirement`: The designated requirement of the app that matches the rule. The designated requirement for an app can be obtained using the `codesign` command-line developer tool.

<a id="return-value"></a>

## Return Value

A newly-initialized `NEAppRule` object.

## See Also

### Initializing an app rule

- [init(signingIdentifier:)](init%28signingidentifier_%29.md): Create an app rule that matches an app with a given signing identifier.

# initWithSigningIdentifier:designatedRequirement: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Create an app rule that matches an app with a given signing identifier and a given designated requirement.

## Declaration

```objectivec
- (instancetype) initWithSigningIdentifier:(NSString *) signingIdentifier designatedRequirement:(NSString *) designatedRequirement;
```

## Parameters

- `signingIdentifier`: The signing identifier of the app that matches the rule. For apps that are signed using Xcode, the app’s signing identifier is equivalent to the app’s bundle identifier.
- `designatedRequirement`: The designated requirement of the app that matches the rule. The designated requirement for an app can be obtained using the `codesign` command-line developer tool.

<a id="return-value"></a>

## Return Value

A newly-initialized `NEAppRule` object.

## See Also

### Initializing an app rule

- [initWithSigningIdentifier:](init%28signingidentifier_%29.md): Create an app rule that matches an app with a given signing identifier.
