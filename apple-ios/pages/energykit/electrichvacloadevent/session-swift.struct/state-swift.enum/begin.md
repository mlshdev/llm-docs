> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/state-swift.enum/begin

# ElectricHVACLoadEvent.Session.State.begin

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A state that represents the start of the session.

## Declaration

```swift
case begin
```

<a id="discussion"></a>

## Discussion

The electricity measurement stage must be 0

## See Also

### Setting session states

- [ElectricHVACLoadEvent.Session.State.active](active.md): A state that represents all electricity consumption events with active states.
- [ElectricHVACLoadEvent.Session.State.end](end.md): A state that represents the end of the session.
