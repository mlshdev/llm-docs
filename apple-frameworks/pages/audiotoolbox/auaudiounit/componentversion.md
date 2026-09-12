> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/componentversion](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/componentversion)

# componentVersion (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s component’s version.

## Declaration

```swift
var componentVersion: UInt32 { get }
```

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.

# componentVersion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s component’s version.

## Declaration

```objectivec
@property (nonatomic, readonly) uint32_t componentVersion;
```

```objectivec
@property (atomic, readonly) uint32_t componentVersion;
```

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.
