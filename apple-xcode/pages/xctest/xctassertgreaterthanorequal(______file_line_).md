> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertgreaterthanorequal(_:_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertgreaterthanorequal(_:_:_:file:line:))

# XCTAssertGreaterThanOrEqual(\_:\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that the value of the first expression is greater than or equal to the value of the second expression.

## Declaration

```swift
func XCTAssertGreaterThanOrEqual<T>(_ expression1: @autoclosure () throws -> T, _ expression2: @autoclosure () throws -> T, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line) where T : Comparable
```

## Parameters

- `expression1`: An expression of type `T`, where `T` is [Comparable](https://developer.apple.com/documentation/swift/comparable).
- `expression2`: A second expression of type `T`, where `T` is [Comparable](https://developer.apple.com/documentation/swift/comparable).
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

## See Also

### Tests for Comparable Values

- [XCTAssertGreaterThan(\_:\_:\_:file:line:)](xctassertgreaterthan%28______file_line_%29.md): Asserts that the value of the first expression is greater than the value of the second expression.
- [XCTAssertLessThanOrEqual(\_:\_:\_:file:line:)](xctassertlessthanorequal%28______file_line_%29.md): Asserts that the value of the first expression is less than or equal to the value of the second expression.
- [XCTAssertLessThan(\_:\_:\_:file:line:)](xctassertlessthan%28______file_line_%29.md): Asserts that the value of the first expression is less than the value of the second expression.
