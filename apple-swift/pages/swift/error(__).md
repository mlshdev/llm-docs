> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/error(_:)](https://developer.apple.com/documentation/swift/error(_:))

# error(\_:)

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Emits the given message as a fatal error and terminates the compilation process.

## Declaration

```swift
@freestanding(declaration) macro error(_ message: String)
```

## Parameters

- `message`: The error message.

## See Also

### Generating Compile-Time Diagnostics

- [warning(\_:)](warning%28__%29.md): Produces the given warning message during compilation.
