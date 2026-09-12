> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsresource/revoke()](https://developer.apple.com/documentation/fskit/fsresource/revoke())

# revoke() (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Revokes the resource.

## Declaration

```swift
func revoke()
```

<a id="discussion"></a>

## Discussion

This method works by stripping away any underlying privileges associated with the resource. This effectively disconnects this object from its underlying resource.

## See Also

### Revoking the resource

- [isRevoked](isrevoked.md): A Boolean value that indicates whether the resource is revoked.

# revoke (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Revokes the resource.

## Declaration

```objectivec
- (void) revoke;
```

<a id="discussion"></a>

## Discussion

This method works by stripping away any underlying privileges associated with the resource. This effectively disconnects this object from its underlying resource.

## See Also

### Revoking the resource

- [revoked](isrevoked.md): A Boolean value that indicates whether the resource is revoked.
