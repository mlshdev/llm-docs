> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_enumerateclasses](https://developer.apple.com/documentation/objectivec/objc_enumerateclasses)

# objc_enumerateClasses

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
extern void objc_enumerateClasses(const void *image, const char *namePrefix, Protocol *conformingTo, Class subclassing, void (^)(Class, _Bool *)block);
```

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
