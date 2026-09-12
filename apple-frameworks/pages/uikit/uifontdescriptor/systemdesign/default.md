> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/systemdesign/default](https://developer.apple.com/documentation/uikit/uifontdescriptor/systemdesign/default)

# default (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

The default typeface for an app’s user interface.

## Declaration

```swift
static let `default`: UIFontDescriptor.SystemDesign
```

<a id="Discussion"></a>

## Discussion

The returned typeface depends on the system. In iOS, using this constant with [withDesign(\_:)](../withdesign%28__%29.md) returns SF Pro, while in watchOS that returns SF Compact.

## See Also

### Typeface designs

- [rounded](rounded.md): The rounded variant of the default typeface.
- [monospaced](monospaced.md): The monospace variant of the default typeface.
- [serif](serif.md): The serif variant of the default typeface.

# UIFontDescriptorSystemDesignDefault (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

The default typeface for an app’s user interface.

## Declaration

```objectivec
extern UIFontDescriptorSystemDesign const UIFontDescriptorSystemDesignDefault;
```

<a id="Discussion"></a>

## Discussion

The returned typeface depends on the system. In iOS, using this constant with [fontDescriptorWithDesign:](../withdesign%28__%29.md) returns SF Pro, while in watchOS that returns SF Compact.

## See Also

### Typeface designs

- [UIFontDescriptorSystemDesignRounded](rounded.md): The rounded variant of the default typeface.
- [UIFontDescriptorSystemDesignMonospaced](monospaced.md): The monospace variant of the default typeface.
- [UIFontDescriptorSystemDesignSerif](serif.md): The serif variant of the default typeface.
