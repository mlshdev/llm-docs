> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctasserttrue(_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctasserttrue(_:_:file:line:))

# XCTAssertTrue(\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that an expression is true.

## Declaration

```swift
func XCTAssertTrue(_ expression: @autoclosure () throws -> Bool, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line)
```

## Parameters

- `expression`: An expression of Boolean type.
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == false` and is equivalent to [XCTAssert(\_:\_:file:line:)](xctassert%28____file_line_%29.md).

## See Also

### Tests for True Conditions

- [XCTAssert(\_:\_:file:line:)](xctassert%28____file_line_%29.md): Asserts that an expression is true.
