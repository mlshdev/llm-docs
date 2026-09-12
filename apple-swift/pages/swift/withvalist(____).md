> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withvalist(_:_:)](https://developer.apple.com/documentation/swift/withvalist(_:_:))

# withVaList(\_:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes the given closure with a C `va_list` argument derived from the given array of arguments.

## Declaration

```swift
func withVaList<R>(_ args: [any CVarArg], _ body: (CVaListPointer) -> R) -> R
```

## Parameters

- `args`: An array of arguments to convert to a C `va_list` pointer.
- `body`: A closure with a `CVaListPointer` parameter that references the arguments passed as `args`. If `body` has a return value, that value is also used as the return value for the `withVaList(_:)` function. The pointer argument is valid only for the duration of the function’s execution.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

## Mentioned In

- [Using Imported C Functions in Swift](using-imported-c-functions-in-swift.md)

<a id="discussion"></a>

## Discussion

The pointer passed as an argument to `body` is valid only during the execution of `withVaList(_:_:)`. Do not store or return the pointer for later use.

If you need to pass an optional pointer as a `CVarArg` argument, use the `Int(bitPattern:)` initializer to interpret the optional pointer as an `Int` value, which has the same C variadic calling conventions as a pointer on all supported platforms.

## See Also

### C Variadic Functions

- [CVaListPointer](cvalistpointer.md)
- [CVarArg](cvararg.md): A type whose instances can be encoded, and appropriately passed, as elements of a C `va_list`.
- [getVaList(\_:)](getvalist%28__%29.md): Returns a `CVaListPointer` that is backed by autoreleased storage, built from the given array of arguments.
