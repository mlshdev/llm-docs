> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation](https://developer.apple.com/documentation/xctest/xctestexpectation)

# XCTestExpectation (Swift)

**Framework:** XCTest  
**Kind:** Class

An expected outcome in an asynchronous test.

## Declaration

```swift
class XCTestExpectation
```

## Topics

### Creating Expectations

- [init(description:)](xctestexpectation/init%28description_%29.md): Creates a new [XCTestExpectation](xctestexpectation.md) with the provided description.
- [expectationDescription](xctestexpectation/expectationdescription.md): A human readable string used to describe the expectation in log output and test reports.

### Fulfilling Expectations

- [fulfill()](xctestexpectation/fulfill%28%29.md): Marks the expectation as having been met.

### Fulfillment Count

- [expectedFulfillmentCount](xctestexpectation/expectedfulfillmentcount.md): The number of times [fulfill()](xctestexpectation/fulfill%28%29.md) must be called before the expectation is completely fulfilled.
- [assertForOverFulfill](xctestexpectation/assertforoverfulfill.md): Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.

### Unintended Expectations

- [isInverted](xctestexpectation/isinverted.md): Indicates that the expectation is not intended to happen.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTDarwinNotificationExpectation](xctdarwinnotificationexpectation.md)
- [XCTKVOExpectation](xctkvoexpectation.md)
- [XCTKeyPathExpectation](xctkeypathexpectation.md)
- [XCTNSNotificationExpectation](xctnsnotificationexpectation.md)
- [XCTNSPredicateExpectation](xctnspredicateexpectation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCTestExpectation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An expected outcome in an asynchronous test.

## Declaration

```objectivec
@interface XCTestExpectation : NSObject
```

## Topics

### Creating Expectations

- [initWithDescription:](xctestexpectation/init%28description_%29.md): Creates a new [XCTestExpectation](xctestexpectation.md) with the provided description.
- [expectationDescription](xctestexpectation/expectationdescription.md): A human readable string used to describe the expectation in log output and test reports.

### Fulfilling Expectations

- [fulfill](xctestexpectation/fulfill%28%29.md): Marks the expectation as having been met.

### Fulfillment Count

- [expectedFulfillmentCount](xctestexpectation/expectedfulfillmentcount.md): The number of times [fulfill](xctestexpectation/fulfill%28%29.md) must be called before the expectation is completely fulfilled.
- [assertForOverFulfill](xctestexpectation/assertforoverfulfill.md): Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.

### Unintended Expectations

- [inverted](xctestexpectation/isinverted.md): Indicates that the expectation is not intended to happen.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTDarwinNotificationExpectation](xctdarwinnotificationexpectation.md)
- [XCTKVOExpectation](xctkvoexpectation.md)
- [XCTNSNotificationExpectation](xctnsnotificationexpectation.md)
- [XCTNSPredicateExpectation](xctnspredicateexpectation.md)
