> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkstatesetting/recognizedevents(_:)](https://developer.apple.com/documentation/inputmethodkit/imkstatesetting/recognizedevents(_:))

# recognizedEvents(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an unsigned integer that contains a union of event masks

## Declaration

```swift
func recognizedEvents(_ sender: Any!) -> Int
```

## Parameters

- `sender`: The client object requesting the supported events.

<a id="return-value"></a>

## Return Value

An unsigned integer that contains a union of event masks (See the `NSEvent.h` header file.

<a id="Discussion"></a>

## Discussion

A client calls this method to check whether an input method supports an event. The default implementation returns `NSKeyDownMask`. If your input method handles only key down events, the Input Method Kit provides the default mouse handling. The default mouse-down handling behavior is as follows: If there is an active composition area and the user clicks in the text but outside of the composition area, the Input Method Kit sends your input method a `commitComposition:` message. This happens only for input methods that return only the default value—`NSKeyDownMask`.

# recognizedEvents: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an unsigned integer that contains a union of event masks

## Declaration

```objectivec
- (NSUInteger) recognizedEvents:(id) sender;
```

## Parameters

- `sender`: The client object requesting the supported events.

<a id="return-value"></a>

## Return Value

An unsigned integer that contains a union of event masks (See the `NSEvent.h` header file.

<a id="Discussion"></a>

## Discussion

A client calls this method to check whether an input method supports an event. The default implementation returns `NSKeyDownMask`. If your input method handles only key down events, the Input Method Kit provides the default mouse handling. The default mouse-down handling behavior is as follows: If there is an active composition area and the user clicks in the text but outside of the composition area, the Input Method Kit sends your input method a `commitComposition:` message. This happens only for input methods that return only the default value—`NSKeyDownMask`.
