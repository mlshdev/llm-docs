> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_enumerateclasses(fromimage:matchingnameprefix:conformingto:subclassing:)](https://developer.apple.com/documentation/objectivec/objc_enumerateclasses(fromimage:matchingnameprefix:conformingto:subclassing:))

# objc_enumerateClasses(fromImage:matchingNamePrefix:conformingTo:subclassing:)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
func objc_enumerateClasses(fromImage: ObjCEnumerationImage = .machHeader(#dsohandle), matchingNamePrefix: String? = nil, conformingTo: Protocol? = nil, subclassing: AnyClass? = nil) -> ObjCClassList
```

## See Also

### Functions

- [autoreleasepool(invoking:)](autoreleasepool%28invoking_%29.md)
- [class_lookupMethod(\_:\_:)](class_lookupmethod%28____%29.md): Deprecated.
- [class_respondsToMethod(\_:\_:)](class_respondstomethod%28____%29.md): Deprecated.
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
- [objc_exception_rethrow()](objc_exception_rethrow%28%29.md)
- [objc_exception_throw(\_:)](objc_exception_throw%28__%29.md): Throw a runtime exception. This function is inserted by the compiler where \\c @throw would otherwise be.
