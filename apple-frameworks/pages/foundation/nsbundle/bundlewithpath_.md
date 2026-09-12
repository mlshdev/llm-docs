> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundle/bundlewithpath:](https://developer.apple.com/documentation/foundation/nsbundle/bundlewithpath:)

# bundleWithPath:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSBundle` object that corresponds to the specified directory.

## Declaration

```objectivec
+ (instancetype) bundleWithPath:(NSString *) path;
```

## Parameters

- `path`: The path to a directory. This must be a full pathname for a directory; if it contains any symbolic links, they must be resolvable.

<a id="return-value"></a>

## Return Value

The `NSBundle` object that corresponds to `path`, or `nil` if `path` does not identify an accessible bundle directory.

<a id="Discussion"></a>

## Discussion

This method allocates and initializes the returned object if there is no existing `NSBundle` associated with `path`, in which case it returns the existing object.

## See Also

### Related Documentation

- [mainBundle](../bundle/main.md): Returns the bundle object that contains the current executable.

### Creating and initializing a bundle

- [bundleWithURL:](../bundle/init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [bundleForClass:](../bundle/init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [bundleWithIdentifier:](../bundle/init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
- [initWithPath:](../bundle/init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.
