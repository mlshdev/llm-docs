> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/setup()](https://developer.apple.com/documentation/xctest/xctestcase/setup())

# setUp() (Swift)

**Framework:** XCTest  
**Kind:** Type Method

Provides an opportunity to customize initial state before a test case begins.

## Declaration

```swift
class func setUp()
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

The [setUp()](setup%28%29.md) class method is called exactly once for a test case, before its first test method is called. Override this method to customize the initial state for all tests in the test case.

## See Also

### Related Documentation

- [setUp()](../xctest/setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.

### Customizing Test Setup and Teardown

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.
- [addTeardownBlock(\_:)](addteardownblock%28__%29-2guon.md): Registers a block of teardown code to run after the current test method ends.
- [addTeardownBlock(\_:)](addteardownblock%28__%29-5zw6c.md): Registers a block of teardown code to run after the current test method ends.
- [tearDown()](teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.

# setUp (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Provides an opportunity to customize initial state before a test case begins.

## Declaration

```objectivec
+ (void) setUp;
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md)

<a id="Discussion"></a>

## Discussion

The [setUp](setup%28%29.md) class method is called exactly once for a test case, before its first test method is called. Override this method to customize the initial state for all tests in the test case.

## See Also

### Related Documentation

- [setUp](../xctest/setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.

### Customizing Test Setup and Teardown

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.
- [addAsyncTeardownBlock:](addasyncteardownblock_.md): Registers a block of asynchronous teardown code to run after the current test method ends.
- [addTeardownBlock:](addteardownblock_.md): Registers a block of teardown code to run after the current test method ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.
