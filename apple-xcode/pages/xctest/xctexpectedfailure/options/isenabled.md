> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure/options/isenabled](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/isenabled)

# isEnabled (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether the test checks for the expected failure.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `true`. Set this property to `false` to disable the expected failure check.

## See Also

### Specifying Options

- [nonStrict()](nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [isStrict](isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

# enabled (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A Boolean value that indicates whether the test checks for the expected failure.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The default is `true`. Set this property to `false` to disable the expected failure check.

## See Also

### Specifying Options

- [nonStrictOptions](nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [strict](isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.
