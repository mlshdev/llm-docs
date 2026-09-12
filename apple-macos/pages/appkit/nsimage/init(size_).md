> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(size:)](https://developer.apple.com/documentation/appkit/nsimage/init(size:))

# init(size:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object with the specified dimensions.

## Declaration

```swift
init(size: NSSize)
```

## Parameters

- `size`: The size of the image, measured in points.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object with no rendered content.

<a id="Discussion"></a>

## Discussion

This method does not add any image representations to the image object. It is permissible to initialize the image object by passing a size of `(0.0, 0.0)`; however, you must set the size to a non-zero value before using it or an exception will be raised.

After using this method to initialize an image object, you are expected to provide the image contents before trying to draw the image. You might lock focus on the image and draw to the image or you might explicitly add an image representation that you created.

## See Also

### Related Documentation

- [size](size.md): The size of the image.

# initWithSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object with the specified dimensions.

## Declaration

```objectivec
- (instancetype) initWithSize:(NSSize) size;
```

## Parameters

- `size`: The size of the image, measured in points.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object with no rendered content.

<a id="Discussion"></a>

## Discussion

This method does not add any image representations to the image object. It is permissible to initialize the image object by passing a size of `(0.0, 0.0)`; however, you must set the size to a non-zero value before using it or an exception will be raised.

After using this method to initialize an image object, you are expected to provide the image contents before trying to draw the image. You might lock focus on the image and draw to the image or you might explicitly add an image representation that you created.

## See Also

### Related Documentation

- [size](size.md): The size of the image.
