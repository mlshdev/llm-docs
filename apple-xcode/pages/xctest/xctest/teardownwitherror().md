> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/teardownwitherror()](https://developer.apple.com/documentation/xctest/xctest/teardownwitherror())

# tearDownWithError() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.

## Declaration

```swift
func tearDownWithError() throws
```

<a id="Discussion"></a>

## Discussion

After each test completes, `XCTest` calls [tearDown()](teardown%28%29.md), then `tearDownWithError()`, followed by [tearDown(completion:)](teardown%28completion_%29.md).

If state cleanup might throw errors, override this method or [tearDown(completion:)](teardown%28completion_%29.md). `XCTest` marks the test failed when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Setting Up and Tearing Down

- [setUp(completion:)](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError()](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp()](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDown(completion:)](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

# tearDownWithError: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.

## Declaration

```objectivec
- (BOOL) tearDownWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

After each test completes, `XCTest` calls [tearDown](teardown%28%29.md), then `tearDownWithError()`, followed by [tearDownWithCompletionHandler:](teardown%28completion_%29.md).

If state cleanup might throw errors, override this method or [tearDownWithCompletionHandler:](teardown%28completion_%29.md). `XCTest` marks the test failed when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError:](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithCompletionHandler:](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.
