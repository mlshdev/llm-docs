> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation/isinverted](https://developer.apple.com/documentation/xctest/xctestexpectation/isinverted)

# isInverted (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates that the expectation is not intended to happen.

## Declaration

```swift
var isInverted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To check that a situation does *not* occur during testing, create an expectation that is fulfilled when the unexpected situation occurs, and set its [isInverted](isinverted.md) property to true. Your test will fail immediately if the inverted expectation is fulfilled.

# inverted (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates that the expectation is not intended to happen.

## Declaration

```objectivec
@property (getter=isInverted) BOOL inverted;
```

<a id="Discussion"></a>

## Discussion

To check that a situation does *not* occur during testing, create an expectation that is fulfilled when the unexpected situation occurs, and set its [inverted](isinverted.md) property to true. Your test will fail immediately if the inverted expectation is fulfilled.
