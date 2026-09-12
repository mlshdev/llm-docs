> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/accesstime](https://developer.apple.com/documentation/fskit/fsitem/attributes/accesstime)

# accessTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-accessed time.

## Declaration

```swift
var accessTime: timespec { get set }
```

## See Also

### Working with time attributes

- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.

# accessTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-accessed time.

## Declaration

```objectivec
@property (nonatomic) struct timespec accessTime;
```

## See Also

### Working with time attributes

- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.
