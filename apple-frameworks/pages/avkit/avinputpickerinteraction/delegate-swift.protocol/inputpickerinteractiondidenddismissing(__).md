> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidenddismissing(_:)](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidenddismissing(_:))

# inputPickerInteractionDidEndDismissing(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the input picker view has finished dismissing devices.

## Declaration

```swift
optional func inputPickerInteractionDidEndDismissing(_ inputPickerInteraction: AVInputPickerInteraction)
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

<a id="discussion"></a>

## Discussion

The `isPresented` property is set to `NO` at this point, indicating that the dismissal is complete.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting(\_:)](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting(\_:)](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing(\_:)](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.

# inputPickerInteractionDidEndDismissing: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the delegate that the input picker view has finished dismissing devices.

## Declaration

```objectivec
- (void) inputPickerInteractionDidEndDismissing:(AVInputPickerInteraction *) inputPickerInteraction;
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

<a id="discussion"></a>

## Discussion

The `isPresented` property is set to `NO` at this point, indicating that the dismissal is complete.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting:](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting:](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing:](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
