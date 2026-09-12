> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/setup()](https://developer.apple.com/documentation/xctest/xctest/setup())

# setUp() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state before calling each test method in a test case.

## Declaration

```swift
func setUp()
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

Before each test begins, `XCTest` calls [setUp(completion:)](setup%28completion_%29.md) for asynchronous state preparation, then \`\`XCTest/XCTest/setUpWithError()\`\`\`,\` followed by this method. Override this method to reset state for each test method.

If state preparation might throw errors, override [setUp(completion:)](setup%28completion_%29.md) or [setUpWithError()](setupwitherror%28%29.md) instead.

## See Also

### Related Documentation

- [setUp()](../xctestcase/setup%28%29.md): Provides an opportunity to customize initial state before a test case begins.
- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.

### Setting Up and Tearing Down

- [setUp(completion:)](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError()](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [tearDown(completion:)](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError()](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

# setUp (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state before calling each test method in a test case.

## Declaration

```objectivec
- (void) setUp;
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

Before each test begins, `XCTest` calls [setUpWithCompletionHandler:](setup%28completion_%29.md) for asynchronous state preparation, then \`\`XCTest/XCTest/setUpWithError()\`\`\`,\` followed by this method. Override this method to reset state for each test method.

If state preparation might throw errors, override [setUpWithCompletionHandler:](setup%28completion_%29.md) or [setUpWithError:](setupwitherror%28%29.md) instead.

## See Also

### Related Documentation

- [setUp](../xctestcase/setup%28%29.md): Provides an opportunity to customize initial state before a test case begins.
- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError:](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [tearDownWithCompletionHandler:](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError:](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.
