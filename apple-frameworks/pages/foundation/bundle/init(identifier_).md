> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/init(identifier:)](https://developer.apple.com/documentation/foundation/bundle/init(identifier:))

# init(identifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSBundle` instance that has the specified bundle identifier.

## Declaration

```swift
init?(identifier: String)
```

## Parameters

- `identifier`: The identifier for an existing `NSBundle` instance.

<a id="return-value"></a>

## Return Value

The `NSBundle` object with the bundle identifier `identifier`, or `nil` if the requested bundle is not found on the system. This method creates and returns a new `NSBundle` object if there is no existing bundle associated with `identifier`. Otherwise, the existing instance is returned.

<a id="Discussion"></a>

## Discussion

This method is typically used by frameworks and plug-ins to locate their own bundle at runtime. This method may be somewhat more efficient than trying to locate the bundle using the [init(for:)](init%28for_%29.md) method. However, if the initial lookup of an already loaded and cached bundle with the specified identifier fails, this method uses potentially time-consuming heuristics to attempt to locate the bundle. As an optimization, you can use the [bundleWithPath:](../nsbundle/bundlewithpath_.md) or [init(url:)](init%28url_%29-a2t0.md) method instead to avoid file system traversal.

## See Also

### Creating and initializing a bundle

- [init(url:)](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [init(for:)](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [init(path:)](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.

# bundleWithIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSBundle` instance that has the specified bundle identifier.

## Declaration

```objectivec
+ (NSBundle *) bundleWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier for an existing `NSBundle` instance.

<a id="return-value"></a>

## Return Value

The `NSBundle` object with the bundle identifier `identifier`, or `nil` if the requested bundle is not found on the system. This method creates and returns a new `NSBundle` object if there is no existing bundle associated with `identifier`. Otherwise, the existing instance is returned.

<a id="Discussion"></a>

## Discussion

This method is typically used by frameworks and plug-ins to locate their own bundle at runtime. This method may be somewhat more efficient than trying to locate the bundle using the [bundleForClass:](init%28for_%29.md) method. However, if the initial lookup of an already loaded and cached bundle with the specified identifier fails, this method uses potentially time-consuming heuristics to attempt to locate the bundle. As an optimization, you can use the [bundleWithPath:](../nsbundle/bundlewithpath_.md) or [bundleWithURL:](init%28url_%29-a2t0.md) method instead to avoid file system traversal.

## See Also

### Creating and initializing a bundle

- [bundleWithURL:](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.
- [bundleForClass:](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [initWithPath:](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.
