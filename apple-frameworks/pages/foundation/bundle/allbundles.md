> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/allbundles](https://developer.apple.com/documentation/foundation/bundle/allbundles)

# allBundles (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all the application’s non-framework bundles.

## Declaration

```swift
class var allBundles: [Bundle] { get }
```

<a id="return-value"></a>

## Return Value

An array of all the application’s non-framework bundles.

<a id="Discussion"></a>

## Discussion

The returned array includes the main bundle and all bundles that have been dynamically created but doesn’t contain any bundles that represent frameworks.

## See Also

### Getting standard bundle objects

- [main](main.md): Returns the bundle object that contains the current executable.
- [allFrameworks](allframeworks.md): Returns an array of all of the application’s bundles that represent frameworks.

# allBundles (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all the application’s non-framework bundles.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSBundle *> * allBundles;
```

<a id="return-value"></a>

## Return Value

An array of all the application’s non-framework bundles.

<a id="Discussion"></a>

## Discussion

The returned array includes the main bundle and all bundles that have been dynamically created but doesn’t contain any bundles that represent frameworks.

## See Also

### Getting standard bundle objects

- [mainBundle](main.md): Returns the bundle object that contains the current executable.
- [allFrameworks](allframeworks.md): Returns an array of all of the application’s bundles that represent frameworks.
