> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackeventmarshaling/processreturnvalue(value:in:)](https://developer.apple.com/documentation/tvmlkit/tvplaybackeventmarshaling/processreturnvalue(value:in:))

# processReturnValue(value:in:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Converts a JavaScript value into a value that is readable in Swift or Objective-C.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func processReturnValue(value: JSValue, in jsContext: JSContext)
```

## Parameters

- `value`: A JavaScript value returned by the dispatch event.
- `jsContext`: The JavaScript context for the value.

## See Also

### Processing Playback Events

- [properties](properties.md): Deprecated. An array of custom playback event properties.
- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.

# processReturnJSValue:inContext: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Converts a JavaScript value into a value that is readable in Swift or Objective-C.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) processReturnJSValue:(JSValue *) value inContext:(JSContext *) jsContext;
```

## Parameters

- `value`: A JavaScript value returned by the dispatch event.
- `jsContext`: The JavaScript context for the value.

## See Also

### Processing Playback Events

- [properties](properties.md): Deprecated. An array of custom playback event properties.
- [TVPlaybackEventProperty](../tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
