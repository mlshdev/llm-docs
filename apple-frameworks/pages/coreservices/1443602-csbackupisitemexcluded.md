> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443602-csbackupisitemexcluded](https://developer.apple.com/documentation/coreservices/1443602-csbackupisitemexcluded)

# CSBackupIsItemExcluded(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether an item is currently excluded from the backup.

## Declaration

```swift
func CSBackupIsItemExcluded(_ item: CFURL!, _ excludeByPath: UnsafeMutablePointer<DarwinBoolean>!) -> Bool
```

## Parameters

- `item`: The URL of the item.
- `excludeByPath`: If `true`, the item’s backup exclusion status applies to its location; if `false`, the item's backup exclusion status applies to itself, regardless of its location. See [CSBackupSetItemExcluded(\_:\_:\_:)](1445043-csbackupsetitemexcluded.md) for more information. Can be `NULL`.

<a id="return_value"></a>

## Return Value

`true` if the item or any of its ancestors are currently excluded from backup, `false` otherwise.

## See Also

### Managing an Item’s Backup Exclusion Status

- [CSBackupSetItemExcluded(\_:\_:\_:)](1445043-csbackupsetitemexcluded.md): Includes or excludes an item from the backup.

# CSBackupIsItemExcluded (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether an item is currently excluded from the backup.

## Declaration

```objectivec
Boolean CSBackupIsItemExcluded(CFURLRef item, Boolean *excludeByPath);
```

## Parameters

- `item`: The URL of the item.
- `excludeByPath`: If `true`, the item’s backup exclusion status applies to its location; if `false`, the item's backup exclusion status applies to itself, regardless of its location. See [CSBackupSetItemExcluded](1445043-csbackupsetitemexcluded.md) for more information. Can be `NULL`.

<a id="return_value"></a>

## Return Value

`true` if the item or any of its ancestors are currently excluded from backup, `false` otherwise.

## See Also

### Managing an Item’s Backup Exclusion Status

- [CSBackupSetItemExcluded](1445043-csbackupsetitemexcluded.md): Includes or excludes an item from the backup.
