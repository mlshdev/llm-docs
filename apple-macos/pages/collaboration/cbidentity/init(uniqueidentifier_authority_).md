> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/collaboration/cbidentity/init(uniqueidentifier:authority:)

# init(uniqueIdentifier:authority:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.11+

## Declaration

```swift
init?(uniqueIdentifier uuid: UUID, authority: CBIdentityAuthority)
```

# identityWithUniqueIdentifier:authority: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.11+

## Declaration

```objectivec
+ (CBIdentity *) identityWithUniqueIdentifier:(NSUUID *) uuid authority:(CBIdentityAuthority *) authority;
```
