> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/perform(_:)](https://developer.apple.com/documentation/xctest/xctest/perform(_:))

# perform(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Executes a specific test.

## Declaration

```swift
func perform(_ run: XCTestRun)
```

## Parameters

- `run`: The test run to perform.

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Running Tests

- [run()](run%28%29.md): Creates a test run instance and starts the test.

# performTest: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Executes a specific test.

## Declaration

```objectivec
- (void) performTest:(XCTestRun *) run;
```

## Parameters

- `run`: The test run to perform.

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Running Tests

- [runTest](run%28%29.md): Creates a test run instance and starts the test.
