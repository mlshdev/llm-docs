> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsfontmanager/shared

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared instance of the font manager for the application, creating it if necessary.

## Declaration

```swift
class var shared: NSFontManager { get }
```

<a id="return-value"></a>

## Return Value

The shared font manager.

## See Also

### Related Documentation

- [setFontManagerFactory(\_:)](setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.

# sharedFontManager (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared instance of the font manager for the application, creating it if necessary.

## Declaration

```objectivec
@property (class, strong, readonly) NSFontManager * sharedFontManager;
```

<a id="return-value"></a>

## Return Value

The shared font manager.

## See Also

### Related Documentation

- [setFontManagerFactory:](setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.
