> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallengesender/performdefaulthandling(for:)](https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender/performdefaulthandling(for:))

# performDefaultHandling(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the system-provided default behavior to be used.

## Declaration

```swift
optional func performDefaultHandling(for challenge: URLAuthenticationChallenge)
```

## Parameters

- `challenge`: The challenge for which the default behavior should be used.

## See Also

### Protocol Methods

- [cancel(\_:)](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredential(for:)](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [use(\_:for:)](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [rejectProtectionSpaceAndContinue(with:)](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

# performDefaultHandlingForAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the system-provided default behavior to be used.

## Declaration

```objectivec
- (void) performDefaultHandlingForAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `challenge`: The challenge for which the default behavior should be used.

## See Also

### Protocol Methods

- [cancelAuthenticationChallenge:](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredentialForAuthenticationChallenge:](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [useCredential:forAuthenticationChallenge:](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [rejectProtectionSpaceAndContinueWithChallenge:](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.
