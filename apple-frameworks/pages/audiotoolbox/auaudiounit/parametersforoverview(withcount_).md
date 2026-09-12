> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/parametersforoverview(withcount:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/parametersforoverview(withcount:))

# parametersForOverview(withCount:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the audio unit’s most important parameters.

## Declaration

```swift
func parametersForOverview(withCount count: Int) -> [NSNumber]
```

## Parameters

- `count`: The number of parameters to return.

<a id="return-value"></a>

## Return Value

An array of addresses representing the audio unit’s most important parameters.

<a id="Discussion"></a>

## Discussion

This method allows a host to query an audio unit for a small number of its most important parameters, to be displayed in a compact generic view.

This version 3 method is partially bridged to the version 2 `kAudioUnitProperty_ParametersForOverview` API.

## See Also

### Querying Parameters

- [parameterTree](parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [allParameterValues](allparametervalues.md): Special read-only property for KVO.

# parametersForOverviewWithCount: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the audio unit’s most important parameters.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) parametersForOverviewWithCount:(NSInteger) count;
```

## Parameters

- `count`: The number of parameters to return.

<a id="return-value"></a>

## Return Value

An array of addresses representing the audio unit’s most important parameters.

<a id="Discussion"></a>

## Discussion

This method allows a host to query an audio unit for a small number of its most important parameters, to be displayed in a compact generic view.

This version 3 method is partially bridged to the version 2 `kAudioUnitProperty_ParametersForOverview` API.

## See Also

### Querying Parameters

- [parameterTree](parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [allParameterValues](allparametervalues.md): Special read-only property for KVO.
