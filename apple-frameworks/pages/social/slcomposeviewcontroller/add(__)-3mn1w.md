> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/add(_:)-3mn1w](https://developer.apple.com/documentation/social/slcomposeviewcontroller/add(_:)-3mn1w)

# add(\_:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Adds a URL to the post.

## Declaration

```swift
func add(_ url: URL!) -> Bool
```

## Parameters

- `url`: The URL to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the URL was successfully added.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `url` does not fit in the currently available character space or if the view controller has already been presented to the user (and therefore cannot be changed). Character limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [setInitialText(\_:)](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [add(\_:)](add%28__%29-1z68a.md): Adds an image to the post.
- [removeAllImages()](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs()](removeallurls%28%29.md): Removes all URLs from the post.

# addURL: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Adds a URL to the post.

## Declaration

```objectivec
- (BOOL) addURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to add to the post.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the URL was successfully added.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if `url` does not fit in the currently available character space or if the view controller has already been presented to the user (and therefore cannot be changed). Character limits are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Specifying the Contents of the Post

- [setInitialText:](setinitialtext%28__%29.md): Sets the initial text to be posted.
- [addImage:](add%28__%29-1z68a.md): Adds an image to the post.
- [removeAllImages](removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs](removeallurls%28%29.md): Removes all URLs from the post.
