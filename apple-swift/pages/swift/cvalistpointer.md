> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/cvalistpointer](https://developer.apple.com/documentation/swift/cvalistpointer)

# CVaListPointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@frozen struct CVaListPointer
```

## Mentioned In

- [Using Imported C Functions in Swift](using-imported-c-functions-in-swift.md)

## Topics

### Default Implementations

- [CustomDebugStringConvertible Implementations](cvalistpointer/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [Escapable](escapable.md)

## See Also

### C Variadic Functions

- [withVaList(\_:\_:)](withvalist%28____%29.md): Invokes the given closure with a C `va_list` argument derived from the given array of arguments.
- [CVarArg](cvararg.md): A type whose instances can be encoded, and appropriately passed, as elements of a C `va_list`.
- [getVaList(\_:)](getvalist%28__%29.md): Returns a `CVaListPointer` that is backed by autoreleased storage, built from the given array of arguments.
