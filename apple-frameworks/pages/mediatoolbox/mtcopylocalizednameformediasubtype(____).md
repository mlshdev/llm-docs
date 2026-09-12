> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtcopylocalizednameformediasubtype(_:_:)](https://developer.apple.com/documentation/mediatoolbox/mtcopylocalizednameformediasubtype(_:_:))

# MTCopyLocalizedNameForMediaSubType(\_:\_:) (Swift)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a localized name for the specified media type and subtype.

## Declaration

```swift
func MTCopyLocalizedNameForMediaSubType(_ mediaType: CMMediaType, _ mediaSubType: FourCharCode) -> CFString?
```

## See Also

### Utility

- [MTCopyLocalizedNameForMediaType(\_:)](mtcopylocalizednameformediatype%28__%29.md): Returns a localized name for the specified media type.

# MTCopyLocalizedNameForMediaSubType (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a localized name for the specified media type and subtype.

## Declaration

```objectivec
extern CFStringRefMTCopyLocalizedNameForMediaSubType(CMMediaType mediaType, FourCharCode mediaSubType);
```

## See Also

### Utility

- [MTCopyLocalizedNameForMediaType](mtcopylocalizednameformediatype%28__%29.md): Returns a localized name for the specified media type.
