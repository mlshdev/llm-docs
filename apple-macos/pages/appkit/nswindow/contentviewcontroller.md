> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentviewcontroller](https://developer.apple.com/documentation/appkit/nswindow/contentviewcontroller)

# contentViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The main content view controller for the window.

## Declaration

```swift
var contentViewController: NSViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property provides the content view of the window. Setting this value removes the existing value of [contentView](contentview.md) and makes the `contentViewController.view` the main content view for the window. By default, the value of this property is `nil`.

The content view controller controls only the [contentView](contentview.md) object, and not the title of the window. The window title can easily be bound to the [contentViewController](contentviewcontroller.md) object using code such as: `[window bind:NSTitleBinding toObject:contentViewController withKeyPath:@"title" options:nil]`. Setting [contentViewController](contentviewcontroller.md) causes the window to resize based on the current size of the [contentViewController](contentviewcontroller.md); to restrict the size of the window, use Auto Layout (note that the value of this property is encoded in the NIB). Directly assigning a [contentView](contentview.md) value clears out the root view controller.

## See Also

### Related Documentation

- [init(contentViewController:)](init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.

### Configuring the Window’s Content

- [contentView](contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.

# contentViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The main content view controller for the window.

## Declaration

```objectivec
@property (strong, nullable) NSViewController * contentViewController;
```

<a id="Discussion"></a>

## Discussion

The value of this property provides the content view of the window. Setting this value removes the existing value of [contentView](contentview.md) and makes the `contentViewController.view` the main content view for the window. By default, the value of this property is `nil`.

The content view controller controls only the [contentView](contentview.md) object, and not the title of the window. The window title can easily be bound to the [contentViewController](contentviewcontroller.md) object using code such as: `[window bind:NSTitleBinding toObject:contentViewController withKeyPath:@"title" options:nil]`. Setting [contentViewController](contentviewcontroller.md) causes the window to resize based on the current size of the [contentViewController](contentviewcontroller.md); to restrict the size of the window, use Auto Layout (note that the value of this property is encoded in the NIB). Directly assigning a [contentView](contentview.md) value clears out the root view controller.

## See Also

### Related Documentation

- [windowWithContentViewController:](init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.

### Configuring the Window’s Content

- [contentView](contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.
