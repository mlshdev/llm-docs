> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbeginpresenting(_:)](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbeginpresenting(_:))

# inputPickerInteractionWillBeginPresenting(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the input picker view is about to present devices.

## Declaration

```swift
optional func inputPickerInteractionWillBeginPresenting(_ inputPickerInteraction: AVInputPickerInteraction)
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

## See Also

### Responding to life cycle events

- [inputPickerInteractionDidEndPresenting(\_:)](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing(\_:)](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing(\_:)](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.

# inputPickerInteractionWillBeginPresenting: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the delegate that the input picker view is about to present devices.

## Declaration

```objectivec
- (void) inputPickerInteractionWillBeginPresenting:(AVInputPickerInteraction *) inputPickerInteraction;
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

## See Also

### Responding to life cycle events

- [inputPickerInteractionDidEndPresenting:](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing:](inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing:](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.
