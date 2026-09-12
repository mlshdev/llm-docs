> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvposterview/init(image:)](https://developer.apple.com/documentation/tvuikit/tvposterview/init(image:))

# init(image:) (Swift)

**Framework:** TVUIKit  
**Kind:** Initializer  
**Availability:** tvOS 12.0+

Creates a new poster view using the supplied image.

## Declaration

```swift
init(image: UIImage?)
```

## Parameters

- `image`: The image to be displayed in the content view area of the lockup view.

<a id="Discussion"></a>

## Discussion

The size of the poster view is determined by the natural size of the passed image when no frame or content size is explicitly set.

# initWithImage: (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+

Creates a new poster view using the supplied image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to be displayed in the content view area of the lockup view.

<a id="Discussion"></a>

## Discussion

The size of the poster view is determined by the natural size of the passed image when no frame or content size is explicitly set.
