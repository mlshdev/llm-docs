> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_sync_exit](https://developer.apple.com/documentation/objectivec/objc_sync_exit)

# objc_sync_exit

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

End synchronizing on ‘obj’.

## Declaration

```objectivec
extern int objc_sync_exit(id obj);
```

## Parameters

- `obj`: The object to end synchronizing on.

<a id="return-value"></a>

## Return Value

OBJC_SYNC_SUCCESS or OBJC_SYNC_NOT_OWNING_THREAD_ERROR

## See Also

### Functions

- [class_createInstanceFromZone](class_createinstancefromzone.md): Deprecated.
- [class_lookupMethod](class_lookupmethod%28____%29.md): Deprecated.
- [class_respondsToMethod](class_respondstomethod%28____%29.md): Deprecated.
- [NXCompareHashTables](nxcomparehashtables.md): Deprecated.
- [NXCopyHashTable](nxcopyhashtable.md): Deprecated.
- [NXCountHashTable](nxcounthashtable.md): Deprecated.
- [NXCreateHashTable](nxcreatehashtable.md): Deprecated.
- [NXCreateHashTableFromZone](nxcreatehashtablefromzone.md): Deprecated.
- [NXEmptyHashTable](nxemptyhashtable.md): Deprecated.
- [NXFreeHashTable](nxfreehashtable.md): Deprecated.
- [NXHashGet](nxhashget.md): Deprecated.
- [NXHashInsert](nxhashinsert.md): Deprecated.
- [NXHashInsertIfAbsent](nxhashinsertifabsent.md): Deprecated.
- [NXHashMember](nxhashmember.md): Deprecated.
- [NXHashRemove](nxhashremove.md): Deprecated.
