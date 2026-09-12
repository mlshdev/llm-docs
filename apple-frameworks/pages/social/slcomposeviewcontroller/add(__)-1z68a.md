> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/add(_:)-1z68a](https://developer.apple.com/documentation/social/slcomposeviewcontroller/add(_:)-1z68a)

# add(\_:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Adds an image to the post.

## Declaration

```swift
func add(_ image: UIImage!) -> Bool
```

## Parameters

- `image`: The image to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the image was successfully added.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `image` does not fit in the currently available space, or if the view controller has already been presented to the user (and therefore cannot be changed). For the accepted `UIImage` formats, see [Figure 2](../../uikit/uiimage.md#1965930). Image size limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [setInitialText(\_:)](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [add(\_:)](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages()](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs()](removeallurls%28%29.md): Removes all URLs from the post.

# addImage: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Adds an image to the post.

## Declaration

```objectivec
- (BOOL) addImage:(UIImage *) image;
```

## Parameters

- `image`: The image to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the image was successfully added.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `image` does not fit in the currently available space, or if the view controller has already been presented to the user (and therefore cannot be changed). For the accepted `UIImage` formats, see [Figure 2](../../uikit/uiimage.md#1965930). Image size limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [setInitialText:](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [addURL:](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs](removeallurls%28%29.md): Removes all URLs from the post.
