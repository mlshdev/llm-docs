> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbegindismissing(_:)](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbegindismissing(_:))

# inputPickerInteractionWillBeginDismissing(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the input picker view is about to dismiss devices.

## Declaration

```swift
optional func inputPickerInteractionWillBeginDismissing(_ inputPickerInteraction: AVInputPickerInteraction)
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting(\_:)](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting(\_:)](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionDidEndDismissing(\_:)](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.

# inputPickerInteractionWillBeginDismissing: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the delegate that the input picker view is about to dismiss devices.

## Declaration

```objectivec
- (void) inputPickerInteractionWillBeginDismissing:(AVInputPickerInteraction *) inputPickerInteraction;
```

## Parameters

- `inputPickerInteraction`: The current AVInputPickerInteraction.

## See Also

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting:](inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting:](inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionDidEndDismissing:](inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.
