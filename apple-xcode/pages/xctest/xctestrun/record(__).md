> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/record(_:)](https://developer.apple.com/documentation/xctest/xctestrun/record(_:))

# record(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Records an issue during test execution for the test run.

## Declaration

```swift
func record(_ issue: XCTIssue)
```

```swift
func record(_ issue: XCTIssueReference)
```

## Parameters

- `issue`: The test issue to record.

<a id="Discussion"></a>

## Discussion

The test run records a failure or other issue during test execution with this method. Override to customize the issue, and call `super` unless you want to suppress the issue.

## See Also

### Performing Test Runs

- [start()](start%28%29.md): Starts a test run.
- [stop()](stop%28%29.md): Stops a test run.

# recordIssue: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Records an issue during test execution for the test run.

## Declaration

```objectivec
- (void) recordIssue:(XCTIssue *) issue;
```

## Parameters

- `issue`: The test issue to record.

<a id="Discussion"></a>

## Discussion

The test run records a failure or other issue during test execution with this method. Override to customize the issue, and call `super` unless you want to suppress the issue.

## See Also

### Performing Test Runs

- [start](start%28%29.md): Starts a test run.
- [stop](stop%28%29.md): Stops a test run.
