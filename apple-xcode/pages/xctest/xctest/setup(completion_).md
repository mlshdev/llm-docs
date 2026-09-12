> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/setup(completion:)](https://developer.apple.com/documentation/xctest/xctest/setup(completion:))

# setUp(completion:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.

## Declaration

```swift
func setUp(completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setUp() async throws
```

## Parameters

- `completion`: In Swift, reserved for system usage. Do not use. In Objective-C, a completion block you must call after you have completed setting up your state asynchronously.

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

In Swift, override `setUp() async throws` for asynchronous state preparation with error handling before each test. Do not override `setUp(completion:)` for synchronous state preparation. In Objective-C, override this method for asynchronous state preparation with error handling before each test. Call the completion handler after you have set up your state to notify the test system it can proceed with the next task.

Before each test begins, `XCTest` calls:

1. This method for asynchronous state preparation and error handling,
2. [setUpWithError()](setupwitherror%28%29.md) for synchronous state preparation and error handling,
3. Then [setUp()](setup%28%29.md) for synchronous state preparation without error handling.

For setup methods that provide error handling, `XCTest` marks the test failed when it catches errors, or skipped when it catches [XCTSkip](../xctskip-swift.struct.md). Based on your state preparation requirements, choose one of these methods to override in your test case.

## See Also

### Setting Up and Tearing Down

- [setUpWithError()](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp()](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDown(completion:)](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError()](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

# setUpWithCompletionHandler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.

## Declaration

```objectivec
- (void) setUpWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: In Swift, reserved for system usage. Do not use. In Objective-C, a completion block you must call after you have completed setting up your state asynchronously.

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

In Swift, override `setUp() async throws` for asynchronous state preparation with error handling before each test. Do not override `setUp(completion:)` for synchronous state preparation. In Objective-C, override this method for asynchronous state preparation with error handling before each test. Call the completion handler after you have set up your state to notify the test system it can proceed with the next task.

Before each test begins, `XCTest` calls:

1. This method for asynchronous state preparation and error handling,
2. [setUpWithError:](setupwitherror%28%29.md) for synchronous state preparation and error handling,
3. Then [setUp](setup%28%29.md) for synchronous state preparation without error handling.

For setup methods that provide error handling, `XCTest` marks the test failed when it catches errors, or skipped when it catches [XCTSkip](../xctskip-swift.struct.md). Based on your state preparation requirements, choose one of these methods to override in your test case.

## See Also

### Setting Up and Tearing Down

- [setUpWithError:](setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp](setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithCompletionHandler:](teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError:](teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.
