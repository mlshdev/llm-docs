> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotequal(_:_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertnotequal(_:_:_:file:line:))

# XCTAssertNotEqual(\_:\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that two values are not equal.

## Declaration

```swift
func XCTAssertNotEqual<T>(_ expression1: @autoclosure () throws -> T, _ expression2: @autoclosure () throws -> T, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line) where T : Equatable
```

## Parameters

- `expression1`: An expression of type `T`, where `T` is `Equatable`.
- `expression2`: A second expression of type `T`, where `T` is `Equatable`.
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

## See Also

### Tests for Equality and Inequality

- [XCTAssertEqual(\_:\_:\_:file:line:)](xctassertequal%28______file_line_%29.md): Asserts that two values are equal.
