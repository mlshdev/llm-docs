> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avaudiosessionrouteselection

# AVAudioSessionRouteSelection

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that indicate the audio route selection.

## Declaration

```objectivec
enum AVAudioSessionRouteSelection : NSInteger;
```

## Topics

### Creating a route selection

- [AVAudioSessionRouteSelectionNone](avaudiosessionrouteselection/avaudiosessionrouteselectionnone.md): No route selection.
- [AVAudioSessionRouteSelectionLocal](avaudiosessionrouteselection/avaudiosessionrouteselectionlocal.md): A local device selection.
- [AVAudioSessionRouteSelectionExternal](avaudiosessionrouteselection/avaudiosessionrouteselectionexternal.md): An external device selection.

## See Also

### Route selection

- [AVRoutePickerView](avroutepickerview.md): A view that presents a list of nearby media receivers.
- [AVRoutePickerViewDelegate](avroutepickerviewdelegate.md): A protocol that defines the methods to adopt to respond to route picker view presentation events.
- [AVRoutePickerViewButtonStyle](avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
