> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageoptionkey](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageoptionkey)

# NSWorkspace.DesktopImageOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Keys that indicate how to display a new desktop image.

## Declaration

```swift
struct DesktopImageOptionKey
```

<a id="Discussion"></a>

## Discussion

Specify the following keys when calling the [setDesktopImageURL(\_:for:options:)](setdesktopimageurl%28__for_options_%29.md) method.

## Topics

### Option Keys

- [imageScaling](desktopimageoptionkey/imagescaling.md): A key that contains the behavior to use when scaling the image.
- [allowClipping](desktopimageoptionkey/allowclipping.md): A key that contains the behavior to use when clipping the image.
- [fillColor](desktopimageoptionkey/fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.

### Initializers

- [init(rawValue:)](desktopimageoptionkey/init%28rawvalue_%29.md): Initializes an option key using the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Desktop Image

- [desktopImageURL(for:)](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL(\_:for:options:)](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptions(for:)](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.

# NSWorkspaceDesktopImageOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Keys that indicate how to display a new desktop image.

## Declaration

```objectivec
typedef NSString * NSWorkspaceDesktopImageOptionKey;
```

<a id="Discussion"></a>

## Discussion

Specify the following keys when calling the [setDesktopImageURL:forScreen:options:error:](setdesktopimageurl%28__for_options_%29.md) method.

## Topics

### Option Keys

- [NSWorkspaceDesktopImageScalingKey](desktopimageoptionkey/imagescaling.md): A key that contains the behavior to use when scaling the image.
- [NSWorkspaceDesktopImageAllowClippingKey](desktopimageoptionkey/allowclipping.md): A key that contains the behavior to use when clipping the image.
- [NSWorkspaceDesktopImageFillColorKey](desktopimageoptionkey/fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.

## See Also

### Managing the Desktop Image

- [desktopImageURLForScreen:](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL:forScreen:options:error:](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptionsForScreen:](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
