> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fatalerror(_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror(_:file:line:))

# fatalError(\_:file:line:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unconditionally prints a given message and stops execution.

## Declaration

```swift
func fatalError(_ message: @autoclosure () -> String = String(), file: StaticString = #file, line: UInt = #line) -> Never
```

## Parameters

- `message`: The string to print. The default is an empty string.
- `file`: The file name to print with `message`. The default is the file where `fatalError(_:file:line:)` is called.
- `line`: The line number to print along with `message`. The default is the line number where `fatalError(_:file:line:)` is called.

## See Also

### Exiting a Program

- [Never](never.md): A type that has no values and can’t be constructed.
