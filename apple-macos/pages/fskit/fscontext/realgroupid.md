> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontext/realgroupid](https://developer.apple.com/documentation/fskit/fscontext/realgroupid)

# realGroupID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s real group ID.

## Declaration

```swift
var realGroupID: Int { get }
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.

# realGroupID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s real group ID.

## Declaration

```objectivec
@property (readonly) NSInteger realGroupID;
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [effectiveGroupID](effectivegroupid.md): The caller’s effective group ID.
