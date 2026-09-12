> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel/shared](https://developer.apple.com/documentation/appkit/nsfontpanel/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the single `NSFontPanel` instance for the application, creating it if necessary.

## Declaration

```swift
class var shared: NSFontPanel { get }
```

<a id="return-value"></a>

## Return Value

The `NSFontPanel` instance for the application.

## See Also

### Related Documentation

- [setFontPanelFactory(\_:)](../nsfontmanager/setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Getting the Font Panel

- [sharedFontPanelExists](sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.

# sharedFontPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the single `NSFontPanel` instance for the application, creating it if necessary.

## Declaration

```objectivec
@property (class, strong, readonly) NSFontPanel * sharedFontPanel;
```

<a id="return-value"></a>

## Return Value

The `NSFontPanel` instance for the application.

## See Also

### Related Documentation

- [setFontPanelFactory:](../nsfontmanager/setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Getting the Font Panel

- [sharedFontPanelExists](sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.
