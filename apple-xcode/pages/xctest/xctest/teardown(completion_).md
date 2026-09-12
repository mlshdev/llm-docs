> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/teardown(completion:)](https://developer.apple.com/documentation/xctest/xctest/teardown(completion:))

# tearDown(completion:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.

## Declaration

```swift
func tearDown(completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func tearDown() async throws
```

## Parameters

- `completion`: In Swift, reserved for system usage. Do not use. In Objective-C, a completion block you must call after you have completed cleaning up your state asynchronously.

<a id="Discussion"></a>

## Discussion

In Swift, override `tearDown() async throws` for asynchronous state cleanup with error handling after each test. Do not override `tearDown(completion:)` for synchronous state cleanup.

In Objective-C, override this method for asynchronous state cleanup with error handling after each test. Call the completion handler after you have cleaned up your state to notify the test system it can proceed with the next task.

After each test completes, `XCTest` calls:

1. [tearDown()](teardown%28%29.md) for synchronous state cleanup without error handling,
2. [tearDownWithError()](teardownwitherror%28%29.md) for synchronous state cleanup and error handling,
3. Then this method for asynchronous state preparation and error handling.

For tear down methods that provide error handling, `XCTest` marks the test failed when it catches errors, or skipped when it catches [XCTSkip](../xctskip-swift.struct.md). Based on your state cleanup requirements, choose one of these methods to override in your test case.

## See Also

### Setting Up and Tearing Down

- [setUp(completion:)](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError()](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp()](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithError()](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

# tearDownWithCompletionHandler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.

## Declaration

```objectivec
- (void) tearDownWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: In Swift, reserved for system usage. Do not use. In Objective-C, a completion block you must call after you have completed cleaning up your state asynchronously.

<a id="Discussion"></a>

## Discussion

In Swift, override `tearDown() async throws` for asynchronous state cleanup with error handling after each test. Do not override `tearDown(completion:)` for synchronous state cleanup.

In Objective-C, override this method for asynchronous state cleanup with error handling after each test. Call the completion handler after you have cleaned up your state to notify the test system it can proceed with the next task.

After each test completes, `XCTest` calls:

1. [tearDown](teardown%28%29.md) for synchronous state cleanup without error handling,
2. [tearDownWithError:](teardownwitherror%28%29.md) for synchronous state cleanup and error handling,
3. Then this method for asynchronous state preparation and error handling.

For tear down methods that provide error handling, `XCTest` marks the test failed when it catches errors, or skipped when it catches [XCTSkip](../xctskip-swift.struct.md). Based on your state cleanup requirements, choose one of these methods to override in your test case.

## See Also

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError:](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithError:](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.
