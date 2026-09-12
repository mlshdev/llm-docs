> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/locale](https://developer.apple.com/documentation/appkit/nsimage/locale)

# locale (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.

## Declaration

```swift
var locale: Locale? { get }
```

## See Also

### Localizing Images

- [withLocale(\_:)](withlocale%28__%29.md): Creates and returns a new image with the specified locale.

# locale (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSLocale * locale;
```

## See Also

### Localizing Images

- [imageWithLocale:](withlocale%28__%29.md): Creates and returns a new image with the specified locale.
