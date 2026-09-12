> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/init(url:)-a2t0](https://developer.apple.com/documentation/foundation/bundle/init(url:)-a2t0)

# init(url:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+

Returns an `NSBundle` object that corresponds to the specified file URL.

## Declaration

```swift
convenience init?(url: URL)
```

## Parameters

- `url`: The URL to a directory. This must be a URL for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

The `NSBundle` object that corresponds to `url`, or `nil` if `url` does not identify an accessible bundle directory.

<a id="Discussion"></a>

## Discussion

This method allocates and initializes the returned object if there is no existing `NSBundle` associated with `url`, in which case it returns the existing object.

## See Also

### Creating and initializing a bundle

- [init(for:)](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [init(identifier:)](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
- [init(path:)](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.

# bundleWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSBundle` object that corresponds to the specified file URL.

## Declaration

```objectivec
+ (instancetype) bundleWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to a directory. This must be a URL for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

The `NSBundle` object that corresponds to `url`, or `nil` if `url` does not identify an accessible bundle directory.

<a id="Discussion"></a>

## Discussion

This method allocates and initializes the returned object if there is no existing `NSBundle` associated with `url`, in which case it returns the existing object.

## See Also

### Creating and initializing a bundle

- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.
- [bundleForClass:](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [bundleWithIdentifier:](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
- [initWithPath:](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.
