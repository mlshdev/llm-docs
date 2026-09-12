> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/complicationrenderingmode](https://developer.apple.com/documentation/clockkit/complicationrenderingmode)

# ComplicationRenderingMode

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The complication’s appearance, as specified by the watch face.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
enum ComplicationRenderingMode
```

## Mentioned In

- [Building complications with SwiftUI](building-complications-with-swiftui.md)

## Topics

### Rendering Modes

- [ComplicationRenderingMode.fullColor](complicationrenderingmode/fullcolor.md): Deprecated. The system renders the complication in full color.
- [ComplicationRenderingMode.tinted](complicationrenderingmode/tinted.md): Deprecated. The system renders the complication as a tinted complication.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Templates

- [SwiftUI templates](swiftui-templates.md): Design complication templates using SwiftUI views.
- [Data providers](data-providers.md): Feed data to a complication template.
- [Circular small](circular-small.md): Display small, circular content in the corners of the Color watch face.
- [Extra large](extra-large.md): Display content on the X-Large watch face.
- [Modular small](modular-small.md): Display content in the smaller spaces of the Modular watch face.
- [Modular large](modular-large.md): Display multiple rows of content in the large, central complication on the Modular watch face.
- [Utilitarian](utilitarian.md): Use the utilitarian templates to display content on a variety of watch faces, including the Utility, Chronograph, Simple, and character watch faces.
- [Graphic](graphic.md): Display visually rich content on watch faces.
- [CLKComplicationTemplate](clkcomplicationtemplate.md): Deprecated. An abstract class that defines the base behavior for all templates.
- [CLKComplicationFamily](clkcomplicationfamily.md): Deprecated. Constants indicating the template groups.
- [CLKComplicationSupportedFamilies](../bundleresources/information-property-list/clkcomplicationsupportedfamilies.md): Deprecated. The complication families for which the app can provide data.
