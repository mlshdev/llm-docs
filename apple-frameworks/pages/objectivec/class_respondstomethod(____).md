> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_respondstomethod(_:_:)](https://developer.apple.com/documentation/objectivec/class_respondstomethod(_:_:))

# class_respondsToMethod(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 1.0)

> use class_respondsToSelector instead

## Declaration

```swift
func class_respondsToMethod(_ cls: AnyClass?, _ sel: Selector) -> Bool
```

## See Also

### Functions

- [autoreleasepool(invoking:)](autoreleasepool%28invoking_%29.md)
- [class_lookupMethod(\_:\_:)](class_lookupmethod%28____%29.md): Deprecated.
- [objc_addExceptionHandler(\_:\_:)](objc_addexceptionhandler%28____%29.md)
- [objc_addLoadImageFunc(\_:)](objc_addloadimagefunc%28__%29.md)
- [objc_assertRegisteredThreadWithCollector()](objc_assertregisteredthreadwithcollector%28%29.md): Deprecated.
- [objc_begin_catch(\_:)](objc_begin_catch%28__%29.md)
- [objc_clear_stack(\_:)](objc_clear_stack%28__%29.md): Deprecated.
- [objc_collect(\_:)](objc_collect%28__%29.md): Deprecated.
- [objc_collectableZone()](objc_collectablezone%28%29.md): Deprecated.
- [objc_collecting_enabled()](objc_collecting_enabled%28%29.md): Deprecated.
- [objc_collectingEnabled()](objc_collectingenabled%28%29.md): Deprecated.
- [objc_end_catch()](objc_end_catch%28%29.md)
- [objc_enumerateClasses(fromImage:matchingNamePrefix:conformingTo:subclassing:)](objc_enumerateclasses%28fromimage_matchingnameprefix_conformingto_subclassing_%29.md)
- [objc_exception_rethrow()](objc_exception_rethrow%28%29.md)
- [objc_exception_throw(\_:)](objc_exception_throw%28__%29.md): Throw a runtime exception. This function is inserted by the compiler where \\c @throw would otherwise be.

# class_respondsToMethod (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 1.0)

> use class_respondsToSelector instead

## Declaration

```objectivec
extern BOOL class_respondsToMethod(Class cls, SEL sel);
```

## See Also

### Functions

- [class_createInstanceFromZone](class_createinstancefromzone.md): Deprecated.
- [class_lookupMethod](class_lookupmethod%28____%29.md): Deprecated.
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
- [NXInitHashState](nxinithashstate.md): Deprecated.
