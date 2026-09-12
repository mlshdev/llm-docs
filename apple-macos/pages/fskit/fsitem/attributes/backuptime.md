> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/backuptime](https://developer.apple.com/documentation/fskit/fsitem/attributes/backuptime)

# backupTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-backup time.

## Declaration

```swift
var backupTime: timespec { get set }
```

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [addedTime](addedtime.md): The item’s added time.

# backupTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-backup time.

## Declaration

```objectivec
@property (nonatomic) struct timespec backupTime;
```

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [addedTime](addedtime.md): The item’s added time.
