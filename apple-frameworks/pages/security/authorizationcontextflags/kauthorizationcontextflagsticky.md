> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcontextflags/kauthorizationcontextflagsticky](https://developer.apple.com/documentation/security/authorizationcontextflags/kauthorizationcontextflagsticky)

# kAuthorizationContextFlagSticky

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This data persists through an interrupted or failed evaluation.

## Declaration

```objectivec
kAuthorizationContextFlagSticky
```

<a id="Discussion"></a>

## Discussion

This flag can be used to propagate an error condition from a downstream plug-in to an upstream one. It is not remembered in the authorization reference (see [Authorization Services](../authorization-services.md)).
