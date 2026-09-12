> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/touchbar](https://developer.apple.com/documentation/uikit/uiresponder/touchbar)

# touchBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The Touch Bar object for the responder.

## Declaration

```swift
var touchBar: NSTouchBar? { get set }
```

<a id="Discussion"></a>

## Discussion

This property’s default value — on devices with a Touch Bar — is the [NSTouchBar](https://developer.apple.com/documentation/appkit/nstouchbar) instance that the responder’s [makeTouchBar()](maketouchbar%28%29.md) method returns. Otherwise, the default value is `nil`.

## See Also

### Managing the Touch Bar

- [makeTouchBar()](maketouchbar%28%29.md): Asks the receiving responder to create and configure a Touch Bar object.

# touchBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The Touch Bar object for the responder.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSTouchBar * touchBar;
```

<a id="Discussion"></a>

## Discussion

This property’s default value — on devices with a Touch Bar — is the [NSTouchBar](https://developer.apple.com/documentation/appkit/nstouchbar) instance that the responder’s [makeTouchBar](maketouchbar%28%29.md) method returns. Otherwise, the default value is `nil`.

## See Also

### Managing the Touch Bar

- [makeTouchBar](maketouchbar%28%29.md): Asks the receiving responder to create and configure a Touch Bar object.
