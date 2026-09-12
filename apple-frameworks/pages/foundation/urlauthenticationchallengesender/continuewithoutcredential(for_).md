> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallengesender/continuewithoutcredential(for:)](https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender/continuewithoutcredential(for:))

# continueWithoutCredential(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to continue downloading a request without providing a credential for a given challenge.

## Declaration

```swift
func continueWithoutCredential(for challenge: URLAuthenticationChallenge)
```

## Parameters

- `challenge`: A challenge without authentication credentials.

<a id="Discussion"></a>

## Discussion

This method has no effect if it is called with an authentication challenge that has already been handled.

## See Also

### Protocol Methods

- [cancel(\_:)](cancel%28__%29.md): Cancels a given authentication challenge.
- [use(\_:for:)](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandling(for:)](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinue(with:)](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

# continueWithoutCredentialForAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to continue downloading a request without providing a credential for a given challenge.

## Declaration

```objectivec
- (void) continueWithoutCredentialForAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `challenge`: A challenge without authentication credentials.

<a id="Discussion"></a>

## Discussion

This method has no effect if it is called with an authentication challenge that has already been handled.

## See Also

### Protocol Methods

- [cancelAuthenticationChallenge:](cancel%28__%29.md): Cancels a given authentication challenge.
- [useCredential:forAuthenticationChallenge:](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandlingForAuthenticationChallenge:](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinueWithChallenge:](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.
