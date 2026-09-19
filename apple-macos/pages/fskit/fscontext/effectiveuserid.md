> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscontext/effectiveuserid

# effectiveUserID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s effective user ID.

## Declaration

```swift
var effectiveUserID: Int { get }
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.

# effectiveUserID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s effective user ID.

## Declaration

```objectivec
@property (readonly) NSInteger effectiveUserID;
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.
