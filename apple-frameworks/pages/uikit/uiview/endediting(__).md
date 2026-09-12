> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/endediting(_:)](https://developer.apple.com/documentation/uikit/uiview/endediting(_:))

# endEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Causes the view (or one of its embedded text fields) to resign the first responder status.

## Declaration

```swift
func endEditing(_ force: Bool) -> Bool
```

## Parameters

- `force`: Specify [true](https://developer.apple.com/documentation/swift/true) to force the first responder to resign, regardless of whether it wants to do so.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view resigned the first responder status or [false](https://developer.apple.com/documentation/swift/false) if it did not.

<a id="Discussion"></a>

## Discussion

This method looks at the current view and its subview hierarchy for the text field that is currently the first responder. If it finds one, it asks that text field to resign as first responder. If the `force` parameter is set to [true](https://developer.apple.com/documentation/swift/true), the text field is never even asked; it is forced to resign.

# endEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Causes the view (or one of its embedded text fields) to resign the first responder status.

## Declaration

```objectivec
- (BOOL) endEditing:(BOOL) force;
```

## Parameters

- `force`: Specify [true](https://developer.apple.com/documentation/swift/true) to force the first responder to resign, regardless of whether it wants to do so.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view resigned the first responder status or [false](https://developer.apple.com/documentation/swift/false) if it did not.

<a id="Discussion"></a>

## Discussion

This method looks at the current view and its subview hierarchy for the text field that is currently the first responder. If it finds one, it asks that text field to resign as first responder. If the `force` parameter is set to [true](https://developer.apple.com/documentation/swift/true), the text field is never even asked; it is forced to resign.
