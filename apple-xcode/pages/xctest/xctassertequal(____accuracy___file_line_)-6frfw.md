> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertequal(_:_:accuracy:_:file:line:)-6frfw](https://developer.apple.com/documentation/xctest/xctassertequal(_:_:accuracy:_:file:line:)-6frfw)

# XCTAssertEqual(\_:\_:accuracy:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that two floating-point values are equal within a specified accuracy.

## Declaration

```swift
func XCTAssertEqual<T>(_ expression1: @autoclosure () throws -> T, _ expression2: @autoclosure () throws -> T, accuracy: T, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line) where T : FloatingPoint
```

## Parameters

- `expression1`: An expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).
- `expression2`: A second expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).
- `accuracy`: An expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint). This parameter describes the maximum difference between `expression1` and `expression2` for these values to be considered equal.
- `message`: An optional description of a failure.
- `file`: The file where the failure occurs. The default is the filename of the test case where you call this function.
- `line`: The line number where the failure occurs. The default is the line number where you call this function.

<a id="Discussion"></a>

## Discussion

`expression1`, `expression2`, and `accuracy` must all be of the same type `T`, and type T must conform to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).

## See Also

### Tests for Equality Within a Specified Accuracy

- [XCTAssertEqual(\_:\_:accuracy:\_:file:line:)](xctassertequal%28____accuracy___file_line_%29-4epu5.md): Asserts that two numeric values are equal within a specified accuracy.
- [XCTAssertNotEqual(\_:\_:accuracy:\_:file:line:)](xctassertnotequal%28____accuracy___file_line_%29-7jcd6.md): Asserts that two floating-point values aren’t equal within a specified accuracy.
- [XCTAssertNotEqual(\_:\_:accuracy:\_:file:line:)](xctassertnotequal%28____accuracy___file_line_%29-326vc.md): Asserts that two numeric values aren’t equal within a specified accuracy.
