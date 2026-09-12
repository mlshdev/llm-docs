> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/main](https://developer.apple.com/documentation/foundation/bundle/main)

# main (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bundle object that contains the current executable.

## Declaration

```swift
class var main: Bundle { get }
```

<a id="return-value"></a>

## Return Value

The `NSBundle` object corresponding to the bundle directory that contains the current executable. This method may return a valid bundle object even for unbundled apps. It may also return `nil` if the bundle object could not be created, so always check the return value.

<a id="Discussion"></a>

## Discussion

The main bundle lets you access the resources in the same directory as the currently running executable. For a running app or code running in a framework, the main bundle offers access to the app’s bundle directory.

## See Also

### Related Documentation

- [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i)
- [init(for:)](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i)

### Getting standard bundle objects

- [allFrameworks](allframeworks.md): Returns an array of all of the application’s bundles that represent frameworks.
- [allBundles](allbundles.md): Returns an array of all the application’s non-framework bundles.

# mainBundle (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bundle object that contains the current executable.

## Declaration

```objectivec
@property (class, strong, readonly) NSBundle * mainBundle;
```

<a id="return-value"></a>

## Return Value

The `NSBundle` object corresponding to the bundle directory that contains the current executable. This method may return a valid bundle object even for unbundled apps. It may also return `nil` if the bundle object could not be created, so always check the return value.

<a id="Discussion"></a>

## Discussion

The main bundle lets you access the resources in the same directory as the currently running executable. For a running app or code running in a framework, the main bundle offers access to the app’s bundle directory.

## See Also

### Related Documentation

- [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i)
- [bundleWithPath:](../nsbundle/bundlewithpath_.md): Returns an `NSBundle` object that corresponds to the specified directory.
- [bundleForClass:](init%28for_%29.md): Returns the `NSBundle` object with which the specified class is associated.
- [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i)

### Getting standard bundle objects

- [allFrameworks](allframeworks.md): Returns an array of all of the application’s bundles that represent frameworks.
- [allBundles](allbundles.md): Returns an array of all the application’s non-framework bundles.
