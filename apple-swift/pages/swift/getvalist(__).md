> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/getvalist(_:)](https://developer.apple.com/documentation/swift/getvalist(_:))

# getVaList(\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `CVaListPointer` that is backed by autoreleased storage, built from the given array of arguments.

## Declaration

```swift
func getVaList(_ args: [any CVarArg]) -> CVaListPointer
```

## Parameters

- `args`: An array of arguments to convert to a C `va_list` pointer.

<a id="return-value"></a>

## Return Value

A pointer that can be used with C functions that take a `va_list` argument.

## Mentioned In

- [Using Imported C Functions in Swift](using-imported-c-functions-in-swift.md)

<a id="discussion"></a>

## Discussion

You should prefer `withVaList(_:_:)` instead of this function. In some uses, such as in a `class` initializer, you may find that the language rules do not allow you to use `withVaList(_:_:)` as intended.

If you need to pass an optional pointer as a `CVarArg` argument, use the `Int(bitPattern:)` initializer to interpret the optional pointer as an `Int` value, which has the same C variadic calling conventions as a pointer on all supported platforms.

## See Also

### C Variadic Functions

- [withVaList(\_:\_:)](withvalist%28____%29.md): Invokes the given closure with a C `va_list` argument derived from the given array of arguments.
- [CVaListPointer](cvalistpointer.md)
- [CVarArg](cvararg.md): A type whose instances can be encoded, and appropriately passed, as elements of a C `va_list`.
