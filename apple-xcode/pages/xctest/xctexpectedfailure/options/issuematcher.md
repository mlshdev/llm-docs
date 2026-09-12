> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure/options/issuematcher](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/issuematcher)

# issueMatcher (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A block of code that determines whether the test issue fulfills the expected failure.

## Declaration

```swift
var issueMatcher: (XCTIssue) -> Bool { get set }
```

```swift
var issueMatcher: (XCTIssueReference) -> Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Provide code to examine the issue and respond with a Boolean value indicating whether the issue fulfills the expected failure.

# issueMatcher (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A block of code that determines whether the test issue fulfills the expected failure.

## Declaration

```objectivec
@property (copy) BOOL (^issueMatcher)(XCTIssue *);
```

<a id="Discussion"></a>

## Discussion

Provide code to examine the issue and respond with a Boolean value indicating whether the issue fulfills the expected failure.
