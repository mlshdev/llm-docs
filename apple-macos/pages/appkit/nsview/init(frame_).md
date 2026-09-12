> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/init(frame:)](https://developer.apple.com/documentation/appkit/nsview/init(frame:))

# init(frame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.

## Declaration

```swift
init(frame frameRect: NSRect)
```

## Parameters

- `frameRect`: The frame rectangle for the created view object.

<a id="return-value"></a>

## Return Value

An initialized view or `nil` if AppKit couldn’t create the object.

<a id="Discussion"></a>

## Discussion

Insert the view into your window’s view hieararchy before you can do anything with it. This method is the designated initializer for the [NSView](../nsview.md) class.

## See Also

### Related Documentation

- [addSubview(\_:positioned:relativeTo:)](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)

### Creating a view object

- [init(coder:)](init%28coder_%29.md): Initializes a view using from data in the specified coder object.
- [prepareForReuse()](prepareforreuse%28%29.md): Restores the view to an initial state so that it can be reused.

# initWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The frame rectangle for the created view object.

<a id="return-value"></a>

## Return Value

An initialized view or `nil` if AppKit couldn’t create the object.

<a id="Discussion"></a>

## Discussion

Insert the view into your window’s view hieararchy before you can do anything with it. This method is the designated initializer for the [NSView](../nsview.md) class.

## See Also

### Related Documentation

- [addSubview:positioned:relativeTo:](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [addSubview:](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)

### Creating a view object

- [initWithCoder:](init%28coder_%29.md): Initializes a view using from data in the specified coder object.
- [prepareForReuse](prepareforreuse%28%29.md): Restores the view to an initial state so that it can be reused.
