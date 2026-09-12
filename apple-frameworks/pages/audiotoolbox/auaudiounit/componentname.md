> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/componentname](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/componentname)

# componentName (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s component’s name.

## Declaration

```swift
var componentName: String? { get }
```

<a id="Discussion"></a>

## Discussion

By convention, an audio unit’s component name is “[manufacturerName](manufacturername.md): [audioUnitName](audiounitname.md)”.

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.

# componentName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s component’s name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * componentName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * componentName;
```

<a id="Discussion"></a>

## Discussion

By convention, an audio unit’s component name is “[manufacturerName](manufacturername.md): [audioUnitName](audiounitname.md)”.

## See Also

### Describing the Audio Unit

- [componentDescription](componentdescription.md): The component description with which the audio unit was created.
- [component](component.md): The component found in the component description with which the audio unit was created.
- [componentVersion](componentversion.md): The audio unit’s component’s version.
- [audioUnitName](audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](audiounitshortname.md)
- [manufacturerName](manufacturername.md): The manufacturer’s name, derived from the component’s name.
