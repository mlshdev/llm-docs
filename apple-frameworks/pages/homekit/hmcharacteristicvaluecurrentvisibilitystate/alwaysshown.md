> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvaluecurrentvisibilitystate/alwaysshown](https://developer.apple.com/documentation/homekit/hmcharacteristicvaluecurrentvisibilitystate/alwaysshown)

# HMCharacteristicValueCurrentVisibilityState.alwaysShown (Swift)

**Framework:** HomeKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The media source is always displayed.

## Declaration

```swift
case alwaysShown
```

<a id="discussion"></a>

## Discussion

The media source can’t be hidden by writing to its Target Visibility State characteristic, even if one is included.

## See Also

### Visibility states

- [HMCharacteristicValueCurrentVisibilityState.connected](connected.md): The media source is displayed since there’s a device connected to the input source.
- [HMCharacteristicValueCurrentVisibilityState.hidden](hidden.md): The media source isn’t displayed.
- [HMCharacteristicValueCurrentVisibilityState.shown](shown.md): The media source is displayed.

# HMCharacteristicValueCurrentVisibilityStateAlwaysShown (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The media source is always displayed.

## Declaration

```objectivec
HMCharacteristicValueCurrentVisibilityStateAlwaysShown
```

<a id="discussion"></a>

## Discussion

The media source can’t be hidden by writing to its Target Visibility State characteristic, even if one is included.

## See Also

### Visibility states

- [HMCharacteristicValueCurrentVisibilityStateConnected](connected.md): The media source is displayed since there’s a device connected to the input source.
- [HMCharacteristicValueCurrentVisibilityStateHidden](hidden.md): The media source isn’t displayed.
- [HMCharacteristicValueCurrentVisibilityStateShown](shown.md): The media source is displayed.
