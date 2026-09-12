> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotnil(_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertnotnil(_:_:file:line:))

# XCTAssertNotNil(\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that an expression is not `nil`.

## Declaration

```swift
func XCTAssertNotNil(_ expression: @autoclosure () throws -> Any?, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line)
```

## Parameters

- `expression`: An expression of type `Any?` to compare against `nil`.
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == nil`.

## See Also

### Tests for a Non-Nil Condition

- [XCTUnwrap(\_:\_:file:line:)](xctunwrap%28____file_line_%29.md): Asserts that an expression is not `nil,` and returns the unwrapped value.
