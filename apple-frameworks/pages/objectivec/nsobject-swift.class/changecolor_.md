> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/changecolor:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changecolor:)

# changeColor:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent to the first responder when the user selects a color in an `NSColorPanel` object.

## Declaration

```objectivec
- (void) changeColor:(id) sender;
```

## Parameters

- `sender`: The `NSColorPanel` sending the message.

<a id="Discussion"></a>

## Discussion

When the user selects a color in an [NSColorPanel](https://developer.apple.com/documentation/appkit/nscolorpanel) object, the panel tries to call this method on the first responder. You can override this method in any responder that needs to respond to a color change.
