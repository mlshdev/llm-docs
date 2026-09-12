> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/stop()](https://developer.apple.com/documentation/xctest/xctestrun/stop())

# stop() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Stops a test run.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

This method must not be called unless the run has been started, and must not be called more than once.

## See Also

### Performing Test Runs

- [start()](start%28%29.md): Starts a test run.
- [record(\_:)](record%28__%29.md): Records an issue during test execution for the test run.

# stop (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Stops a test run.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

This method must not be called unless the run has been started, and must not be called more than once.

## See Also

### Performing Test Runs

- [start](start%28%29.md): Starts a test run.
- [recordIssue:](record%28__%29.md): Records an issue during test execution for the test run.
