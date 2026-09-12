> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/view](https://developer.apple.com/documentation/appkit/nsviewcontroller/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The view controller’s primary view.

## Declaration

```swift
@IBOutlet var view: NSView { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is not already set when you access it, the view controller invokes the [loadView()](loadview%28%29.md) method. That method, in turn, sets the view from the nib file identified by the view controller’s [nibName](nibname.md) and [nibBundle](nibbundle.md) properties.

If you want to set a view controller’s view directly, set this property’s value immediately after creating the view controller.

## See Also

### View Properties

- [title](title.md): The localized title of the receiver’s primary view.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The view controller’s primary view.

## Declaration

```objectivec
@property (strong) NSView * view;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is not already set when you access it, the view controller invokes the [loadView](loadview%28%29.md) method. That method, in turn, sets the view from the nib file identified by the view controller’s [nibName](nibname.md) and [nibBundle](nibbundle.md) properties.

If you want to set a view controller’s view directly, set this property’s value immediately after creating the view controller.

## See Also

### View Properties

- [title](title.md): The localized title of the receiver’s primary view.
