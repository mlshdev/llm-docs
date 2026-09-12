> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationref](https://developer.apple.com/documentation/security/authorizationref)

# AuthorizationRef (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to an opaque authorization reference structure.

## Declaration

```swift
typealias AuthorizationRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

This data type points to a structure the Security Server uses to store information about the authorization session. Use the functions described in [Authorization Services](authorization-services.md) to create, access, and free the authorization reference.

# AuthorizationRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an opaque authorization reference structure.

## Declaration

```objectivec
typedef const struct AuthorizationOpaqueRef * AuthorizationRef;
```

<a id="Discussion"></a>

## Discussion

This data type points to a structure the Security Server uses to store information about the authorization session. Use the functions described in [Authorization Services](authorization-services.md) to create, access, and free the authorization reference.
