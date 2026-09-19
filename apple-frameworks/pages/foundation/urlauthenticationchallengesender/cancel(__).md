> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender/cancel(_:)

# cancel(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels a given authentication challenge.

## Declaration

```swift
func cancel(_ challenge: URLAuthenticationChallenge)
```

## Parameters

- `challenge`: The authentication challenge to cancel.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Protocol Methods

- [continueWithoutCredential(for:)](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [use(\_:for:)](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandling(for:)](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinue(with:)](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

# cancelAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels a given authentication challenge.

## Declaration

```objectivec
- (void) cancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `challenge`: The authentication challenge to cancel.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Protocol Methods

- [continueWithoutCredentialForAuthenticationChallenge:](continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [useCredential:forAuthenticationChallenge:](use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandlingForAuthenticationChallenge:](performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinueWithChallenge:](rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.
