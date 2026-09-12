> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrendererformat/default()](https://developer.apple.com/documentation/uikit/uigraphicsrendererformat/default())

# default() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+

Returns a format that represents the highest fidelity that the current device supports.

## Declaration

```swift
class func `default`() -> Self
```

<a id="return-value"></a>

## Return Value

An initialized format.

<a id="Discussion"></a>

## Discussion

The returned format object always represents the device’s highest fidelity, regardless of the actual fidelity currently employed by the device. A graphics renderer uses this method to create a format at initialization time if you use an initializer that does not have a format argument.

This property doesn’t always return a format that’s optimized for the current configuration of the main screen. If you’re rendering content for immediate display, it’s recommended that you use [preferred()](preferred%28%29.md) instead of this property.

## See Also

### Creating a format

- [preferred()](preferred%28%29.md): Returns the most suitable format for the main screen’s current configuration.

# defaultFormat (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+

Returns a format that represents the highest fidelity that the current device supports.

## Declaration

```objectivec
+ (instancetype) defaultFormat;
```

<a id="return-value"></a>

## Return Value

An initialized format.

<a id="Discussion"></a>

## Discussion

The returned format object always represents the device’s highest fidelity, regardless of the actual fidelity currently employed by the device. A graphics renderer uses this method to create a format at initialization time if you use an initializer that does not have a format argument.

This property doesn’t always return a format that’s optimized for the current configuration of the main screen. If you’re rendering content for immediate display, it’s recommended that you use [preferredFormat](preferred%28%29.md) instead of this property.

## See Also

### Creating a format

- [preferredFormat](preferred%28%29.md): Returns the most suitable format for the main screen’s current configuration.
