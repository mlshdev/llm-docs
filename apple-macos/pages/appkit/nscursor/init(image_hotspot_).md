> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/init(image:hotspot:)](https://developer.apple.com/documentation/appkit/nscursor/init(image:hotspot:))

# init(image:hotSpot:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Initializes a cursor with the given image and hot spot.

## Declaration

```swift
init(image newImage: UIImage, hotSpot point: NSPoint)
```

```swift
init(image newImage: NSImage, hotSpot point: NSPoint)
```

## Parameters

- `newImage`: The image to assign to the cursor.
- `point`: The point to set as the cursor’s hot spot.

<a id="return-value"></a>

## Return Value

An initialized cursor object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class.

## See Also

### Related Documentation

- [image](image.md): The cursor’s image.
- [Cursor Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CursorMgmt/CursorMgmt.html#//apple_ref/doc/uid/10000066i)
- [hotSpot](hotspot.md): The position of the click location within the cursor.

### Initializing a new cursor

- [init(coder:)](init%28coder_%29.md)

# initWithImage:hotSpot: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Initializes a cursor with the given image and hot spot.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) newImage hotSpot:(NSPoint) point;
```

```objectivec
- (instancetype) initWithImage:(NSImage *) newImage hotSpot:(NSPoint) point;
```

## Parameters

- `newImage`: The image to assign to the cursor.
- `point`: The point to set as the cursor’s hot spot.

<a id="return-value"></a>

## Return Value

An initialized cursor object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class.

## See Also

### Related Documentation

- [image](image.md): The cursor’s image.
- [Cursor Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CursorMgmt/CursorMgmt.html#//apple_ref/doc/uid/10000066i)
- [hotSpot](hotspot.md): The position of the click location within the cursor.

### Initializing a new cursor

- [initWithCoder:](init%28coder_%29.md)
