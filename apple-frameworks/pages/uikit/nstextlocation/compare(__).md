> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlocation/compare(_:)](https://developer.apple.com/documentation/uikit/nstextlocation/compare(_:))

# compare(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares and returns the logical ordering to location.

## Declaration

```swift
func compare(_ location: any NSTextLocation) -> ComparisonResult
```

## Parameters

- `location`: The location to compare the current location to.

<a id="return-value"></a>

## Return Value

A [ComparisonResult](../../foundation/comparisonresult.md).

# compare: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares and returns the logical ordering to location.

## Declaration

```objectivec
- (NSComparisonResult) compare:(id<NSTextLocation>) location;
```

## Parameters

- `location`: The location to compare the current location to.

<a id="return-value"></a>

## Return Value

A [NSComparisonResult](../../foundation/comparisonresult.md).
