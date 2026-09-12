> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/wait(for:)-swift.method](https://developer.apple.com/documentation/xctest/xctwaiter/wait(for:)-swift.method)

# wait(for:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Waits on a group of expectations.

## Declaration

```swift
func wait(for expectations: [XCTestExpectation]) -> XCTWaiter.Result
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`.

<a id="Discussion"></a>

## Discussion

The following example demonstrates how to wait on exceptions:

```objc
- (void)testSprockets {
    // The test allows 60 seconds total for execution.
    self.executionTimeAllowance = 60;

    MySprocket *sprocket = [[MySprocket alloc] init];

    XCTestExpectation *sprocketLoaded = [self expectationWithDescription:@"sprocket loaded"];
    [sprocket loadUsingBlock:^(NSUInteger toothCount) {
        if (toothCount == 6) {
            [sprocketLoaded fulfill];
        }
    }];
    [self waitForExpectations:@[sprocketLoaded]];

    id orbitWobbled = [self keyValueObservingExpectationForObject:sprocket
                                                          keyPath:@"orbitAngle.doubleValue"
                                                    expectedValue:@90.0];
    dispatch_async(myQueue, ^ {
        [sprocket wobbleOrbit];
    });
    [self waitForExpectations:@[orbitWobbled]];
}
```

Expectations can only appear in the array once.

The call may return before the timeout if the test fulfills all the expectations you provide.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiter.Result](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.

# waitForExpectations: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Waits on a group of expectations.

## Declaration

```objectivec
- (XCTWaiterResult) waitForExpectations:(NSArray<XCTestExpectation *> *) expectations;
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`.

<a id="Discussion"></a>

## Discussion

The following example demonstrates how to wait on exceptions:

```objc
- (void)testSprockets {
    // The test allows 60 seconds total for execution.
    self.executionTimeAllowance = 60;

    MySprocket *sprocket = [[MySprocket alloc] init];

    XCTestExpectation *sprocketLoaded = [self expectationWithDescription:@"sprocket loaded"];
    [sprocket loadUsingBlock:^(NSUInteger toothCount) {
        if (toothCount == 6) {
            [sprocketLoaded fulfill];
        }
    }];
    [self waitForExpectations:@[sprocketLoaded]];

    id orbitWobbled = [self keyValueObservingExpectationForObject:sprocket
                                                          keyPath:@"orbitAngle.doubleValue"
                                                    expectedValue:@90.0];
    dispatch_async(myQueue, ^ {
        [sprocket wobbleOrbit];
    });
    [self waitForExpectations:@[orbitWobbled]];
}
```

Expectations can only appear in the array once.

The call may return before the timeout if the test fulfills all the expectations you provide.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [waitForExpectations:](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiterResult](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.
