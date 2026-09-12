> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentinsetsreference](https://developer.apple.com/documentation/uikit/uicontentinsetsreference)

# UIContentInsetsReference (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the reference point of the content insets.

## Declaration

```swift
enum UIContentInsetsReference
```

## Topics

### Constants

- [UIContentInsetsReference.automatic](uicontentinsetsreference/automatic.md): Content insets use the system default reference point.
- [UIContentInsetsReference.none](uicontentinsetsreference/none.md): Content insets don’t have a reference point in relation to other insets.
- [UIContentInsetsReference.safeArea](uicontentinsetsreference/safearea.md): Content insets use a reference point in relation to the safe area.
- [UIContentInsetsReference.layoutMargins](uicontentinsetsreference/layoutmargins.md): Content insets use a reference point in relation to the layout margins.
- [UIContentInsetsReference.readableContent](uicontentinsetsreference/readablecontent.md): Content insets use a reference point in relation to the readable content guide.

### Initializers

- [init(rawValue:)](uicontentinsetsreference/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring section spacing

- [interGroupSpacing](nscollectionlayoutsection/intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](nscollectionlayoutsection/contentinsets.md): The amount of space between the content of the section and its boundaries.
- [contentInsetsReference](nscollectionlayoutsection/contentinsetsreference.md): The boundary to reference when defining content insets.
- [supplementaryContentInsetsReference](nscollectionlayoutsection/supplementarycontentinsetsreference.md): The reference boundary for content insets on boundary supplementary items.

# UIContentInsetsReference (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the reference point of the content insets.

## Declaration

```objectivec
enum UIContentInsetsReference : NSInteger;
```

## Topics

### Constants

- [UIContentInsetsReferenceAutomatic](uicontentinsetsreference/automatic.md): Content insets use the system default reference point.
- [UIContentInsetsReferenceNone](uicontentinsetsreference/none.md): Content insets don’t have a reference point in relation to other insets.
- [UIContentInsetsReferenceSafeArea](uicontentinsetsreference/safearea.md): Content insets use a reference point in relation to the safe area.
- [UIContentInsetsReferenceLayoutMargins](uicontentinsetsreference/layoutmargins.md): Content insets use a reference point in relation to the layout margins.
- [UIContentInsetsReferenceReadableContent](uicontentinsetsreference/readablecontent.md): Content insets use a reference point in relation to the readable content guide.

## See Also

### Configuring section spacing

- [interGroupSpacing](nscollectionlayoutsection/intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](nscollectionlayoutsection/contentinsets.md): The amount of space between the content of the section and its boundaries.
- [contentInsetsReference](nscollectionlayoutsection/contentinsetsreference.md): The boundary to reference when defining content insets.
- [supplementaryContentInsetsReference](nscollectionlayoutsection/supplementarycontentinsetsreference.md): The reference boundary for content insets on boundary supplementary items.
