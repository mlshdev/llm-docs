> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertequalwithaccuracy(_:_:accuracy:_:file:line:)](https://developer.apple.com/documentation/xctest/xctassertequalwithaccuracy(_:_:accuracy:_:file:line:))

# XCTAssertEqualWithAccuracy(\_:\_:accuracy:\_:file:line:)

**Framework:** XCTest  
**Kind:** Function

Asserts that two values are equal within a certain accuracy.

> Use [XCTAssertEqual(\_:\_:accuracy:\_:file:line:)](xctassertequal%28____accuracy___file_line_%29-6frfw.md) instead.

## Declaration

```swift
func XCTAssertEqualWithAccuracy<T>(_ expression1: @autoclosure () throws -> T, _ expression2: @autoclosure () throws -> T, accuracy: T, _ message: @autoclosure () -> String = "", file: StaticString = #filePath, line: UInt = #line) where T : FloatingPoint
```

## Parameters

- `expression1`: An expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).
- `expression2`: An expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).
- `accuracy`: An expression of type `T`, where `T` conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint). Describes the maximum difference between `expression1` and `expression2` for these values to be considered equal.
- `message`: An optional description of the failure.
- `file`: The file in which failure occurred. Defaults to the file name of the test case in which this function was called.
- `line`: The line number on which failure occurred. Defaults to the line number on which this function was called.

<a id="Discussion"></a>

## Discussion

`expression1`, `expression2`, and `accuracy` must all be of the same type `T` that conforms to [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint).

## See Also

### Deprecated Functions

- [XCTSelfTestMain()](xctselftestmain%28%29.md): Deprecated.
- [XCTAssertNotEqualWithAccuracy(\_:\_:\_:\_:file:line:)](xctassertnotequalwithaccuracy%28________file_line_%29.md): Deprecated. Asserts that two values are not equal within a certain accuracy.
