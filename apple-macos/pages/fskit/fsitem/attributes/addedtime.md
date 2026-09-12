> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/addedtime](https://developer.apple.com/documentation/fskit/fsitem/attributes/addedtime)

# addedTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s added time.

## Declaration

```swift
var addedTime: timespec { get set }
```

<a id="discussion"></a>

## Discussion

This property represents the time the file system added the item to its parent directory.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.

# addedTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s added time.

## Declaration

```objectivec
@property (nonatomic) struct timespec addedTime;
```

<a id="discussion"></a>

## Discussion

This property represents the time the file system added the item to its parent directory.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
