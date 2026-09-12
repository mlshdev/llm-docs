> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_func_loadimage](https://developer.apple.com/documentation/objectivec/objc_func_loadimage)

# objc_func_loadImage (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
typealias objc_func_loadImage = (OpaquePointer) -> Void
```

```swift
typealias objc_func_loadImage = (UnsafePointer<mach_header>) -> Void
```

## See Also

### Data Types

- [NSInteger](nsinteger.md): Describes an integer.
- [objc_exception_handler](objc_exception_handler.md)
- [objc_exception_matcher](objc_exception_matcher.md)
- [objc_exception_preprocessor](objc_exception_preprocessor.md)
- [objc_hook_getClass](objc_hook_getclass.md)
- [objc_hook_getImageName](objc_hook_getimagename.md)
- [objc_hook_lazyClassNamer](objc_hook_lazyclassnamer.md)
- [objc_objectptr_t](objc_objectptr_t.md)
- [objc_uncaught_exception_handler](objc_uncaught_exception_handler.md)
- [objc_zone_t](objc_zone_t.md)

# objc_func_loadImage (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (*)(const struct mach_header *) objc_func_loadImage;
```

## See Also

### Data Types

- [NSInteger](nsinteger.md): Describes an integer.
- [NSUInteger](nsuinteger.md): Describes an unsigned integer.
- [objc_exception_handler](objc_exception_handler.md)
- [objc_exception_matcher](objc_exception_matcher.md)
- [objc_exception_preprocessor](objc_exception_preprocessor.md)
- [objc_hook_getClass](objc_hook_getclass.md)
- [objc_hook_getImageName](objc_hook_getimagename.md)
- [objc_hook_lazyClassNamer](objc_hook_lazyclassnamer.md)
- [objc_objectptr_t](objc_objectptr_t.md)
- [objc_uncaught_exception_handler](objc_uncaught_exception_handler.md)
- [objc_zone_t](objc_zone_t.md)
