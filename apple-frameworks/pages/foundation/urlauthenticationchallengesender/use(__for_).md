> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallengesender/use(_:for:)](https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender/use(_:for:))

# use(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to use a given credential for a given authentication challenge.

## Declaration

```swift
func use(_ credential: URLCredential, for challenge: URLAuthenticationChallenge)
```

## Parameters

- `credential`: The credential to use for authentication.
- `challenge`: The challenge for which to use `credential`.

<a id="Discussion"></a>

## Discussion

This method has no effect if it is called with an authentication challenge that has already been handled.

## See Also

### Protocol Methods

- [cancel(\_:)](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredential(for:)](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [performDefaultHandling(for:)](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinue(with:)](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

# useCredential:forAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to use a given credential for a given authentication challenge.

## Declaration

```objectivec
- (void) useCredential:(NSURLCredential *) credential forAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `credential`: The credential to use for authentication.
- `challenge`: The challenge for which to use `credential`.

<a id="Discussion"></a>

## Discussion

This method has no effect if it is called with an authentication challenge that has already been handled.

## See Also

### Protocol Methods

- [cancelAuthenticationChallenge:](cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredentialForAuthenticationChallenge:](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [performDefaultHandlingForAuthenticationChallenge:](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinueWithChallenge:](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.
