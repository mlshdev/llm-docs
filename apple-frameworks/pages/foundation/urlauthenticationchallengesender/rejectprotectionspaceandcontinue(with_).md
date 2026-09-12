> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallengesender/rejectprotectionspaceandcontinue(with:)](https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender/rejectprotectionspaceandcontinue(with:))

# rejectProtectionSpaceAndContinue(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Rejects the currently supplied protection space.

## Declaration

```swift
optional func rejectProtectionSpaceAndContinue(with challenge: URLAuthenticationChallenge)
```

## Parameters

- `challenge`: The challenge that should be rejected.

## See Also

### Protocol Methods

- [cancel(\_:)](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredential(for:)](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [use(\_:for:)](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandling(for:)](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.

# rejectProtectionSpaceAndContinueWithChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Rejects the currently supplied protection space.

## Declaration

```objectivec
- (void) rejectProtectionSpaceAndContinueWithChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `challenge`: The challenge that should be rejected.

## See Also

### Protocol Methods

- [cancelAuthenticationChallenge:](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredentialForAuthenticationChallenge:](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [useCredential:forAuthenticationChallenge:](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandlingForAuthenticationChallenge:](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
