> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/audiounitname](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/audiounitname)

# audioUnitName (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s name, derived from the component’s name.

## Declaration

```swift
var audioUnitName: String? { get }
```

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.

# audioUnitName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s name, derived from the component’s name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * audioUnitName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * audioUnitName;
```

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentName](componentname.md): The audio unit’s component’s name.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.
