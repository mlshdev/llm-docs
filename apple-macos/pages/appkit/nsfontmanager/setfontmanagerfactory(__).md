> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/setfontmanagerfactory(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/setfontmanagerfactory(_:))

# setFontManagerFactory(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the class that creates the shared font manager object.

## Declaration

```swift
class func setFontManagerFactory(_ factoryId: AnyClass?)
```

## Parameters

- `factoryId`: The new font manager factory class, which must be a subclass of [NSFontManager](../nsfontmanager.md).

<a id="Discussion"></a>

## Discussion

When you call the [shared](shared.md) method of [NSFontManager](../nsfontmanager.md), it creates an instance of `aClass`, if no instance already exists. The class in `aClass` must implement `init` as its designated initializer. The default font manager factory is `NSFontManager`.

Call this method before AppKit loads your application’s main nib file, such as in your app delegate’s [applicationWillFinishLaunching(\_:)](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method.

## See Also

### Changing the Default Font Conversion Classes

- [setFontPanelFactory(\_:)](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

# setFontManagerFactory: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the class that creates the shared font manager object.

## Declaration

```objectivec
+ (void) setFontManagerFactory:(Class) factoryId;
```

## Parameters

- `factoryId`: The new font manager factory class, which must be a subclass of [NSFontManager](../nsfontmanager.md).

<a id="Discussion"></a>

## Discussion

When you call the [sharedFontManager](shared.md) method of [NSFontManager](../nsfontmanager.md), it creates an instance of `aClass`, if no instance already exists. The class in `aClass` must implement `init` as its designated initializer. The default font manager factory is `NSFontManager`.

Call this method before AppKit loads your application’s main nib file, such as in your app delegate’s [applicationWillFinishLaunching:](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method.

## See Also

### Changing the Default Font Conversion Classes

- [setFontPanelFactory:](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.
