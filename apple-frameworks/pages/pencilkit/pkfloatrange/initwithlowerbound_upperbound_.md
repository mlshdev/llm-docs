> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkfloatrange/initwithlowerbound:upperbound:](https://developer.apple.com/documentation/pencilkit/pkfloatrange/initwithlowerbound:upperbound:)

# initWithLowerBound:upperBound:

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A utility class used to contain ranges returned by the PKStroke API.

## Declaration

```objectivec
- (instancetype) initWithLowerBound:(CGFloat) lowerBound upperBound:(CGFloat) upperBound;
```

## Parameters

- `lowerBound`: A floating point value that represents the lower bound of the range.
- `upperBound`: A floating point value that represents the upper bound of the range.

<a id="return-value"></a>

## Return Value

A new range instance with the supplied upper and lower bounds.
