> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcaserun/recordfailure(intest:withdescription:infile:atline:expected:)](https://developer.apple.com/documentation/xctest/xctestcaserun/recordfailure(intest:withdescription:infile:atline:expected:))

# recordFailure(inTest:withDescription:inFile:atLine:expected:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Records a test failure during test execution for this test run.

> Use [record(\_:)](../xctestrun/record%28__%29.md) instead.

## Declaration

```swift
func recordFailure(inTest testCase: XCTestCase, withDescription description: String, inFile filePath: String, atLine lineNumber: Int, expected: Bool)
```

# recordFailureInTest:withDescription:inFile:atLine:expected: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Records a test failure during test execution for this test run.

> Use [recordIssue:](../xctestrun/record%28__%29.md) instead.

## Declaration

```objectivec
- (void) recordFailureInTest:(XCTestCase *) testCase withDescription:(NSString *) description inFile:(NSString *) filePath atLine:(NSUInteger) lineNumber expected:(BOOL) expected;
```
