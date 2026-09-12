> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/withlocale(_:)](https://developer.apple.com/documentation/appkit/nsimage/withlocale(_:))

# withLocale(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates and returns a new image with the specified locale.

## Declaration

```swift
func withLocale(_ locale: Locale?) -> NSImage
```

<a id="discussion"></a>

## Discussion

If the receiver contains locale-sensitive representations, the returned image will prefer to draw using representations appropriate for the specified locale. If locale is `nil`, the returned image uses the default behavior of choosing representations appropriate for the system’s currently-configured locale.

## See Also

### Localizing Images

- [locale](locale.md): The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.

# imageWithLocale: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates and returns a new image with the specified locale.

## Declaration

```objectivec
- (NSImage *) imageWithLocale:(NSLocale *) locale;
```

<a id="discussion"></a>

## Discussion

If the receiver contains locale-sensitive representations, the returned image will prefer to draw using representations appropriate for the specified locale. If locale is `nil`, the returned image uses the default behavior of choosing representations appropriate for the system’s currently-configured locale.

## See Also

### Localizing Images

- [locale](locale.md): The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.
