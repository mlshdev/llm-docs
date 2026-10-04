> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctestrun/testrunwithtest:

# testRunWithTest:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Type Method

Creates a new [XCTestRun](../xctestrun.md) for the provided test.

## Declaration

```objectivec
+ (instancetype) testRunWithTest:(XCTest *) test;
```

## Parameters

- `test`: An [XCTest](../xctest.md) instance.

<a id="return-value"></a>

## Return Value

A test run for the provided test.

## See Also

### Creating Test Runs

- [initWithTest:](init%28test_%29.md): Creates a new test run for the provided test.
