> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/fullname](https://developer.apple.com/documentation/coregraphics/cgfont/fullname)

# fullName (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the full name associated with a font object.

## Declaration

```swift
var fullName: CFString? { get }
```

# CGFontCopyFullName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the full name associated with a font object.

## Declaration

```objectivec
extern CFStringRefCGFontCopyFullName(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The full name associated with the font.
