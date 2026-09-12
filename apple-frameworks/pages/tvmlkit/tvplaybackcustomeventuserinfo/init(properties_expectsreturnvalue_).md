> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackcustomeventuserinfo/init(properties:expectsreturnvalue:)](https://developer.apple.com/documentation/tvmlkit/tvplaybackcustomeventuserinfo/init(properties:expectsreturnvalue:))

# init(properties:expectsReturnValue:) (Swift)

**Framework:** TVMLKit  
**Kind:** Initializer  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Create a new custom playback event user info dictionary.

> Please use SwiftUI or UIKit

## Declaration

```swift
init(properties: [TVPlaybackEventProperty : Any]?, expectsReturnValue: Bool)
```

## Parameters

- `properties`: A dictionary of custom playback event properties.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the custom playback event requires a return value.

<a id="Discussion"></a>

## Discussion

When created, if the function requires a return value, it is only dispatched to first listener. Otherwise, it is broadcast to all of the listeners.

## See Also

### Creating User Info for Custom Playback Events

- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
- [expectsReturnValue](expectsreturnvalue.md): Deprecated. A Boolean value that indicates whether the custom event expects to contain a return value.
- [returnValue](returnvalue.md): Deprecated. The return value type for the custom event.

# initWithProperties:expectsReturnValue: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Create a new custom playback event user info dictionary.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (instancetype) initWithProperties:(NSDictionary<NSString *,id> *) properties expectsReturnValue:(BOOL) expectsReturnValue;
```

## Parameters

- `properties`: A dictionary of custom playback event properties.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the custom playback event requires a return value.

<a id="Discussion"></a>

## Discussion

When created, if the function requires a return value, it is only dispatched to first listener. Otherwise, it is broadcast to all of the listeners.

## See Also

### Creating User Info for Custom Playback Events

- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
- [expectsReturnValue](expectsreturnvalue.md): Deprecated. A Boolean value that indicates whether the custom event expects to contain a return value.
- [returnValue](returnvalue.md): Deprecated. The return value type for the custom event.
