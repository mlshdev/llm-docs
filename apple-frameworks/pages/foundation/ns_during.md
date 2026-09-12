> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/ns_during](https://developer.apple.com/documentation/foundation/ns_during)

# NS_DURING

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the start of the exception-handling domain.

## Declaration

```objectivec
#define NS_DURING
```

<a id="Discussion"></a>

## Discussion

The `NS_DURING` macro marks the start of the exception-handling domain for a section of code. (The [NS_HANDLER](ns_handler.md)macro marks the end of the domain.) Within the exception-handling domain you can raise an exception, giving the local exception handler (or lower exception handlers) a chance to handle it.

## See Also

### Legacy Macros

- [NS_ENDHANDLER](ns_endhandler.md): Marks the end of the local event handler.
- [NS_HANDLER](ns_handler.md): Marks the end of the exception-handling domain and the start of the local exception handler.
- [NS_VALUERETURN](ns_valuereturn.md): Permits program control to exit from an exception-handling domain with a value of a specified type.
- [NS_VOIDRETURN](ns_voidreturn.md): Permits program control to exit from an exception-handling domain.
