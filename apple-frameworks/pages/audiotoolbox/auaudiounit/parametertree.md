> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/parametertree](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/parametertree)

# parameterTree (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An audio unit’s parameters, organized in a tree hierarchy.

## Declaration

```swift
var parameterTree: AUParameterTree? { get set }
```

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Hosts can fetch this property to discover a unit’s parameters. KVO notifications are issued on this member to notify the host of changes to the set of available parameters.

Subclasses should implement this property to expose parameters to hosts. They should then cache as much data as possible and send KVO notifications on this property when altering the structure of the tree or the static information of parameters.

This version 3 property is similar to the version 2 `kAudioUnitProperty_ParameterList` and `kAudioUnitProperty_ParameterInfo` APIs.

## See Also

### Querying Parameters

- [allParameterValues](allparametervalues.md): Special read-only property for KVO.
- [parametersForOverview(withCount:)](parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.

# parameterTree (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An audio unit’s parameters, organized in a tree hierarchy.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AUParameterTree * parameterTree;
```

```objectivec
@property (atomic, retain, nullable) AUParameterTree * parameterTree;
```

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Hosts can fetch this property to discover a unit’s parameters. KVO notifications are issued on this member to notify the host of changes to the set of available parameters.

Subclasses should implement this property to expose parameters to hosts. They should then cache as much data as possible and send KVO notifications on this property when altering the structure of the tree or the static information of parameters.

This version 3 property is similar to the version 2 `kAudioUnitProperty_ParameterList` and `kAudioUnitProperty_ParameterInfo` APIs.

## See Also

### Querying Parameters

- [allParameterValues](allparametervalues.md): Special read-only property for KVO.
- [parametersForOverviewWithCount:](parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.
