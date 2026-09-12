> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445043-csbackupsetitemexcluded](https://developer.apple.com/documentation/coreservices/1445043-csbackupsetitemexcluded)

# CSBackupSetItemExcluded(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Includes or excludes an item from the backup.

## Declaration

```swift
func CSBackupSetItemExcluded(_ item: CFURL!, _ exclude: Bool, _ excludeByPath: Bool) -> OSStatus
```

## Parameters

- `item`: The URL of the file or folder to be included or excluded from the backup.
- `exclude`: Pass `true` to exclude this item from backup (Backup will not back up this item). Pass `false` to stop excluding this item (Backup will back up this item if the user so chooses).
- `excludeByPath`: Pass `true` to indicate that this item is excluded because of its location (its absolute path). Pass `false` to indicate that this item is excluded regardless of its location (and regardless of whether the user moves the item).

<a id="return_value"></a>

## Return Value

A result code. Returns `noErr` if the item was successfully included or excluded from the backup.

<a id="discussion"></a>

## Discussion

Backup skips files and folders marked for exclusion. If a folder is marked for exclusion, the folder and all its contents are excluded from the backup process. You can exclude specific paths that do not exist yet, but that you plan to create later, by passing the planned URL in `item` and passing `true` in `excludeByPath`. Note that if you pass `false` in `excludeByPath`, the URL must already exist. 

Your application can allow users to change the backup exclusion status of any file or folder to which it has write access. To change the backup exclusion status of a path, your application must be running with administrator privileges.

## See Also

### Managing an Item’s Backup Exclusion Status

- [CSBackupIsItemExcluded(\_:\_:)](1443602-csbackupisitemexcluded.md): Returns a Boolean value indicating whether an item is currently excluded from the backup.

# CSBackupSetItemExcluded (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Includes or excludes an item from the backup.

## Declaration

```objectivec
OSStatus CSBackupSetItemExcluded(CFURLRef item, Boolean exclude, Boolean excludeByPath);
```

## Parameters

- `item`: The URL of the file or folder to be included or excluded from the backup.
- `exclude`: Pass `true` to exclude this item from backup (Backup will not back up this item). Pass `false` to stop excluding this item (Backup will back up this item if the user so chooses).
- `excludeByPath`: Pass `true` to indicate that this item is excluded because of its location (its absolute path). Pass `false` to indicate that this item is excluded regardless of its location (and regardless of whether the user moves the item).

<a id="return_value"></a>

## Return Value

A result code. Returns `noErr` if the item was successfully included or excluded from the backup.

<a id="discussion"></a>

## Discussion

Backup skips files and folders marked for exclusion. If a folder is marked for exclusion, the folder and all its contents are excluded from the backup process. You can exclude specific paths that do not exist yet, but that you plan to create later, by passing the planned URL in `item` and passing `true` in `excludeByPath`. Note that if you pass `false` in `excludeByPath`, the URL must already exist. 

Your application can allow users to change the backup exclusion status of any file or folder to which it has write access. To change the backup exclusion status of a path, your application must be running with administrator privileges.

## See Also

### Managing an Item’s Backup Exclusion Status

- [CSBackupIsItemExcluded](1443602-csbackupisitemexcluded.md): Returns a Boolean value indicating whether an item is currently excluded from the backup.
