> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/setfontpanelfactory(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/setfontpanelfactory(_:))

# setFontPanelFactory(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the class that creates the shared Font panel object.

## Declaration

```swift
class func setFontPanelFactory(_ factoryId: AnyClass?)
```

## Parameters

- `factoryId`: The new font panel factory class, which should be a subclass of `NSFontPanel`.

<a id="Discussion"></a>

## Discussion

Call this method before accessing the Font panel in any way, such as in your app delegate’s [applicationWillFinishLaunching(\_:)](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method.

## See Also

### Changing the Default Font Conversion Classes

- [setFontManagerFactory(\_:)](setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.

# setFontPanelFactory: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the class that creates the shared Font panel object.

## Declaration

```objectivec
+ (void) setFontPanelFactory:(Class) factoryId;
```

## Parameters

- `factoryId`: The new font panel factory class, which should be a subclass of `NSFontPanel`.

<a id="Discussion"></a>

## Discussion

Call this method before accessing the Font panel in any way, such as in your app delegate’s [applicationWillFinishLaunching:](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method.

## See Also

### Changing the Default Font Conversion Classes

- [setFontManagerFactory:](setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.
