> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservationcenter/removetestobserver(_:)](https://developer.apple.com/documentation/xctest/xctestobservationcenter/removetestobserver(_:))

# removeTestObserver(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Unregisters an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

## Declaration

```swift
func removeTestObserver(_ testObserver: any XCTestObservation)
```

## See Also

### Managing Observers

- [addTestObserver(\_:)](addtestobserver%28__%29.md): Registers an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

# removeTestObserver: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Unregisters an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.

## Declaration

```objectivec
- (void) removeTestObserver:(id<XCTestObservation>) testObserver;
```

## See Also

### Managing Observers

- [addTestObserver:](addtestobserver%28__%29.md): Registers an object conforming to [XCTestObservation](../xctestobservation.md) as an observer for the current test session.
