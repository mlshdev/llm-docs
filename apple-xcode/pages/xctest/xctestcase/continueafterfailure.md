> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/continueafterfailure](https://developer.apple.com/documentation/xctest/xctestcase/continueafterfailure)

# continueAfterFailure (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether a test method should continue running after a failure occurs.

## Declaration

```swift
var continueAfterFailure: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). Set this property to [false](https://developer.apple.com/documentation/swift/false) within a test method to end execution of that method as soon as a failure occurs. Other test methods in the suite may still execute after a test fails.

## See Also

### Managing Test Case Execution

- [runsForEachTargetApplicationUIConfiguration](runsforeachtargetapplicationuiconfiguration.md): A Boolean value that indicates whether your UI tests run once for each possible combination of orientation, localization, and other appearance settings your app supports.
- [executionTimeAllowance](executiontimeallowance.md): The number of seconds, rounded up to the nearest minute, for a test to run before it fails with a timeout error.

# continueAfterFailure (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether a test method should continue running after a failure occurs.

## Declaration

```objectivec
@property BOOL continueAfterFailure;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). Set this property to [false](https://developer.apple.com/documentation/swift/false) within a test method to end execution of that method as soon as a failure occurs. Other test methods in the suite may still execute after a test fails.

## See Also

### Managing Test Case Execution

- [runsForEachTargetApplicationUIConfiguration](runsforeachtargetapplicationuiconfiguration.md): A Boolean value that indicates whether your UI tests run once for each possible combination of orientation, localization, and other appearance settings your app supports.
- [executionTimeAllowance](executiontimeallowance.md): The number of seconds, rounded up to the nearest minute, for a test to run before it fails with a timeout error.
