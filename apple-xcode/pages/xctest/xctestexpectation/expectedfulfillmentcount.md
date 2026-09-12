> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation/expectedfulfillmentcount](https://developer.apple.com/documentation/xctest/xctestexpectation/expectedfulfillmentcount)

# expectedFulfillmentCount (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The number of times [fulfill()](fulfill%28%29.md) must be called before the expectation is completely fulfilled.

## Declaration

```swift
var expectedFulfillmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of [expectedFulfillmentCount](expectedfulfillmentcount.md) must be greater than 0. By default, expectations have an [expectedFulfillmentCount](expectedfulfillmentcount.md) of 1.

> **Note**

>  The value of [expectedFulfillmentCount](expectedfulfillmentcount.md) is ignored when [isInverted](isinverted.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Fulfillment Count

- [assertForOverFulfill](assertforoverfulfill.md): Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.

# expectedFulfillmentCount (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The number of times [fulfill](fulfill%28%29.md) must be called before the expectation is completely fulfilled.

## Declaration

```objectivec
@property (nonatomic) NSUInteger expectedFulfillmentCount;
```

<a id="Discussion"></a>

## Discussion

The value of [expectedFulfillmentCount](expectedfulfillmentcount.md) must be greater than 0. By default, expectations have an [expectedFulfillmentCount](expectedfulfillmentcount.md) of 1.

> **Note**

>  The value of [expectedFulfillmentCount](expectedfulfillmentcount.md) is ignored when [inverted](isinverted.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Fulfillment Count

- [assertForOverFulfill](assertforoverfulfill.md): Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.
