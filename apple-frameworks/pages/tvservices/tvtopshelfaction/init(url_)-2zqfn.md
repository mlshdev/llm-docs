> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfaction/init(url:)-2zqfn](https://developer.apple.com/documentation/tvservices/tvtopshelfaction/init(url:)-2zqfn)

# init(url:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates a new action object that displays the content at the specified URL.

## Declaration

```swift
init(url URL: URL)
```

## Parameters

- `URL`: The URL of the content you want to display. Specify a deep link into your content. For example, specify the location of media items that you want to play, or specify the location of a page in your app that you want to display.

<a id="return-value"></a>

## Return Value

A new action object.

# initWithURL: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates a new action object that displays the content at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL of the content you want to display. Specify a deep link into your content. For example, specify the location of media items that you want to play, or specify the location of a page in your app that you want to display.

<a id="return-value"></a>

## Return Value

A new action object.
