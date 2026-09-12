> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidendpresenting(_:)](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidendpresenting(_:))

# inputPickerInteractionDidEndPresenting(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the input picker view has finished presenting devices

## Declaration

```swift
optional func inputPickerInteractionDidEndPresenting(_ inputPickerInteraction: AVInputPickerInteraction)
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

<a id="discussion"></a>

## Discussion

The `isPresented` property is set to `YES` at this point, indicating that the presentation is complete.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting(\_:)](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionWillBeginDismissing(\_:)](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing(\_:)](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.

# inputPickerInteractionDidEndPresenting: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the delegate that the input picker view has finished presenting devices

## Declaration

```objectivec
- (void) inputPickerInteractionDidEndPresenting:(AVInputPickerInteraction *) inputPickerInteraction;
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

<a id="discussion"></a>

## Discussion

The `isPresented` property is set to `YES` at this point, indicating that the presentation is complete.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting:](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionWillBeginDismissing:](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing:](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.
