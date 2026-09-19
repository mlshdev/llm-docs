> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/useridentity/erasetoanyuseridentity()

# eraseToAnyUserIdentity()

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Wraps this user identity with a type eraser.

## Declaration

```swift
func eraseToAnyUserIdentity() -> AnyUserIdentity
```

## Default Implementations

### UserIdentity Implementations

- [eraseToAnyUserIdentity()](erasetoanyuseridentity%28%29-1di4z.md): Wraps this user identity with a type eraser.

## See Also

### Getting a type eraser

- [UserIdentity.As](as.md): An alias for [UserIdentityFactory](../useridentityfactory.md) for convenience.
