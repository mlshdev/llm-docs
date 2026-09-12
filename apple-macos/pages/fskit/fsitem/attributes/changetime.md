> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/changetime](https://developer.apple.com/documentation/fskit/fsitem/attributes/changetime)

# changeTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-changed time.

## Declaration

```swift
var changeTime: timespec { get set }
```

<a id="discussion"></a>

## Discussion

This property represents `ctime`, the last time the item’s metadata changed.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.

# changeTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-changed time.

## Declaration

```objectivec
@property (nonatomic) struct timespec changeTime;
```

<a id="discussion"></a>

## Discussion

This property represents `ctime`, the last time the item’s metadata changed.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [modifyTime](modifytime.md): The item’s last-modified time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.
