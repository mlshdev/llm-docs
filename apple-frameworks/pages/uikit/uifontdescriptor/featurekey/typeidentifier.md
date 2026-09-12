> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/featurekey/typeidentifier](https://developer.apple.com/documentation/uikit/uifontdescriptor/featurekey/typeidentifier)

# typeIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 15.0) · iPadOS 7.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS  (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

A key for identifying the font feature selector.

> Use [selector](selector.md) instead.

## Declaration

```swift
static let typeIdentifier: UIFontDescriptor.FeatureKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object specifying the ligature, character shape, or other font feature.

## See Also

### Deprecated

- [featureIdentifier](featureidentifier.md): Deprecated. A key for identifying a font feature type.

# UIFontFeatureSelectorIdentifierKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key for identifying the font feature selector.

## Declaration

```objectivec
extern UIFontDescriptorFeatureKey const UIFontFeatureSelectorIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object specifying the ligature, character shape, or other font feature.

## See Also

### Deprecated

- [UIFontFeatureTypeIdentifierKey](featureidentifier.md): Deprecated. A key for identifying a font feature type.
