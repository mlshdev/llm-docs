> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservationcenter/addtestobserver(_:)](https://developer.apple.com/documentation/xctest/xctestobservationcenter/addtestobserver(_:))

# addTestObserver(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Registers an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

## Declaration

```swift
func addTestObserver(_ testObserver: any XCTestObservation)
```

<a id="Discussion"></a>

## Discussion

Observers may be added at any time, but will not receive events that occurred before they were registered. The observation center maintains a strong reference to observers.Events may be delivered to observers in any order. Given observers A and B, A may be notified of a test failure before or after B. Any ordering dependencies or serialization requirements must be managed by clients.

## See Also

### Managing Observers

- [removeTestObserver(\_:)](removetestobserver%28__%29.md): Unregisters an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

# addTestObserver: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Registers an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

## Declaration

```objectivec
- (void) addTestObserver:(id<XCTestObservation>) testObserver;
```

<a id="Discussion"></a>

## Discussion

Observers may be added at any time, but will not receive events that occurred before they were registered. The observation center maintains a strong reference to observers.Events may be delivered to observers in any order. Given observers A and B, A may be notified of a test failure before or after B. Any ordering dependencies or serialization requirements must be managed by clients.

## See Also

### Managing Observers

- [removeTestObserver:](removetestobserver%28__%29.md): Unregisters an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.
