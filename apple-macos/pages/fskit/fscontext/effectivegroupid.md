> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontext/effectivegroupid](https://developer.apple.com/documentation/fskit/fscontext/effectivegroupid)

# effectiveGroupID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s effective group ID.

## Declaration

```swift
var effectiveGroupID: Int { get }
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.

# effectiveGroupID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The caller’s effective group ID.

## Declaration

```objectivec
@property (readonly) NSInteger effectiveGroupID;
```

## See Also

### Accessing context properties

- [realUserID](realuserid.md): The caller’s real user ID.
- [effectiveUserID](effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](realgroupid.md): The caller’s real group ID.
