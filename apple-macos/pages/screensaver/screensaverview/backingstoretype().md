> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/backingstoretype()](https://developer.apple.com/documentation/screensaver/screensaverview/backingstoretype())

# backingStoreType() (Swift)

**Framework:** Screen Saver  
**Kind:** Type Method  
**Availability:** macOS 10.0+

Returns the type of backing store you want for your screen saver’s window.

## Declaration

```swift
class func backingStoreType() -> NSWindow.BackingStoreType
```

<a id="Discussion"></a>

## Discussion

This method returns [NSWindow.BackingStoreType.buffered](../../appkit/nswindow/backingstoretype/buffered.md) by default. If you want to change the backing store type, override this method and return a new value. If you override the method, you don’t need to call the inherited version.

## See Also

### Getting the preferred window behavior

- [performGammaFade()](performgammafade%28%29.md): Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.

# backingStoreType (Objective-C)

**Framework:** Screen Saver  
**Kind:** Type Method  
**Availability:** macOS 10.0+

Returns the type of backing store you want for your screen saver’s window.

## Declaration

```objectivec
+ (NSBackingStoreType) backingStoreType;
```

<a id="Discussion"></a>

## Discussion

This method returns [NSBackingStoreBuffered](../../appkit/nswindow/backingstoretype/buffered.md) by default. If you want to change the backing store type, override this method and return a new value. If you override the method, you don’t need to call the inherited version.

## See Also

### Getting the preferred window behavior

- [performGammaFade](performgammafade%28%29.md): Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.
