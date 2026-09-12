> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/assertionfailure(_:file:line:)](https://developer.apple.com/documentation/swift/assertionfailure(_:file:line:))

# assertionFailure(\_:file:line:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that an internal consistency check failed.

## Declaration

```swift
func assertionFailure(_ message: @autoclosure () -> String = String(), file: StaticString = #file, line: UInt = #line)
```

## Parameters

- `message`: A string to print in a playground or `-Onone` build. The default is an empty string.
- `file`: The file name to print with `message`. The default is the file where `assertionFailure(_:file:line:)` is called.
- `line`: The line number to print along with `message`. The default is the line number where `assertionFailure(_:file:line:)` is called.

<a id="discussion"></a>

## Discussion

This function’s effect varies depending on the build flag used:

- In playgrounds and `-Onone` builds (the default for Xcode’s Debug configuration), stop program execution in a debuggable state after printing `message`.
- In `-O` builds, has no effect.
- In `-Ounchecked` builds, the optimizer may assume that this function is never called. Failure to satisfy that assumption is a serious programming error.

## See Also

### Testing

- [assert(\_:\_:file:line:)](assert%28____file_line_%29.md): Performs a traditional C-style assert with an optional message.
- [precondition(\_:\_:file:line:)](precondition%28____file_line_%29.md): Checks a necessary condition for making forward progress.
- [preconditionFailure(\_:file:line:)](preconditionfailure%28__file_line_%29.md): Indicates that a precondition was violated.
