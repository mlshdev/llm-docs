> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/teardown()](https://developer.apple.com/documentation/xctest/xctest/teardown())

# tearDown() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup after each test method in a test case ends.

## Declaration

```swift
func tearDown()
```

<a id="Discussion"></a>

## Discussion

After each test completes, `XCTest` calls [tearDown()](teardown%28%29.md), then `tearDownWithError()`, followed by [tearDown(completion:)](teardown%28completion_%29.md). Override this method to perform any per-test cleanup.

If state cleanup might throw errors, override [tearDownWithError()](teardownwitherror%28%29.md) or [tearDown(completion:)](teardown%28completion_%29.md) instead. `XCTest` marks the test failed when when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Related Documentation

- [tearDown()](../xctestcase/teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.

### Setting Up and Tearing Down

- [setUp(completion:)](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError()](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp()](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDown(completion:)](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError()](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.

# tearDown (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup after each test method in a test case ends.

## Declaration

```objectivec
- (void) tearDown;
```

<a id="Discussion"></a>

## Discussion

After each test completes, `XCTest` calls [tearDown](teardown%28%29.md), then `tearDownWithError()`, followed by [tearDownWithCompletionHandler:](teardown%28completion_%29.md). Override this method to perform any per-test cleanup.

If state cleanup might throw errors, override [tearDownWithError:](teardownwitherror%28%29.md) or [tearDownWithCompletionHandler:](teardown%28completion_%29.md) instead. `XCTest` marks the test failed when when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Related Documentation

- [tearDown](../xctestcase/teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError:](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithCompletionHandler:](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError:](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
