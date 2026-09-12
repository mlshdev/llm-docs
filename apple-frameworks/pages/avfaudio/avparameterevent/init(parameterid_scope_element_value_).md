> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avparameterevent/init(parameterid:scope:element:value:)](https://developer.apple.com/documentation/avfaudio/avparameterevent/init(parameterid:scope:element:value:))

# init(parameterID:scope:element:value:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a parameter identifier, scope, element, and value for the parameter to set.

## Declaration

```swift
init(parameterID: UInt32, scope: UInt32, element: UInt32, value: Float)
```

## Parameters

- `parameterID`: The identifier of the parameter.
- `scope`: The audio unit scope for the parameter.
- `element`: The element index in the scope.
- `value`: The value of the parameter to set.

<a id="Discussion"></a>

## Discussion

For more information about the parameters, see [AudioUnitParameterID](../../audiotoolbox/audiounitparameterid.md), [AudioUnitScope](../../audiotoolbox/audiounitscope.md), and [AudioUnitElement](../../audiotoolbox/audiounitelement.md). The valid range of values depend on the parameter you set.

# initWithParameterID:scope:element:value: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a parameter identifier, scope, element, and value for the parameter to set.

## Declaration

```objectivec
- (instancetype) initWithParameterID:(UInt32) parameterID scope:(UInt32) scope element:(UInt32) element value:(float) value;
```

## Parameters

- `parameterID`: The identifier of the parameter.
- `scope`: The audio unit scope for the parameter.
- `element`: The element index in the scope.
- `value`: The value of the parameter to set.

<a id="Discussion"></a>

## Discussion

For more information about the parameters, see [AudioUnitParameterID](../../audiotoolbox/audiounitparameterid.md), [AudioUnitScope](../../audiotoolbox/audiounitscope.md), and [AudioUnitElement](../../audiotoolbox/audiounitelement.md). The valid range of values depend on the parameter you set.
