> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttextalignment/init(_:)](https://developer.apple.com/documentation/coretext/cttextalignment/init(_:))

# init(\_:)

**Framework:** Core Text  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a UIKit text alignment constant value to the matching constant value that Core Text uses.

## Declaration

```swift
init(_ nsTextAlignment: NSTextAlignment)
```

## Parameters

- `nsTextAlignment`: The UIKit text alignment constant you want to convert.

<a id="return-value"></a>

## Return Value

The Core Text alignment that corresponds to the value specified in `nsTextAlignment`.

<a id="Discussion"></a>

## Discussion

Use this function when you need to map between the UIKit and Core Text constants for text alignment.
