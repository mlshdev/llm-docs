> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctestrun/init(test:)

# init(test:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a new test run for the provided test.

## Declaration

```swift
init(test: XCTest)
```

## Parameters

- `test`: An [XCTest](../xctest.md) instance.

<a id="return-value"></a>

## Return Value

A test run for the provided test.

# initWithTest: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a new test run for the provided test.

## Declaration

```objectivec
- (instancetype) initWithTest:(XCTest *) test;
```

## Parameters

- `test`: An [XCTest](../xctest.md) instance.

<a id="return-value"></a>

## Return Value

A test run for the provided test.

## See Also

### Creating Test Runs

- [testRunWithTest:](testrunwithtest_.md): Creates a new [XCTestRun](../xctestrun.md) for the provided test.
