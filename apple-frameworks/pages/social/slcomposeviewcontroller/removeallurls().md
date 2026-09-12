> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/removeallurls()](https://developer.apple.com/documentation/social/slcomposeviewcontroller/removeallurls())

# removeAllURLs() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Removes all URLs from the post.

## Declaration

```swift
func removeAllURLs() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the URLs were successfully removed.

<a id="Discussion"></a>

## Discussion

If the view controller has already been presented to the user when [removeAllURLs()](removeallurls%28%29.md) is called, the method returns [false](https://developer.apple.com/documentation/swift/false) and the URLS are not removed.

## See Also

### Specifying the Contents of the Post

- [setInitialText(\_:)](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [add(\_:)](add%28__%29-1z68a.md): Adds an image to the post.
- [add(\_:)](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages()](removeallimages%28%29.md): Removes all images from the post.

# removeAllURLs (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Removes all URLs from the post.

## Declaration

```objectivec
- (BOOL) removeAllURLs;
```

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the URLs were successfully removed.

<a id="Discussion"></a>

## Discussion

If the view controller has already been presented to the user when [removeAllURLs](removeallurls%28%29.md) is called, the method returns [false](https://developer.apple.com/documentation/swift/false) and the URLS are not removed.

## See Also

### Specifying the Contents of the Post

- [setInitialText:](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [addImage:](add%28__%29-1z68a.md): Adds an image to the post.
- [addURL:](add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages](removeallimages%28%29.md): Removes all images from the post.
