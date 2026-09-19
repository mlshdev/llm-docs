> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsitem/attributes/modifytime

# modifyTime (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-modified time.

## Declaration

```swift
var modifyTime: timespec { get set }
```

<a id="discussion"></a>

## Discussion

This property represents `mtime`, the last time the item’s contents changed.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.

# modifyTime (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item’s last-modified time.

## Declaration

```objectivec
@property (nonatomic) struct timespec modifyTime;
```

<a id="discussion"></a>

## Discussion

This property represents `mtime`, the last time the item’s contents changed.

## See Also

### Working with time attributes

- [accessTime](accesstime.md): The item’s last-accessed time.
- [changeTime](changetime.md): The item’s last-changed time.
- [birthTime](birthtime.md): The item’s creation time.
- [backupTime](backuptime.md): The item’s last-backup time.
- [addedTime](addedtime.md): The item’s added time.
