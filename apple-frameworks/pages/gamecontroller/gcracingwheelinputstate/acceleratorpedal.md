> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcracingwheelinputstate/acceleratorpedal

# acceleratorPedal (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The controller’s accelerator pedal element.

## Declaration

```swift
var acceleratorPedal: (any GCButtonElement)? { get }
```

## See Also

### Getting input elements

- [wheel](wheel.md): The controller’s wheel element.
- [brakePedal](brakepedal.md): The controller’s brake pedal element.
- [clutchPedal](clutchpedal.md): The controller’s clutch element.
- [shifter](shifter.md): The controller’s gear shift element.

# acceleratorPedal (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The controller’s accelerator pedal element.

## Declaration

```objectivec
@property (readonly, nullable) id<GCButtonElement> acceleratorPedal;
```

## See Also

### Getting input elements

- [wheel](wheel.md): The controller’s wheel element.
- [brakePedal](brakepedal.md): The controller’s brake pedal element.
- [clutchPedal](clutchpedal.md): The controller’s clutch element.
- [shifter](shifter.md): The controller’s gear shift element.
