> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/touchbar](https://developer.apple.com/documentation/appkit/nsresponder/touchbar)

# touchBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The [NSTouchBar](../nstouchbar.md) object associated with the responder.

## Declaration

```swift
var touchBar: NSTouchBar? { get set }
```

<a id="Discussion"></a>

## Discussion

If you have not explicitly provided an [NSTouchBar](../nstouchbar.md) object for a responder by setting this property, the system sends the [makeTouchBar()](maketouchbar%28%29.md) message to the responder to create the default bar. This property is archived.

## See Also

### Supporting the Touch Bar

- [makeTouchBar()](maketouchbar%28%29.md): Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](../nstouchbar.md) object.

# touchBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The [NSTouchBar](../nstouchbar.md) object associated with the responder.

## Declaration

```objectivec
@property (strong, readwrite, nullable) NSTouchBar * touchBar;
```

<a id="Discussion"></a>

## Discussion

If you have not explicitly provided an [NSTouchBar](../nstouchbar.md) object for a responder by setting this property, the system sends the [makeTouchBar](maketouchbar%28%29.md) message to the responder to create the default bar. This property is archived.

## See Also

### Supporting the Touch Bar

- [makeTouchBar](maketouchbar%28%29.md): Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](../nstouchbar.md) object.
