> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/setupwitherror()](https://developer.apple.com/documentation/xctest/xctest/setupwitherror())

# setUpWithError() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state and to throw errors before calling each test method in a test case.

## Declaration

```swift
func setUpWithError() throws
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

Before each test begins, `XCTest` calls [setUp(completion:)](setup%28completion_%29.md) for asynchronous state preparation, then this method, followed by [setUp()](setup%28%29.md).

If state preparation might throw errors, override [setUp(completion:)](setup%28completion_%29.md) or this method. `XCTest` marks the test failed when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Setting Up and Tearing Down

- [setUp(completion:)](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUp()](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDown(completion:)](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError()](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

# setUpWithError: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state and to throw errors before calling each test method in a test case.

## Declaration

```objectivec
- (BOOL) setUpWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

Before each test begins, `XCTest` calls [setUpWithCompletionHandler:](setup%28completion_%29.md) for asynchronous state preparation, then this method, followed by [setUp](setup%28%29.md).

If state preparation might throw errors, override [setUpWithCompletionHandler:](setup%28completion_%29.md) or this method. `XCTest` marks the test failed when it catches errors, or skipped when it catches `XCTSkip`.

## See Also

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUp](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithCompletionHandler:](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError:](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.
