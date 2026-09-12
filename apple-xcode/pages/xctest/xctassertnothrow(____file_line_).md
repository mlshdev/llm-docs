> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnothrow(_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertnothrow(_:_:file:line:))

# XCTAssertNoThrow(\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that an expression doesn’t throw an error.

## Declaration

```swift
func XCTAssertNoThrow<T>(_ expression: @autoclosure () throws -> T, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line)
```

## Parameters

- `expression`: An expression that can throw an error.
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.
