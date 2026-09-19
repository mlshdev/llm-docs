> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/issue/severity-swift.enum/error

# Issue.Severity.error

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** Swift 6.3+ · Xcode 26.4+

The severity level for an issue which represents an error in a test.

## Declaration

```swift
case error
```

<a id="discussion"></a>

## Discussion

An issue with error severity causes the test it’s associated with to be marked as a failure.
