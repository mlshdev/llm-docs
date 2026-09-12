> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanismbiometry/statehash](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismbiometry/statehash)

# stateHash (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var stateHash: Data { get }
```

<a id="discussion"></a>

## Discussion

The application specific state of the biometric enrollment as returned by @c LAContext.domainState.biometry.stateHash

This value represents the state of the enrollment and changes whenever the biometric enrollment is changed. It does not directly map to the enrolled templates, e.g. if a finger is added to Touch ID enrollment and then removed, the final state would be different. It also returns different values to different apps to prevent tracking of user identity.

# stateHash (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * stateHash;
```

<a id="discussion"></a>

## Discussion

The application specific state of the biometric enrollment as returned by @c LAContext.domainState.biometry.stateHash

This value represents the state of the enrollment and changes whenever the biometric enrollment is changed. It does not directly map to the enrolled templates, e.g. if a finger is added to Touch ID enrollment and then removed, the final state would be different. It also returns different values to different apps to prevent tracking of user identity.
