> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/performgammafade()](https://developer.apple.com/documentation/screensaver/screensaverview/performgammafade())

# performGammaFade() (Swift)

**Framework:** Screen Saver  
**Kind:** Type Method  
**Availability:** macOS 10.0+

Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.

## Declaration

```swift
class func performGammaFade() -> Bool
```

<a id="Discussion"></a>

## Discussion

This class method allows the screen saver view to select how the desktop visibly transitions to the screen saver view. When this method returns [true](https://developer.apple.com/documentation/swift/true), the screen gradually darkens before the animation begins. When it returns [false](https://developer.apple.com/documentation/swift/false), the screen transitions immediately to the screen saver. The latter behavior is more appropriate if the screen saver animates a screenshot of the desktop, as is the case for optical lens effects. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the preferred window behavior

- [backingStoreType()](backingstoretype%28%29.md): Returns the type of backing store you want for your screen saver’s window.

# performGammaFade (Objective-C)

**Framework:** Screen Saver  
**Kind:** Type Method  
**Availability:** macOS 10.0+

Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.

## Declaration

```objectivec
+ (BOOL) performGammaFade;
```

<a id="Discussion"></a>

## Discussion

This class method allows the screen saver view to select how the desktop visibly transitions to the screen saver view. When this method returns [true](https://developer.apple.com/documentation/swift/true), the screen gradually darkens before the animation begins. When it returns [false](https://developer.apple.com/documentation/swift/false), the screen transitions immediately to the screen saver. The latter behavior is more appropriate if the screen saver animates a screenshot of the desktop, as is the case for optical lens effects. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the preferred window behavior

- [backingStoreType](backingstoretype%28%29.md): Returns the type of backing store you want for your screen saver’s window.
