> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference/subpath(with:)](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/subpath(with:))

# subpath(with:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a copy of the path containing the control points in the specified parametric range.

## Declaration

```swift
func subpath(with range: __PKFloatRange) -> PKStrokePath
```

## Parameters

- `range`: The parametric range to copy. Values must be within \[0, count-1\].

<a id="return-value"></a>

## Return Value

A new stroke path containing the portion within the specified parametric range.

# subpathWithRange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a copy of the path containing the control points in the specified parametric range.

## Declaration

```objectivec
- (PKStrokePath *) subpathWithRange:(PKFloatRange *) range;
```

## Parameters

- `range`: The parametric range to copy. Values must be within \[0, count-1\].

<a id="return-value"></a>

## Return Value

A new stroke path containing the portion within the specified parametric range.
