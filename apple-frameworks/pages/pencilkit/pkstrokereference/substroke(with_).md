> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/substroke(with:)](https://developer.apple.com/documentation/pencilkit/pkstrokereference/substroke(with:))

# substroke(with:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a copy of the stroke containing the control points in the specified range.

## Declaration

```swift
func substroke(with range: __PKFloatRange) -> PKStroke
```

## Parameters

- `range`: The range of control points in the receiver to copy to the returned stroke.

<a id="return-value"></a>

## Return Value

A new stroke containing only the control points within the specified range.

<a id="discussion"></a>

## Discussion

Maintains rendering information so the returned substroke renders the same as the corresponding portion of the receiver. The returned stroke may have a `renderState` set to maintain this information.

# substrokeWithRange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a copy of the stroke containing the control points in the specified range.

## Declaration

```objectivec
- (PKStroke *) substrokeWithRange:(PKFloatRange *) range;
```

## Parameters

- `range`: The range of control points in the receiver to copy to the returned stroke.

<a id="return-value"></a>

## Return Value

A new stroke containing only the control points within the specified range.

<a id="discussion"></a>

## Discussion

Maintains rendering information so the returned substroke renders the same as the corresponding portion of the receiver. The returned stroke may have a `renderState` set to maintain this information.
