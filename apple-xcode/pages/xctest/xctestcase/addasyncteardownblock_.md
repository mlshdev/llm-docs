> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/addasyncteardownblock:](https://developer.apple.com/documentation/xctest/xctestcase/addasyncteardownblock:)

# addAsyncTeardownBlock:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Instance Method

Registers a block of asynchronous teardown code to run after the current test method ends.

## Declaration

```objectivec
- (void) addAsyncTeardownBlock:(void (^)(void (^completion)(NSError *error))) block;
```

## Parameters

- `block`: A block of code that cleans up resources asychronously after a test run.

<a id="Discussion"></a>

## Discussion

Call this method during a test method’s execution to register a block of code to be called when the test method ends. The block of code may contain asynchronous teardown logic; the test system waits until the asynchronous teardown is complete before proceeding.

Registered teardown blocks are called before the [tearDown](../xctest/teardown%28%29.md), [tearDownWithError:](../xctest/teardownwitherror%28%29.md), or [tearDownWithCompletionHandler:](../xctest/teardown%28completion_%29.md) instance methods for their associated test case are executed. Teardown blocks are run on the main thread, but can be registered from any thread. Each registered block is run once, in last-in, first-out order, executed serially.

> **Note**

>  You can register a teardown block within a test case’s [setUp](../xctest/setup%28%29.md), [setUpWithError:](../xctest/setupwitherror%28%29.md), or [setUpWithCompletionHandler:](../xctest/setup%28completion_%29.md) instance methods, but not from within its [tearDown](../xctest/teardown%28%29.md), [tearDownWithError:](../xctest/teardownwitherror%28%29.md), or [tearDownWithCompletionHandler:](../xctest/teardown%28completion_%29.md) instance methods, or from within another teardown block. Teardown blocks always execute before the test system calls the [tearDown](../xctest/teardown%28%29.md), [tearDownWithError:](../xctest/teardownwitherror%28%29.md), or [tearDownWithCompletionHandler:](../xctest/teardown%28completion_%29.md) instance methods.

Use teardown blocks to write test-specific teardown code alongside associated setup code. For example, if a test method needs to create a resource that must be deleted when the test completes, write the code to create the resource, followed immediately by code that registers a teardown block to delete the resource.

## See Also

### Customizing Test Setup and Teardown

- [Set Up and Tear Down State in Your Tests](../set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.
- [setUp](setup%28%29.md): Provides an opportunity to customize initial state before a test case begins.
- [addTeardownBlock:](addteardownblock_.md): Registers a block of teardown code to run after the current test method ends.
- [tearDown](teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.
