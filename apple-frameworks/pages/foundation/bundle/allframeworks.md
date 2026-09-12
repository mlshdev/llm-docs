> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/allframeworks](https://developer.apple.com/documentation/foundation/bundle/allframeworks)

# allFrameworks (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all of the application’s bundles that represent frameworks.

## Declaration

```swift
class var allFrameworks: [Bundle] { get }
```

<a id="return-value"></a>

## Return Value

An array of all of the application’s bundles that represent frameworks. Only frameworks with one or more Objective-C classes in them are included.

<a id="Discussion"></a>

## Discussion

The returned array includes frameworks that are linked into an application when the application is built and bundles for frameworks that have been dynamically created.

## See Also

### Getting standard bundle objects

- [main](main.md): Returns the bundle object that contains the current executable.
- [allBundles](allbundles.md): Returns an array of all the application’s non-framework bundles.

# allFrameworks (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all of the application’s bundles that represent frameworks.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSBundle *> * allFrameworks;
```

<a id="return-value"></a>

## Return Value

An array of all of the application’s bundles that represent frameworks. Only frameworks with one or more Objective-C classes in them are included.

<a id="Discussion"></a>

## Discussion

The returned array includes frameworks that are linked into an application when the application is built and bundles for frameworks that have been dynamically created.

## See Also

### Getting standard bundle objects

- [mainBundle](main.md): Returns the bundle object that contains the current executable.
- [allBundles](allbundles.md): Returns an array of all the application’s non-framework bundles.
