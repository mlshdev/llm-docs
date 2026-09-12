> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/init(for:)](https://developer.apple.com/documentation/foundation/bundle/init(for:))

# init(for:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSBundle` object with which the specified class is associated.

## Declaration

```swift
init(for aClass: AnyClass)
```

## Parameters

- `aClass`: A class.

<a id="return-value"></a>

## Return Value

The `NSBundle` object that dynamically loaded `aClass` (a loadable bundle), the `NSBundle` object for the framework in which `aClass` is defined, or the main bundle object if `aClass` was not dynamically loaded or is not defined in a framework. This method creates and returns a new `NSBundle` object if there is no existing bundle associated with `aClass`. Otherwise, the existing instance is returned.

## See Also

### Related Documentation

- [main](main.md): Returns the bundle object that contains the current executable.

### Creating and initializing a bundle

- [init(url:)](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [init(identifier:)](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
- [init(path:)](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.

# bundleForClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSBundle` object with which the specified class is associated.

## Declaration

```objectivec
+ (NSBundle *) bundleForClass:(Class) aClass;
```

## Parameters

- `aClass`: A class.

<a id="return-value"></a>

## Return Value

The `NSBundle` object that dynamically loaded `aClass` (a loadable bundle), the `NSBundle` object for the framework in which `aClass` is defined, or the main bundle object if `aClass` was not dynamically loaded or is not defined in a framework. This method creates and returns a new `NSBundle` object if there is no existing bundle associated with `aClass`. Otherwise, the existing instance is returned.

## See Also

### Related Documentation

- [mainBundle](main.md): Returns the bundle object that contains the current executable.
- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.

### Creating and initializing a bundle

- [bundleWithURL:](init%28url_%29-a2t0.md): Returns an `NSBundle` object that corresponds to the specified file URL.
- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.
- [bundleWithIdentifier:](init%28identifier_%29.md): Returns the `NSBundle` instance that has the specified bundle identifier.
- [initWithPath:](init%28path_%29.md): Returns an `NSBundle` object initialized to correspond to the specified directory.
