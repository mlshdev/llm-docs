> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretext/ctfontgetuifonttype(_:)

# CTFontGetUIFontType(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func CTFontGetUIFontType(_ font: CTFont) -> CTFontUIFontType
```

<a id="discussion"></a>

## Discussion

Get the CTFontUIFontType of UI font. Note that this value may differ from the uiType parameter originally passed to CTFontCreateUIFontForLanguage, as the system may use a different uiType value internally.

# CTFontGetUIFontType (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
extern CTFontUIFontType CTFontGetUIFontType(CTFontRef font);
```

<a id="discussion"></a>

## Discussion

Get the CTFontUIFontType of UI font. Note that this value may differ from the uiType parameter originally passed to CTFontCreateUIFontForLanguage, as the system may use a different uiType value internally.
