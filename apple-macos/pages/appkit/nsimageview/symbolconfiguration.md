> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/symbolconfiguration](https://developer.apple.com/documentation/appkit/nsimageview/symbolconfiguration)

# symbolConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

Specifies a combination of point size, weight, and scale to use when sizing and displaying symbol images.

## Declaration

```swift
@NSCopying var symbolConfiguration: NSImage.SymbolConfiguration? { get set }
```

<a id="discussion"></a>

## Discussion

If a symbol configuration isn’t provided, the image view uses a default size, weight, and scale provided by the system. The default value is `nil`.

## See Also

### Specifying the image

- [image](image.md): The image displayed by the image view.

# symbolConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

Specifies a combination of point size, weight, and scale to use when sizing and displaying symbol images.

## Declaration

```objectivec
@property (copy, nullable) NSImageSymbolConfiguration * symbolConfiguration;
```

<a id="discussion"></a>

## Discussion

If a symbol configuration isn’t provided, the image view uses a default size, weight, and scale provided by the system. The default value is `nil`.

## See Also

### Specifying the image

- [image](image.md): The image displayed by the image view.
