> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertidentical(_:_:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertidentical(_:_:_:file:line:))

# XCTAssertIdentical(\_:\_:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that two values are identical.

## Declaration

```swift
func XCTAssertIdentical(_ expression1: @autoclosure () throws -> AnyObject?, _ expression2: @autoclosure () throws -> AnyObject?, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line)
```

## Parameters

- `expression1`: An optional expression of type [AnyObject](https://developer.apple.com/documentation/swift/anyobject).
- `expression2`: A second optional expression of type [AnyObject](https://developer.apple.com/documentation/swift/anyobject).
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

<a id="Discussion"></a>

## Discussion

Compare two optional values of types that conform to `AnyObject`. The values are identical if they’re the same instance.

## See Also

### Tests for Identical Objects

- [XCTAssertNotIdentical(\_:\_:\_:file:line:)](xctassertnotidentical%28______file_line_%29.md): Asserts that two values aren’t identical.
