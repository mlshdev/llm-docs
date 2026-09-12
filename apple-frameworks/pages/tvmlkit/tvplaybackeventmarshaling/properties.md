> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackeventmarshaling/properties](https://developer.apple.com/documentation/tvmlkit/tvplaybackeventmarshaling/properties)

# properties (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of custom playback event properties.

> Please use SwiftUI or UIKit

## Declaration

```swift
var properties: [TVPlaybackEventProperty : Any]? { get }
```

## See Also

### Processing Playback Events

- [processReturnValue(value:in:)](processreturnvalue%28value_in_%29.md): Deprecated. Converts a JavaScript value into a value that is readable in Swift or Objective-C.
- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.

# properties (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of custom playback event properties.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDictionary<NSString *,id> * properties;
```

## See Also

### Processing Playback Events

- [processReturnJSValue:inContext:](processreturnvalue%28value_in_%29.md): Deprecated. Converts a JavaScript value into a value that is readable in Swift or Objective-C.
- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
