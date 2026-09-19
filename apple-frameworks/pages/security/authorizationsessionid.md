> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationsessionid

# AuthorizationSessionId

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique value for an authorization session, provided by the authorization engine.

## Declaration

```objectivec
typedef void * AuthorizationSessionId;
```

<a id="Discussion"></a>

## Discussion

Use the [GetSessionId](authorizationcallbacks/getsessionid.md) function to retrieve the authorization session ID.
