> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomimagerep/init(draw:delegate:)](https://developer.apple.com/documentation/appkit/nscustomimagerep/init(draw:delegate:))

# init(draw:delegate:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a representation of an image initialized with the specified delegate information.

## Declaration

```swift
init(draw selector: Selector, delegate: Any)
```

## Parameters

- `selector`: The selector to call when it is time to draw the image. The method should take a single parameter of type `id` that represents the [NSCustomImageRep](../nscustomimagerep.md) object that initiated drawing. The method must draw the image starting at the point (0, 0) in the current coordinate system.
- `delegate`: The delegate object that responds to the selector in `aMethod`.

<a id="return-value"></a>

## Return Value

An initialized [NSCustomImageRep](../nscustomimagerep.md) object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

When the receiver is asked to draw the image, it sends the specified message to the selector, passing itself as a parameter to the delegate method. The delegate’s drawing method should have the following form:

```objc
- (void)myCustomDrawMethod:(id)anNSCustomImageRep;
```

## See Also

### Related Documentation

- [draw()](../nsimagerep/draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.

### Creating Representations of Images in Custom Formats

- [init(size:flipped:drawingHandler:)](init%28size_flipped_drawinghandler_%29.md): Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.

# initWithDrawSelector:delegate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a representation of an image initialized with the specified delegate information.

## Declaration

```objectivec
- (instancetype) initWithDrawSelector:(SEL) selector delegate:(id) delegate;
```

## Parameters

- `selector`: The selector to call when it is time to draw the image. The method should take a single parameter of type `id` that represents the [NSCustomImageRep](../nscustomimagerep.md) object that initiated drawing. The method must draw the image starting at the point (0, 0) in the current coordinate system.
- `delegate`: The delegate object that responds to the selector in `aMethod`.

<a id="return-value"></a>

## Return Value

An initialized [NSCustomImageRep](../nscustomimagerep.md) object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

When the receiver is asked to draw the image, it sends the specified message to the selector, passing itself as a parameter to the delegate method. The delegate’s drawing method should have the following form:

```objc
- (void)myCustomDrawMethod:(id)anNSCustomImageRep;
```

## See Also

### Related Documentation

- [draw](../nsimagerep/draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.

### Creating Representations of Images in Custom Formats

- [initWithSize:flipped:drawingHandler:](init%28size_flipped_drawinghandler_%29.md): Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.
