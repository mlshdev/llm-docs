> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/birthtime](https://developer.apple.com/documentation/fskit/fsitem/attributes/birthtime)

# birthTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s creation time.

## Declaration

```swift
var birthTime: timespec { get set }
```

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.

# birthTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s creation time.

## Declaration

```objectivec
@property (nonatomic) struct timespec birthTime;
```

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.
