> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns a view controller object initialized to the nib file in the specified bundle.

## Declaration

```swift
init(nibName nibNameOrNil: NSNib.Name?, bundle nibBundleOrNil: Bundle?)
```

## Parameters

- `nibNameOrNil`: The name of the nib file, without any leading path information.
- `nibBundleOrNil`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [NSViewController](../nsviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The [NSViewController](../nsviewcontroller.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

The specified nib file should typically have the class of the file’s owner set to [NSViewController](../nsviewcontroller.md), or a custom subclass, with the `view` outlet connected to a view.

If you pass in `nil` for `nibNameOrNil`, [nibName](nibname.md) returns `nil` and [loadView()](loadview%28%29.md) throws an exception; in this case you must set [view](view.md) before [view](view.md) is invoked, or override [loadView()](loadview%28%29.md).

## See Also

### Creating A View Controller

- [loadView()](loadview%28%29.md): Instantiates a view from a nib file and sets the value of the [view](view.md) property.

# initWithNibName:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a view controller object initialized to the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSNibName) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## Parameters

- `nibNameOrNil`: The name of the nib file, without any leading path information.
- `nibBundleOrNil`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [NSViewController](../nsviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The [NSViewController](../nsviewcontroller.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

The specified nib file should typically have the class of the file’s owner set to [NSViewController](../nsviewcontroller.md), or a custom subclass, with the `view` outlet connected to a view.

If you pass in `nil` for `nibNameOrNil`, [nibName](nibname.md) returns `nil` and [loadView](loadview%28%29.md) throws an exception; in this case you must set [view](view.md) before [view](view.md) is invoked, or override [loadView](loadview%28%29.md).

## See Also

### Creating A View Controller

- [loadView](loadview%28%29.md): Instantiates a view from a nib file and sets the value of the [view](view.md) property.
