> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/wait(for:timeout:)-swift.method](https://developer.apple.com/documentation/xctest/xctwaiter/wait(for:timeout:)-swift.method)

# wait(for:timeout:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Waits on a group of expectations for up to the specified timeout.

## Declaration

```swift
func wait(for expectations: [XCTestExpectation], timeout seconds: TimeInterval) -> XCTWaiter.Result
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`.

<a id="Discussion"></a>

## Discussion

The following example demonstrates how to wait on exceptions with a timeout specified:

```objc
- (void)testSprockets {
    NSSprocket *sprocket = [[NSSprocket alloc] init];
    
    XCTestExpectation *sprocketLoaded = [self expectationWithDescription:@"sprocket loaded"];
    [sprocket loadUsingBlock:^ (NSUInteger toothCount) {
        if (toothCount == 6) {
            [sprocketLoaded fulfill];
        }
    }];

    // This usually takes a while. Wait 10s.
    [self waitForExpectations:@[sprocketLoaded] timeout:10.0];

    id orbitWobbled = [self keyValueObservingExpectationForObject:sprocket
                                                          keyPath:@"orbitAngle.doubleValue"
                                                    expectedValue:@90.0];
    dispatch_async(myQueue, ^ {
        [sprocket wobbleOrbit];
    });
    // Don't know how long to wait, but this is usually fast?
    [self waitForExpectations:@[orbitWobbled] timeout:0.1];
}
```

Expectations can appear in the `expectations` array only once.

The call may return before the timeout if the test fulfills all the expectations you provide.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiter.Result](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.

# waitForExpectations:timeout: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Waits on a group of expectations for up to the specified timeout.

## Declaration

```objectivec
- (XCTWaiterResult) waitForExpectations:(NSArray<XCTestExpectation *> *) expectations timeout:(NSTimeInterval) seconds;
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`.

<a id="Discussion"></a>

## Discussion

The following example demonstrates how to wait on exceptions with a timeout specified:

```objc
- (void)testSprockets {
    NSSprocket *sprocket = [[NSSprocket alloc] init];
    
    XCTestExpectation *sprocketLoaded = [self expectationWithDescription:@"sprocket loaded"];
    [sprocket loadUsingBlock:^ (NSUInteger toothCount) {
        if (toothCount == 6) {
            [sprocketLoaded fulfill];
        }
    }];

    // This usually takes a while. Wait 10s.
    [self waitForExpectations:@[sprocketLoaded] timeout:10.0];

    id orbitWobbled = [self keyValueObservingExpectationForObject:sprocket
                                                          keyPath:@"orbitAngle.doubleValue"
                                                    expectedValue:@90.0];
    dispatch_async(myQueue, ^ {
        [sprocket wobbleOrbit];
    });
    // Don't know how long to wait, but this is usually fast?
    [self waitForExpectations:@[orbitWobbled] timeout:0.1];
}
```

Expectations can appear in the `expectations` array only once.

The call may return before the timeout if the test fulfills all the expectations you provide.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [waitForExpectations:](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [waitForExpectations:](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiterResult](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.
