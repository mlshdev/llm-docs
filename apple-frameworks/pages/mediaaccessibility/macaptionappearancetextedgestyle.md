> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancetextedgestyle](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancetextedgestyle)

# MACaptionAppearanceTextEdgeStyle (Swift)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies a style for the outside of the text.

## Declaration

```swift
enum MACaptionAppearanceTextEdgeStyle
```

## Topics

### Constants

- [MACaptionAppearanceTextEdgeStyle.undefined](macaptionappearancetextedgestyle/undefined.md): An edge style has not been specified.
- [MACaptionAppearanceTextEdgeStyle.none](macaptionappearancetextedgestyle/none.md): The text should not have a styled edge.
- [MACaptionAppearanceTextEdgeStyle.raised](macaptionappearancetextedgestyle/raised.md): An edge makes the text appear to rise above the background.
- [MACaptionAppearanceTextEdgeStyle.depressed](macaptionappearancetextedgestyle/depressed.md): An edge makes the text appear pushed in.
- [MACaptionAppearanceTextEdgeStyle.uniform](macaptionappearancetextedgestyle/uniform.md): A thin outline lies along the edge of the text.
- [MACaptionAppearanceTextEdgeStyle.dropShadow](macaptionappearancetextedgestyle/dropshadow.md): An edge makes the text appear to float above the background.

### Initializers

- [init(rawValue:)](macaptionappearancetextedgestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.

# MACaptionAppearanceTextEdgeStyle (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies a style for the outside of the text.

## Declaration

```objectivec
enum MACaptionAppearanceTextEdgeStyle : CFIndex;
```

## Topics

### Constants

- [kMACaptionAppearanceTextEdgeStyleUndefined](macaptionappearancetextedgestyle/undefined.md): An edge style has not been specified.
- [kMACaptionAppearanceTextEdgeStyleNone](macaptionappearancetextedgestyle/none.md): The text should not have a styled edge.
- [kMACaptionAppearanceTextEdgeStyleRaised](macaptionappearancetextedgestyle/raised.md): An edge makes the text appear to rise above the background.
- [kMACaptionAppearanceTextEdgeStyleDepressed](macaptionappearancetextedgestyle/depressed.md): An edge makes the text appear pushed in.
- [kMACaptionAppearanceTextEdgeStyleUniform](macaptionappearancetextedgestyle/uniform.md): A thin outline lies along the edge of the text.
- [kMACaptionAppearanceTextEdgeStyleDropShadow](macaptionappearancetextedgestyle/dropshadow.md): An edge makes the text appear to float above the background.

## See Also

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
