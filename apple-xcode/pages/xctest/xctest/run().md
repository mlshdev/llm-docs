> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/run()](https://developer.apple.com/documentation/xctest/xctest/run())

# run() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a test run instance and starts the test.

## Declaration

```swift
func run()
```

<a id="Discussion"></a>

## Discussion

Creates an instance of the class that [testRunClass](testrunclass.md) specifies, and passes it as a parameter to the [perform(\_:)](perform%28__%29.md) method.

## See Also

### Running Tests

- [perform(\_:)](perform%28__%29.md): Executes a specific test.

# runTest (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a test run instance and starts the test.

## Declaration

```objectivec
- (void) runTest;
```

<a id="Discussion"></a>

## Discussion

Creates an instance of the class that [testRunClass](testrunclass.md) specifies, and passes it as a parameter to the [performTest:](perform%28__%29.md) method.

## See Also

### Running Tests

- [performTest:](perform%28__%29.md): Executes a specific test.
