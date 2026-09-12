> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsuinteger](https://developer.apple.com/documentation/objectivec/nsuinteger)

# NSUInteger

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes an unsigned integer.

## Declaration

```objectivec
typedef unsigned long NSUInteger;
```

<a id="Discussion"></a>

## Discussion

When building 32-bit applications, NSUInteger is a 32-bit unsigned integer. A 64-bit application treats NSUInteger as a 64-bit unsigned integer

## Topics

### Constants

- [NSUIntegerMax](nsuintegermax.md): The maximum value for an `NSUInteger`.

## See Also

### Data Types

- [NSInteger](nsinteger.md): Describes an integer.
- [objc_exception_handler](objc_exception_handler.md)
- [objc_exception_matcher](objc_exception_matcher.md)
- [objc_exception_preprocessor](objc_exception_preprocessor.md)
- [objc_func_loadImage](objc_func_loadimage.md)
- [objc_hook_getClass](objc_hook_getclass.md)
- [objc_hook_getImageName](objc_hook_getimagename.md)
- [objc_hook_lazyClassNamer](objc_hook_lazyclassnamer.md)
- [objc_objectptr_t](objc_objectptr_t.md)
- [objc_uncaught_exception_handler](objc_uncaught_exception_handler.md)
- [objc_zone_t](objc_zone_t.md)
