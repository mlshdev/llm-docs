> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/textlabel](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/textlabel)

# textLabel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A primary text label for the view.

> Use a content configuration to manage the view’s text instead. Use [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md) to get a default list content configuration, set your primary text to the [text](../uilistcontentconfiguration-swift.struct/text.md) property of the configuration, and apply the configuration by setting it to the [contentConfiguration](contentconfiguration-6b4eg.md) property of the view.

## Declaration

```swift
var textLabel: UILabel? { get }
```

<a id="Discussion"></a>

## Discussion

Accessing the value in this property causes the view to create a default label for displaying a detail text string. If you are managing the content of the view yourself by adding subviews to the [contentView](contentview.md) property, you should not access this property.

The label sizes to fit the content view area in the best way possible according to the size of the string. Its size also adjusts depending on whether there is a detail text label present.

This property is mutually exclusive with a content configuration. Setting a non-`nil` value for [contentConfiguration](contentconfiguration-6b4eg.md) resets this property to `nil`.

## See Also

### Deprecated

- [detailTextLabel](detailtextlabel.md): Deprecated. A detail text label for the view.

# textLabel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A primary text label for the view.

> Use a content configuration to manage the view’s text instead. Use [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md) to get a default list content configuration, set your primary text to the [text](../uilistcontentconfiguration-swift.struct/text.md) property of the configuration, and apply the configuration by setting it to the [contentConfiguration](contentconfiguration-6b4eg.md) property of the view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UILabel * textLabel;
```

<a id="Discussion"></a>

## Discussion

Accessing the value in this property causes the view to create a default label for displaying a detail text string. If you are managing the content of the view yourself by adding subviews to the [contentView](contentview.md) property, you should not access this property.

The label sizes to fit the content view area in the best way possible according to the size of the string. Its size also adjusts depending on whether there is a detail text label present.

This property is mutually exclusive with a content configuration. Setting a non-`nil` value for [contentConfiguration](contentconfiguration-6b4eg.md) resets this property to `nil`.

## See Also

### Deprecated

- [detailTextLabel](detailtextlabel.md): Deprecated. A detail text label for the view.
