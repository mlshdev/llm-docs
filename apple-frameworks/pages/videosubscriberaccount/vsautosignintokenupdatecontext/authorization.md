> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsautosignintokenupdatecontext/authorization

# authorization

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+

A state that represents a person’s approval of Automatic Sign-In.

## Declaration

```objectivec
@property (nonatomic, readonly) VSAutoSignInAuthorization authorization;
```

<a id="discussion"></a>

## Discussion

If the person approves the prompt to enable Automatic Sign-In, the framework sets the value to [VSAutoSignInAuthorizationGranted](../vsautosigninauthorization/vsautosigninauthorizationgranted.md). If the person denies the prompt, the framework sets the value to [VSAutoSignInAuthorizationDenied](../vsautosigninauthorization/vsautosigninauthorizationdenied.md).
