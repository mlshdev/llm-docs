> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontext/realuserid](https://developer.apple.com/documentation/fskit/fscontext/realuserid)

# realUserID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s real user ID.

## Declaration

```swift
var realUserID: Int { get }
```

## See Also

### Accessing context properties

- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.

# realUserID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s real user ID.

## Declaration

```objectivec
@property (readonly) NSInteger realUserID;
```

## See Also

### Accessing context properties

- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.
