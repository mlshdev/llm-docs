> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/issuetype/system](https://developer.apple.com/documentation/xctest/xctissuereference/issuetype/system)

# XCTIssueReference.IssueType.system (Swift)

**Framework:** XCTest  
**Kind:** Case

A test failure due to an internal failure in the testing framework.

## Declaration

```swift
case system
```

<a id="Discussion"></a>

## Discussion

This type of failure could happen if `XCUIApplication` was unable to launch or terminate an app, or if `XCUIElementQuery` was unable to complete a query.

## See Also

### Issue Types

- [XCTIssueReference.IssueType.assertionFailure](assertionfailure.md): A test failure due to a failed test assertion or related API.
- [XCTIssueReference.IssueType.performanceRegression](performanceregression.md): A test failure due to a performance regression.
- [XCTIssueReference.IssueType.thrownError](thrownerror.md): A test failure when the test throws an error in Swift.
- [XCTIssueReference.IssueType.uncaughtException](uncaughtexception.md): A test failure when code throws an exception and doesn’t catch it.
- [XCTIssueReference.IssueType.unmatchedExpectedFailure](unmatchedexpectedfailure.md): A test failure due to an expected test failure that doesn’t occur.

# XCTIssueTypeSystem (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

A test failure due to an internal failure in the testing framework.

## Declaration

```objectivec
XCTIssueTypeSystem
```

<a id="Discussion"></a>

## Discussion

This type of failure could happen if `XCUIApplication` was unable to launch or terminate an app, or if `XCUIElementQuery` was unable to complete a query.

## See Also

### Issue Types

- [XCTIssueTypeAssertionFailure](assertionfailure.md): A test failure due to a failed test assertion or related API.
- [XCTIssueTypePerformanceRegression](performanceregression.md): A test failure due to a performance regression.
- [XCTIssueTypeThrownError](thrownerror.md): A test failure when the test throws an error in Swift.
- [XCTIssueTypeUncaughtException](uncaughtexception.md): A test failure when code throws an exception and doesn’t catch it.
- [XCTIssueTypeUnmatchedExpectedFailure](unmatchedexpectedfailure.md): A test failure due to an expected test failure that doesn’t occur.
