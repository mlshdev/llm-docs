> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreenshot/image](https://developer.apple.com/documentation/xcuiautomation/xcuiscreenshot/image)

# image (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A representation of the screenshot as a platform-native image object.

## Declaration

```swift
@NSCopying var image: UIImage { get }
```

```swift
@NSCopying var image: NSImage { get }
```

## See Also

### Screenshot representations

- [pngRepresentation](pngrepresentation.md): A representation of the screenshot as PNG image data.

# image (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A representation of the screenshot as a platform-native image object.

## Declaration

```objectivec
@property (copy, readonly) UIImage * image;
```

```objectivec
@property (copy, readonly) NSImage * image;
```

## See Also

### Screenshot representations

- [PNGRepresentation](pngrepresentation.md): A representation of the screenshot as PNG image data.
