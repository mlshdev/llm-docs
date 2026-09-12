> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/init(scrollview:orientation:)](https://developer.apple.com/documentation/appkit/nsrulerview/init(scrollview:orientation:))

# init(scrollView:orientation:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a newly allocated NSRulerView to have `orientation` (`NSHorizontalRuler` or `NSVerticalRuler`) within `aScrollView`.

## Declaration

```swift
init(scrollView: NSScrollView?, orientation: NSRulerView.Orientation)
```

<a id="Discussion"></a>

## Discussion

The new ruler view displays the user’s preferred measurement units and has no client, markers, or accessory view. Unlike most subclasses of NSView, no initial frame rectangle is given for NSRulerView; its containing NSScrollView adjusts its frame rectangle as needed.

This method is the designated initializer for the NSRulerView class. Returns an initialized object.

## See Also

### Related Documentation

- [Ruler and Paragraph Style Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Rulers.html#//apple_ref/doc/uid/10000089i)

### Creating a Ruler View

- [init(coder:)](init%28coder_%29.md)

# initWithScrollView:orientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a newly allocated NSRulerView to have `orientation` (`NSHorizontalRuler` or `NSVerticalRuler`) within `aScrollView`.

## Declaration

```objectivec
- (instancetype) initWithScrollView:(NSScrollView *) scrollView orientation:(NSRulerOrientation) orientation;
```

<a id="Discussion"></a>

## Discussion

The new ruler view displays the user’s preferred measurement units and has no client, markers, or accessory view. Unlike most subclasses of NSView, no initial frame rectangle is given for NSRulerView; its containing NSScrollView adjusts its frame rectangle as needed.

This method is the designated initializer for the NSRulerView class. Returns an initialized object.

## See Also

### Related Documentation

- [Ruler and Paragraph Style Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Rulers.html#//apple_ref/doc/uid/10000089i)

### Creating a Ruler View

- [initWithCoder:](init%28coder_%29.md)
