> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/assert(_:_:file:line:)](https://developer.apple.com/documentation/swift/assert(_:_:file:line:))

# assert(\_:\_:file:line:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a traditional C-style assert with an optional message.

## Declaration

```swift
func assert(_ condition: @autoclosure () -> Bool, _ message: @autoclosure () -> String = String(), file: StaticString = #file, line: UInt = #line)
```

## Parameters

- `condition`: The condition to test. `condition` is only evaluated in playgrounds and `-Onone` builds.
- `message`: A string to print if `condition` is evaluated to `false`. The default is an empty string.
- `file`: The file name to print with `message` if the assertion fails. The default is the file where `assert(_:_:file:line:)` is called.
- `line`: The line number to print along with `message` if the assertion fails. The default is the line number where `assert(_:_:file:line:)` is called.

<a id="discussion"></a>

## Discussion

Use this function for internal consistency checks that are active during testing but do not impact performance of shipping code. To check for invalid usage in Release builds, see `precondition(_:_:file:line:)`.

- In playgrounds and `-Onone` builds (the default for Xcode’s Debug configuration): If `condition` evaluates to `false`, stop program execution in a debuggable state after printing `message`.
- In `-O` builds (the default for Xcode’s Release configuration), `condition` is not evaluated, and there are no effects.
- In `-Ounchecked` builds, `condition` is not evaluated, but the optimizer may assume that it *always* evaluates to `true`. Failure to satisfy that assumption is a serious programming error.

## See Also

### Testing

- [assertionFailure(\_:file:line:)](assertionfailure%28__file_line_%29.md): Indicates that an internal consistency check failed.
- [precondition(\_:\_:file:line:)](precondition%28____file_line_%29.md): Checks a necessary condition for making forward progress.
- [preconditionFailure(\_:file:line:)](preconditionfailure%28__file_line_%29.md): Indicates that a precondition was violated.
