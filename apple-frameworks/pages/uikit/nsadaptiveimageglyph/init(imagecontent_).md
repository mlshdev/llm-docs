> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph/init(imagecontent:)](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph/init(imagecontent:))

# init(imageContent:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create an adaptive image glyph from previously saved data.

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create an adaptive image glyph from previously saved data.

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
