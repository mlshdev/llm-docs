> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiselectionfeedbackgenerator/selectionchanged()](https://developer.apple.com/documentation/uikit/uiselectionfeedbackgenerator/selectionchanged())

# selectionChanged() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers selection feedback.

## Declaration

```swift
func selectionChanged()
```

<a id="Discussion"></a>

## Discussion

This method tells the generator that the user has changed a selection. In response, the generator may play the appropriate haptics. Don’t use this feedback when the user makes or confirms a selection; use it only when the selection changes.

For information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare()](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Reporting selection changes

- [selectionChanged(at:)](selectionchanged%28at_%29.md): Triggers selection feedback at the specified location.

# selectionChanged (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers selection feedback.

## Declaration

```objectivec
- (void) selectionChanged;
```

<a id="Discussion"></a>

## Discussion

This method tells the generator that the user has changed a selection. In response, the generator may play the appropriate haptics. Don’t use this feedback when the user makes or confirms a selection; use it only when the selection changes.

For information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Reporting selection changes

- [selectionChangedAtLocation:](selectionchanged%28at_%29.md): Triggers selection feedback at the specified location.
