> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinputpickerinteraction

# AVInputPickerInteraction (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that presents the system’s audio input picker so people can choose which microphone to use for recording audio.

## Declaration

```swift
@MainActor class AVInputPickerInteraction
```

<a id="overview"></a>

## Overview

People expect the microphone they chose to be the one your app records with. Add an input picker interaction to a view, and your app presents the same picker the system uses, listing the audio inputs available at that moment.

Create an interaction with [init(audioSession:)](avinputpickerinteraction/init%28audiosession_%29.md) to pick inputs for a specific audio session, or with [init()](avinputpickerinteraction/init%28%29.md) to use the shared session. Pass a session that records, or that you switch to recording, because a session in any other mode produces an empty list of inputs. Add the interaction to a view the way you add any [UIInteraction](../uikit/uiinteraction.md), then call [present()](avinputpickerinteraction/present%28%29.md) from the control that offers input selection. Call [dismiss()](avinputpickerinteraction/dismiss%28%29.md) to take the picker away, and read [isPresented](avinputpickerinteraction/ispresented.md) to find out whether it’s onscreen.

Set [delegate](avinputpickerinteraction/delegate-swift.property.md) to a [AVInputPickerInteraction.Delegate](avinputpickerinteraction/delegate-swift.protocol.md) to learn when the picker begins and finishes presenting, and when it begins and finishes dismissing. The interaction reports those transitions around its own presentation, so an app that dims its interface while someone chooses an input has a place to do that work.

## Topics

### Creating an input picker

- [init()](avinputpickerinteraction/init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.
- [init(audioSession:)](avinputpickerinteraction/init%28audiosession_%29.md): Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

### Managing presentation

- [isPresented](avinputpickerinteraction/ispresented.md): A Boolean value that indicates whether the picker is currently visible.
- [present()](avinputpickerinteraction/present%28%29.md): Presents the input picker.
- [dismiss()](avinputpickerinteraction/dismiss%28%29.md): Dismisses the input picker.

### Setting the delegate

- [delegate](avinputpickerinteraction/delegate-swift.property.md): The input picker view’s delegate.
- [AVInputPickerInteraction.Delegate](avinputpickerinteraction/delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

### Accessing the audio session

- [audioSession](avinputpickerinteraction/audiosession.md): The audio session for the picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](../uikit/uiinteraction.md)

# AVInputPickerInteraction (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that presents the system’s audio input picker so people can choose which microphone to use for recording audio.

## Declaration

```objectivec
@interface AVInputPickerInteraction : NSObject
```

<a id="overview"></a>

## Overview

People expect the microphone they chose to be the one your app records with. Add an input picker interaction to a view, and your app presents the same picker the system uses, listing the audio inputs available at that moment.

Create an interaction with [initWithAudioSession:](avinputpickerinteraction/init%28audiosession_%29.md) to pick inputs for a specific audio session, or with [init](avinputpickerinteraction/init%28%29.md) to use the shared session. Pass a session that records, or that you switch to recording, because a session in any other mode produces an empty list of inputs. Add the interaction to a view the way you add any [UIInteraction](../uikit/uiinteraction.md), then call [present](avinputpickerinteraction/present%28%29.md) from the control that offers input selection. Call [dismiss](avinputpickerinteraction/dismiss%28%29.md) to take the picker away, and read [presented](avinputpickerinteraction/ispresented.md) to find out whether it’s onscreen.

Set [delegate](avinputpickerinteraction/delegate-swift.property.md) to a [AVInputPickerInteractionDelegate](avinputpickerinteraction/delegate-swift.protocol.md) to learn when the picker begins and finishes presenting, and when it begins and finishes dismissing. The interaction reports those transitions around its own presentation, so an app that dims its interface while someone chooses an input has a place to do that work.

## Topics

### Creating an input picker

- [init](avinputpickerinteraction/init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.
- [initWithAudioSession:](avinputpickerinteraction/init%28audiosession_%29.md): Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

### Managing presentation

- [presented](avinputpickerinteraction/ispresented.md): A Boolean value that indicates whether the picker is currently visible.
- [present](avinputpickerinteraction/present%28%29.md): Presents the input picker.
- [dismiss](avinputpickerinteraction/dismiss%28%29.md): Dismisses the input picker.

### Setting the delegate

- [delegate](avinputpickerinteraction/delegate-swift.property.md): The input picker view’s delegate.
- [AVInputPickerInteractionDelegate](avinputpickerinteraction/delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

### Accessing the audio session

- [audioSession](avinputpickerinteraction/audiosession.md): The audio session for the picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](../uikit/uiinteraction.md)
