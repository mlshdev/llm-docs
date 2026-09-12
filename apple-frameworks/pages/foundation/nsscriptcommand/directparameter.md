> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/directparameter](https://developer.apple.com/documentation/foundation/nsscriptcommand/directparameter)

# directParameter (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object that corresponds to the direct parameter of the Apple event from which the receiver derives.

## Declaration

```swift
var directParameter: Any? { get set }
```

## Parameters

- `directParameter`: An object to be set as the direct parameter.

<a id="Discussion"></a>

## Discussion

You don’t normally override this method.

# directParameter (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object that corresponds to the direct parameter of the Apple event from which the receiver derives.

## Declaration

```objectivec
@property (retain, nullable) id directParameter;
```

## Parameters

- `directParameter`: An object to be set as the direct parameter.

<a id="Discussion"></a>

## Discussion

You don’t normally override this method.
