> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/init(frame:)](https://developer.apple.com/documentation/appkit/nscontrol/init(frame:))

# init(frame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a control with the specified frame rectangle.

## Declaration

```swift
init(frame frameRect: NSRect)
```

## Parameters

- `frameRect`: The rectangle of the control, specified in points in the coordinate space of the enclosing view.

<a id="return-value"></a>

## Return Value

An initialized control object, or `nil` if the object couldn’t be initialized.

<a id="Discussion"></a>

## Discussion

If a cell has been specified for controls of this type, this method also creates an instance of the cell. Because `NSControl` is an abstract class, invocations of this method should appear only in the designated initializers of subclasses; that is, there should always be a more specific designated initializer for the subclass, as this method is the designated initializer for `NSControl`.

## See Also

### Related Documentation

- [NSControl](../nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.

### Creating a Control

- [init(coder:)](init%28coder_%29.md): Initializes a control with data in an unarchiver.

# initWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a control with the specified frame rectangle.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The rectangle of the control, specified in points in the coordinate space of the enclosing view.

<a id="return-value"></a>

## Return Value

An initialized control object, or `nil` if the object couldn’t be initialized.

<a id="Discussion"></a>

## Discussion

If a cell has been specified for controls of this type, this method also creates an instance of the cell. Because `NSControl` is an abstract class, invocations of this method should appear only in the designated initializers of subclasses; that is, there should always be a more specific designated initializer for the subclass, as this method is the designated initializer for `NSControl`.

## See Also

### Related Documentation

- [NSControl](../nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.

### Creating a Control

- [initWithCoder:](init%28coder_%29.md): Initializes a control with data in an unarchiver.
