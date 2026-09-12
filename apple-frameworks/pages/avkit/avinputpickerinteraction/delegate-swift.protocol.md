> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.protocol](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol)

# AVInputPickerInteraction.Delegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

## Topics

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting(\_:)](delegate-swift.protocol/inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting(\_:)](delegate-swift.protocol/inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing(\_:)](delegate-swift.protocol/inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing(\_:)](delegate-swift.protocol/inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.

## Relationships

### Inherits From

- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [delegate](delegate-swift.property.md): The input picker view’s delegate.

# AVInputPickerInteractionDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

## Declaration

```objectivec
@protocol AVInputPickerInteractionDelegate <NSObject>
```

## Topics

### Responding to life cycle events

- [inputPickerInteractionWillBeginPresenting:](delegate-swift.protocol/inputpickerinteractionwillbeginpresenting%28__%29.md): Tells the delegate that the input picker view is about to present devices.
- [inputPickerInteractionDidEndPresenting:](delegate-swift.protocol/inputpickerinteractiondidendpresenting%28__%29.md): Tells the delegate that the input picker view has finished presenting devices
- [inputPickerInteractionWillBeginDismissing:](delegate-swift.protocol/inputpickerinteractionwillbegindismissing%28__%29.md): Tells the delegate that the input picker view is about to dismiss devices.
- [inputPickerInteractionDidEndDismissing:](delegate-swift.protocol/inputpickerinteractiondidenddismissing%28__%29.md): Tells the delegate that the input picker view has finished dismissing devices.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [delegate](delegate-swift.property.md): The input picker view’s delegate.
