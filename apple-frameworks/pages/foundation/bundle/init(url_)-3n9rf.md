> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/init(url:)-3n9rf](https://developer.apple.com/documentation/foundation/bundle/init(url:)-3n9rf)

# init(url:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · watchOS 2.0+

Returns an `NSBundle` object initialized to correspond to the specified file URL.

## Declaration

```swift
convenience init?(url: URL)
```

## Parameters

- `url`: The file URL to a directory. This must be a full URL for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

An `NSBundle` object initialized to correspond to @c url, or @c nil if @c url doesn’t exist or the user doesn’t have access to it.

<a id="discussion"></a>

## Discussion

This method initializes and returns a new instance only if there is no existing bundle associated with @c url, otherwise it deallocates @c self and returns the existing object.

# initWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSBundle` object initialized to correspond to the specified file URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The file URL to a directory. This must be a full URL for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

An `NSBundle` object initialized to correspond to @c url, or @c nil if @c url doesn’t exist or the user doesn’t have access to it.

<a id="discussion"></a>

## Discussion

This method initializes and returns a new instance only if there is no existing bundle associated with @c url, otherwise it deallocates @c self and returns the existing object.
