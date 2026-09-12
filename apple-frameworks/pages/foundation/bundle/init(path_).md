> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/init(path:)](https://developer.apple.com/documentation/foundation/bundle/init(path:))

# init(path:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSBundle` object initialized to correspond to the specified directory.

## Declaration

```swift
init?(path: String)
```

## Parameters

- `path`: The path to a directory. This must be a full pathname for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

An `NSBundle` object initialized to correspond to `fullPath`. This method initializes and returns a new instance only if there is no existing bundle associated with `fullPath`, otherwise it deallocates `self` and returns the existing object. If `fullPath` doesn’t exist or the user doesn’t have access to it, returns `nil`.

<a id="Discussion"></a>

## Discussion

It’s not necessary to allocate and initialize an instance for the main bundle; use the [main](main.md) class method to get this instance. You can also use the [bundleWithPath:](../nsbundle/bundlewithpath_.md) class method to obtain a bundle identified by its directory path.

## See Also

### Creating and initializing a bundle

- [init(url:)](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [init(for:)](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [init(identifier:)](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.

# initWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSBundle` object initialized to correspond to the specified directory.

## Declaration

```objectivec
- (instancetype) initWithPath:(NSString *) path;
```

## Parameters

- `path`: The path to a directory. This must be a full pathname for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

An `NSBundle` object initialized to correspond to `fullPath`. This method initializes and returns a new instance only if there is no existing bundle associated with `fullPath`, otherwise it deallocates `self` and returns the existing object. If `fullPath` doesn’t exist or the user doesn’t have access to it, returns `nil`.

<a id="Discussion"></a>

## Discussion

It’s not necessary to allocate and initialize an instance for the main bundle; use the [mainBundle](main.md) class method to get this instance. You can also use the [bundleWithPath:](../nsbundle/bundlewithpath_.md) class method to obtain a bundle identified by its directory path.

## See Also

### Creating and initializing a bundle

- [bundleWithURL:](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.
- [bundleForClass:](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [bundleWithIdentifier:](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
