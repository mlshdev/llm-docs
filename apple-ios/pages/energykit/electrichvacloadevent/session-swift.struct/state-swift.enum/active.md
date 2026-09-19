> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/state-swift.enum/active

# ElectricHVACLoadEvent.Session.State.active

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A state that represents all electricity consumption events with active states.

## Declaration

```swift
case active
```

<a id="discussion"></a>

## Discussion

The events are relative to the begin state corresponding to the `begin` events session ID.

## See Also

### Setting session states

- [ElectricHVACLoadEvent.Session.State.begin](begin.md): A state that represents the start of the session.
- [ElectricHVACLoadEvent.Session.State.end](end.md): A state that represents the end of the session.
