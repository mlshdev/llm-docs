> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/setto(_:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/setto(_:))

# setTo(\_:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Sets the receiver to a specified value.

## Declaration

```swift
func setTo(_ value: Any?)
```

## Parameters

- `value`: The data the receiver should be set to. It can be an [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), `SBObject`, or any other type of object supported by the Scripting Bridge framework.

<a id="discussion"></a>

## Discussion

You should not call this method directly.

# setTo: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Sets the receiver to a specified value.

## Declaration

```objectivec
- (void) setTo:(id) value;
```

## Parameters

- `value`: The data the receiver should be set to. It can be an [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), `SBObject`, or any other type of object supported by the Scripting Bridge framework.

<a id="discussion"></a>

## Discussion

You should not call this method directly.

## See Also

### Sending Apple Events

- [sendEvent:id:parameters:](sendevent_id_parameters_.md): Sends an Apple event with the given event class, event ID, and format to the target application.
