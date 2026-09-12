> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct](https://developer.apple.com/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct)

# TimelineProviderContext.EnvironmentVariants

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A structure containing all varieties of environments where a widget could appear.

## Declaration

```swift
@dynamicMemberLookup struct EnvironmentVariants
```

<a id="overview"></a>

## Overview

When changes occur in environment values that affect display, like [colorScheme](https://developer.apple.com/documentation/swiftui/environmentvalues/colorscheme), WidgetKit renders your widget’s views. If your widget uses assets that take time to generate or depend on the specific environment they’re rendered in, you can generate those assets in advance based on the new environment values.

For example, in macOS, if the user has a mixture of @1x and @2x displays, the value for [displayScale](https://developer.apple.com/documentation/swiftui/environmentvalues/displayscale) includes both scales. With these values, you can prepare your content in advance, if needed, to handle either type of display.

## Topics

### Subscripts

- [subscript(\_:)](environmentvariants-swift.struct/subscript%28__%29.md): Returns the widget environment variants for a key path to an environment values instance.
- [subscript(dynamicMember:)](environmentvariants-swift.struct/subscript%28dynamicmember_%29.md): Returns the widget environment variants for a key path to an environment values instance.

## See Also

### Accessing Environment Variations

- [environmentVariants](environmentvariants-swift.property.md): All environment values that might be set when a widget appears.
