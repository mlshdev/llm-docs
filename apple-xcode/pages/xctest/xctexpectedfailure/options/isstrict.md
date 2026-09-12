> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure/options/isstrict](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/isstrict)

# isStrict (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

## Declaration

```swift
var isStrict: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `true`. Set this property to `false` to prevent the test from recording the unfilled expected failure as an issue.

## See Also

### Specifying Options

- [nonStrict()](nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.

# strict (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

## Declaration

```objectivec
@property (getter=isStrict) BOOL strict;
```

<a id="Discussion"></a>

## Discussion

The default is `true`. Set this property to `false` to prevent the test from recording the unfilled expected failure as an issue.

## See Also

### Specifying Options

- [nonStrictOptions](nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [enabled](isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.
