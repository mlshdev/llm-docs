> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clservicesessiondiagnostic/alwaysauthorizationdenied](https://developer.apple.com/documentation/corelocation/clservicesessiondiagnostic/alwaysauthorizationdenied)

# alwaysAuthorizationDenied

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates someone has not granted the always authorization to your app.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL alwaysAuthorizationDenied;
```

<a id="Discussion"></a>

## Discussion

This property is `true` in the `CLServiceSessionDiagnostic` of a `CLServiceSession` created with an [CLServiceSession.AuthorizationRequirement.always](../clservicesession-pt7n/authorizationrequirement/always.md)  goal if someone denies the app that authorization; otherwise `false`.
