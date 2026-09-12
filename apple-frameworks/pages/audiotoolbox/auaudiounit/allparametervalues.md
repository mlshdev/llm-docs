> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/allparametervalues](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/allparametervalues)

# allParameterValues (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Special read-only property for KVO.

## Declaration

```swift
var allParameterValues: Bool { get }
```

<a id="Discussion"></a>

## Discussion

KVO notifications are issued on this property in response to certain events where potentially all parameter values are invalidated—for example, the selection of a preset.

## See Also

### Related Documentation

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.

### Querying Parameters

- [parameterTree](parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [parametersForOverview(withCount:)](parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.

# allParameterValues (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Special read-only property for KVO.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allParameterValues;
```

```objectivec
@property (atomic, readonly) BOOL allParameterValues;
```

<a id="Discussion"></a>

## Discussion

KVO notifications are issued on this property in response to certain events where potentially all parameter values are invalidated—for example, the selection of a preset.

## See Also

### Related Documentation

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.

### Querying Parameters

- [parameterTree](parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [parametersForOverviewWithCount:](parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.
