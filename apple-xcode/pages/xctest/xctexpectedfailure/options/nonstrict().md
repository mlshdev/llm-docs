> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure/options/nonstrict()](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/nonstrict())

# nonStrict() (Swift)

**Framework:** XCTest  
**Kind:** Type Method

Options that specify that an unfulfilled expected failure doesn’t generate a test failure.

## Declaration

```swift
class func nonStrict() -> XCTExpectedFailure.Options
```

<a id="return-value"></a>

## Return Value

Returns an options instance that specifies that an unfulfilled expected failure doesn’t generate a test failure.

## See Also

### Specifying Options

- [isEnabled](isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.
- [isStrict](isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

# nonStrictOptions (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Options that specify that an unfulfilled expected failure doesn’t generate a test failure.

## Declaration

```objectivec
+ (XCTExpectedFailureOptions *) nonStrictOptions;
```

<a id="return-value"></a>

## Return Value

Returns an options instance that specifies that an unfulfilled expected failure doesn’t generate a test failure.

## See Also

### Specifying Options

- [enabled](isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.
- [strict](isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.
