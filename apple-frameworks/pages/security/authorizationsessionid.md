> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationsessionid](https://developer.apple.com/documentation/security/authorizationsessionid)

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
