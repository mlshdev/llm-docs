> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdirectionpad/valuechangedhandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerdirectionpad/valuechangedhandler)

# valueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the directional pad calls when the user changes its values.

## Declaration

```swift
var valueChangedHandler: GCControllerDirectionPadValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this handler to receive notifications when the user changes a direction value.

## See Also

### Getting change information

- [GCControllerDirectionPadValueChangedHandler](../gccontrollerdirectionpadvaluechangedhandler.md): The signature for the block that executes when either axis changes values.

# valueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the directional pad calls when the user changes its values.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCControllerDirectionPadValueChangedHandler valueChangedHandler;
```

<a id="Discussion"></a>

## Discussion

Set this handler to receive notifications when the user changes a direction value.

## See Also

### Getting change information

- [GCControllerDirectionPadValueChangedHandler](../gccontrollerdirectionpadvaluechangedhandler.md): The signature for the block that executes when either axis changes values.
