> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/confirmation/callasfunction(count:)](https://developer.apple.com/documentation/testing/confirmation/callasfunction(count:))

# callAsFunction(count:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Confirm this confirmation.

## Declaration

```swift
func callAsFunction(count: Int = 1)
```

## Parameters

- `count`: The number of times to confirm this instance.

<a id="discussion"></a>

## Discussion

Calling a confirmation as a function is shorthand for calling its [confirm(count:)](confirm%28count_%29.md) method.
