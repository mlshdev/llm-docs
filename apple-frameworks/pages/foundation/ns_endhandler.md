> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/ns_endhandler](https://developer.apple.com/documentation/foundation/ns_endhandler)

# NS_ENDHANDLER

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the end of the local event handler.

## Declaration

```objectivec
#define NS_ENDHANDLER
```

<a id="Discussion"></a>

## Discussion

The `NS_ENDHANDLER` marks the end of a section of code that is a local exception handler. (The [NS_HANDLER](ns_handler.md)macros marks the beginning of this section.) If an exception is raised in the exception handling domain marked off by the [NS_DURING](ns_during.md) and [NS_HANDLER](ns_handler.md), the local exception handler (if specified) is given a chance to handle the exception.

## See Also

### Legacy Macros

- [NS_DURING](ns_during.md): Marks the start of the exception-handling domain.
- [NS_HANDLER](ns_handler.md): Marks the end of the exception-handling domain and the start of the local exception handler.
- [NS_VALUERETURN](ns_valuereturn.md): Permits program control to exit from an exception-handling domain with a value of a specified type.
- [NS_VOIDRETURN](ns_voidreturn.md): Permits program control to exit from an exception-handling domain.
