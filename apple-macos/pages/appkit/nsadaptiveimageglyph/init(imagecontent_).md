> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph/init(imagecontent:)](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph/init(imagecontent:))

# init(imageContent:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Create an adaptive image glyph from the previously saved data.

## Declaration

```swift
init(imageContent: Data)
```

## Parameters

- `imageContent`: The raw image data you obtained previously from an adaptive image glyph. Typically, you receive adaptive images from the text system, store their data with the rest of your content, and use the data to recreate the adaptive image later.

<a id="return-value"></a>

## Return Value

A new adaptive image glyph with the identifier and details from the image data.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an adaptive image glyph from data you previously saved.

## See Also

### Creating an adaptive image glyph

- [init(coder:)](init%28coder_%29.md)

# initWithImageContent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Create an adaptive image glyph from the previously saved data.

## Declaration

```objectivec
- (instancetype) initWithImageContent:(NSData *) imageContent;
```

## Parameters

- `imageContent`: The raw image data you obtained previously from an adaptive image glyph. Typically, you receive adaptive images from the text system, store their data with the rest of your content, and use the data to recreate the adaptive image later.

<a id="return-value"></a>

## Return Value

A new adaptive image glyph with the identifier and details from the image data.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an adaptive image glyph from data you previously saved.

## See Also

### Creating an adaptive image glyph

- [initWithCoder:](init%28coder_%29.md)
