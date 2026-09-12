> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/issuetype](https://developer.apple.com/documentation/xctest/xctissuereference/issuetype)

# XCTIssueReference.IssueType (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

Constants that indicate types of test failures, such as assertion failures, performance regressions, or thrown errors.

## Declaration

```swift
enum IssueType
```

## Topics

### Issue Types

- [XCTIssueReference.IssueType.assertionFailure](issuetype/assertionfailure.md): A test failure due to a failed test assertion or related API.
- [XCTIssueReference.IssueType.performanceRegression](issuetype/performanceregression.md): A test failure due to a performance regression.
- [XCTIssueReference.IssueType.system](issuetype/system.md): A test failure due to an internal failure in the testing framework.
- [XCTIssueReference.IssueType.thrownError](issuetype/thrownerror.md): A test failure when the test throws an error in Swift.
- [XCTIssueReference.IssueType.uncaughtException](issuetype/uncaughtexception.md): A test failure when code throws an exception and doesn’t catch it.
- [XCTIssueReference.IssueType.unmatchedExpectedFailure](issuetype/unmatchedexpectedfailure.md): A test failure due to an expected test failure that doesn’t occur.

### Initializers

- [init(rawValue:)](issuetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCTIssueType (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

Constants that indicate types of test failures, such as assertion failures, performance regressions, or thrown errors.

## Declaration

```objectivec
enum XCTIssueType : NSInteger;
```

## Topics

### Issue Types

- [XCTIssueTypeAssertionFailure](issuetype/assertionfailure.md): A test failure due to a failed test assertion or related API.
- [XCTIssueTypePerformanceRegression](issuetype/performanceregression.md): A test failure due to a performance regression.
- [XCTIssueTypeSystem](issuetype/system.md): A test failure due to an internal failure in the testing framework.
- [XCTIssueTypeThrownError](issuetype/thrownerror.md): A test failure when the test throws an error in Swift.
- [XCTIssueTypeUncaughtException](issuetype/uncaughtexception.md): A test failure when code throws an exception and doesn’t catch it.
- [XCTIssueTypeUnmatchedExpectedFailure](issuetype/unmatchedexpectedfailure.md): A test failure due to an expected test failure that doesn’t occur.
