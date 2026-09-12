> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsresource/isrevoked](https://developer.apple.com/documentation/fskit/fsresource/isrevoked)

# isRevoked (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the resource is revoked.

## Declaration

```swift
var isRevoked: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this is a proxy resource, the value of this property is always `true` (Swift) or `YES` (Objective-C).

## See Also

### Revoking the resource

- [revoke()](revoke%28%29.md): Revokes the resource.

# revoked (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the resource is revoked.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRevoked) BOOL revoked;
```

<a id="discussion"></a>

## Discussion

If this is a proxy resource, the value of this property is always `true` (Swift) or `YES` (Objective-C).

## See Also

### Revoking the resource

- [revoke](revoke%28%29.md): Revokes the resource.
