> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/swiftui-templates](https://developer.apple.com/documentation/clockkit/swiftui-templates)

# SwiftUI templates (Swift)

**Framework:** ClockKit  
**Kind:** API Collection

Design complication templates using SwiftUI views.

<a id="overview"></a>

## Overview

ClockKit provides SwiftUI versions of the other graphic templates. These templates use a [View](https://developer.apple.com/documentation/swiftui/view) instance to draw some or all of the complication’s content. However, the following templates are particularly useful when drawing the complication with SwiftUI:

- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md)
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md)
- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md)

These templates use a single SwiftUI view to fill the entire complication, providing a blank canvas that you can use to draw the entire complication.

## Topics

### Corner templates

- [CLKComplicationTemplateGraphicCornerCircularView](clkcomplicationtemplategraphiccornercircularview.md): Deprecated. A template for displaying a SwiftUI view in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerGaugeView](clkcomplicationtemplategraphiccornergaugeview.md): Deprecated. A template for displaying a SwiftUI view and a gauge in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextView](clkcomplicationtemplategraphiccornertextview.md): Deprecated. A template for displaying a SwiftUI view and text in the clock face’s corner.

### Circular templates

- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md): Deprecated. A template for displaying a circular view.
- [CLKComplicationTemplateGraphicCircularOpenGaugeView](clkcomplicationtemplategraphiccircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.

### Rectangular templates

- [CLKComplicationTemplateGraphicRectangularStandardBodyView](clkcomplicationtemplategraphicrectangularstandardbodyview.md): Deprecated. A template for displaying a SwiftUI label and up to three rows of text.
- [CLKComplicationTemplateGraphicRectangularTextGaugeView](clkcomplicationtemplategraphicrectangulartextgaugeview.md): Deprecated. A template for displaying a header row with a SwiftUI view and text, a second row of text, and a gauge.
- [CLKComplicationTemplateGraphicRectangularLargeView](clkcomplicationtemplategraphicrectangularlargeview.md): Deprecated. A template for displaying a large rectangle containing header text and a SwiftUI view.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.

### Extra large templates

- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md): Deprecated. A template for displaying a circular SwiftUI view.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.

## See Also

### Templates

- [ComplicationRenderingMode](complicationrenderingmode.md): Deprecated. The complication’s appearance, as specified by the watch face.
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

# SwiftUI templates (Objective-C)

**Framework:** ClockKit  
**Kind:** API Collection

Design complication templates using SwiftUI views.

<a id="overview"></a>

## Overview

ClockKit provides SwiftUI versions of the other graphic templates. These templates use a [View](https://developer.apple.com/documentation/swiftui/view) instance to draw some or all of the complication’s content. However, the following templates are particularly useful when drawing the complication with SwiftUI:

- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md)
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md)
- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md)

These templates use a single SwiftUI view to fill the entire complication, providing a blank canvas that you can use to draw the entire complication.

## See Also

### Templates

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
