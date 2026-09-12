> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule/init(signingidentifier:)](https://developer.apple.com/documentation/networkextension/neapprule/init(signingidentifier:))

# init(signingIdentifier:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create an app rule that matches an app with a given signing identifier.

## Declaration

```swift
init(signingIdentifier: String)
```

## Parameters

- `signingIdentifier`: The signing identifier of the app that matches the rule. For apps that are signed using Xcode, the app’s signing identifier is equivalent to the app’s bundle identifier.

<a id="return-value"></a>

## Return Value

A newly-initialized `NEAppRule` object.

## See Also

### Initializing an app rule

- [init(signingIdentifier:designatedRequirement:)](init%28signingidentifier_designatedrequirement_%29.md): Create an app rule that matches an app with a given signing identifier and a given designated requirement.

# initWithSigningIdentifier: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create an app rule that matches an app with a given signing identifier.

## Declaration

```objectivec
- (instancetype) initWithSigningIdentifier:(NSString *) signingIdentifier;
```

## Parameters

- `signingIdentifier`: The signing identifier of the app that matches the rule. For apps that are signed using Xcode, the app’s signing identifier is equivalent to the app’s bundle identifier.

<a id="return-value"></a>

## Return Value

A newly-initialized `NEAppRule` object.

## See Also

### Initializing an app rule

- [initWithSigningIdentifier:designatedRequirement:](init%28signingidentifier_designatedrequirement_%29.md): Create an app rule that matches an app with a given signing identifier and a given designated requirement.
