> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation/init(description:)](https://developer.apple.com/documentation/xctest/xctestexpectation/init(description:))

# init(description:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a new [XCTestExpectation](../xctestexpectation.md) with the provided description.

## Declaration

```swift
init(description expectationDescription: String)
```

## Parameters

- `expectationDescription`: A string to display in the test log for this expectation, to help diagnose failures.

<a id="Discussion"></a>

## Discussion

To fulfill an expectation that was created with this initializer, call the expectation’s [fulfill()](fulfill%28%29.md) method when the asynchronous task in your test has completed.

## See Also

### Creating Expectations

- [expectationDescription](expectationdescription.md): A human readable string used to describe the expectation in log output and test reports.

# initWithDescription: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a new [XCTestExpectation](../xctestexpectation.md) with the provided description.

## Declaration

```objectivec
- (instancetype) initWithDescription:(NSString *) expectationDescription;
```

## Parameters

- `expectationDescription`: A string to display in the test log for this expectation, to help diagnose failures.

<a id="Discussion"></a>

## Discussion

To fulfill an expectation that was created with this initializer, call the expectation’s [fulfill](fulfill%28%29.md) method when the asynchronous task in your test has completed.

## See Also

### Creating Expectations

- [expectationDescription](expectationdescription.md): A human readable string used to describe the expectation in log output and test reports.
