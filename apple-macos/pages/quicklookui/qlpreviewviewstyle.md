> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewviewstyle](https://developer.apple.com/documentation/quicklookui/qlpreviewviewstyle)

# QLPreviewViewStyle (Swift)

**Framework:** Quick Look UI  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Styles for a Preview View.

## Declaration

```swift
enum QLPreviewViewStyle
```

## Topics

### Choosing a Preview Style

- [QLPreviewViewStyle.normal](qlpreviewviewstyle/normal.md): Provides the default preview style for larger, full-sized previews.
- [QLPreviewViewStyle.compact](qlpreviewviewstyle/compact.md): Provides a compact preview style suited for smaller previews or inspectors.

### Initializers

- [init(rawValue:)](qlpreviewviewstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Preview View

- [init(frame:style:)](qlpreviewview/init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [init(frame:)](qlpreviewview/init%28frame_%29.md): Creates a preview view with the provided frame.

# QLPreviewViewStyle (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Styles for a Preview View.

## Declaration

```objectivec
enum QLPreviewViewStyle : NSUInteger;
```

## Topics

### Choosing a Preview Style

- [QLPreviewViewStyleNormal](qlpreviewviewstyle/normal.md): Provides the default preview style for larger, full-sized previews.
- [QLPreviewViewStyleCompact](qlpreviewviewstyle/compact.md): Provides a compact preview style suited for smaller previews or inspectors.

## See Also

### Creating a Preview View

- [initWithFrame:style:](qlpreviewview/init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [initWithFrame:](qlpreviewview/init%28frame_%29.md): Creates a preview view with the provided frame.
