> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/componentdescription](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/componentdescription)

# componentDescription (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The component description with which the audio unit was created.

## Declaration

```swift
var componentDescription: AudioComponentDescription { get }
```

## See Also

### Describing the Audio Unit

- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.

# componentDescription (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The component description with which the audio unit was created.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioComponentDescription componentDescription;
```

```objectivec
@property (atomic, readonly) AudioComponentDescription componentDescription;
```

## See Also

### Describing the Audio Unit

- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.
