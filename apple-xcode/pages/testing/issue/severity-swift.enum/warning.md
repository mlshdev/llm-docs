> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/severity-swift.enum/warning](https://developer.apple.com/documentation/testing/issue/severity-swift.enum/warning)

# Issue.Severity.warning

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** Swift 6.3+ · Xcode 26.4+

The severity level for an issue which should be noted but is not necessarily an error.

## Declaration

```swift
case warning
```

<a id="discussion"></a>

## Discussion

An issue with warning severity does not cause the test it’s associated with to be marked as a failure, but is noted in the results.
