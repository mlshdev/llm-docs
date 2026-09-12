> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation/fulfill()](https://developer.apple.com/documentation/xctest/xctestexpectation/fulfill())

# fulfill() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Marks the expectation as having been met.

## Declaration

```swift
func fulfill()
```

<a id="Discussion"></a>

## Discussion

It is an error to call this method on an expectation that has already been fulfilled, or when the test case that vended the expectation has already completed.

# fulfill (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Marks the expectation as having been met.

## Declaration

```objectivec
- (void) fulfill;
```

<a id="Discussion"></a>

## Discussion

It is an error to call this method on an expectation that has already been fulfilled, or when the test case that vended the expectation has already completed.
