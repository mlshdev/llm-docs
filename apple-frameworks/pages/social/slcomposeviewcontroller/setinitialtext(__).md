> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/setinitialtext(_:)](https://developer.apple.com/documentation/social/slcomposeviewcontroller/setinitialtext(_:))

# setInitialText(\_:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Sets the initial text to be posted.

## Declaration

```swift
func setInitialText(_ text: String!) -> Bool
```

## Parameters

- `text`: The text to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the text was successfully set.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `text` does not fit in the currently available character space or if the view controller has already been presented to the user (and therefore cannot be changed). Character limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [add(\_:)](add%28__%29-1z68a.md): Adds an image to the post.
- [add(\_:)](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages()](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs()](removeallurls%28%29.md): Removes all URLs from the post.

# setInitialText: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Sets the initial text to be posted.

## Declaration

```objectivec
- (BOOL) setInitialText:(NSString *) text;
```

## Parameters

- `text`: The text to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the text was successfully set.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `text` does not fit in the currently available character space or if the view controller has already been presented to the user (and therefore cannot be changed). Character limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [addImage:](add%28__%29-1z68a.md): Adds an image to the post.
- [addURL:](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs](removeallurls%28%29.md): Removes all URLs from the post.
