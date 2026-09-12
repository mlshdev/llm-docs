> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/advertisinglayout](https://developer.apple.com/documentation/applenewsformat/advertisinglayout)

# AdvertisingLayout

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+ (deprecated in 1.7)

The object for defining the margin above and below advertising components.

> Use [AutoPlacementLayout](autoplacementlayout.md) instead.

## Declaration

```
object AdvertisingLayout
```

## Properties

- `margin` — `(Margin | integer)` (required): Describes margins on top and bottom as a single integer or as an object containing separate properties for top and bottom margins.

  Version 1.1  
  **Allowed types:** `Margin`, `integer`

<a id="Discussion"></a>

## Discussion

Define the margins for the [BannerAdvertisement](banneradvertisement.md) components that are inserted automatically. This object is different from the [ComponentLayout](componentlayout.md) object and supports only one property, `margin`.

This object can be used in [AdvertisingSettings](advertisingsettings.md).

<a id="Example"></a>

### Example

```json
{
  "advertisingSettings": {
    "frequency": 10,
    "layout": {
      "margin": {
        "top": 15,
        "bottom": 20
      }
    }
  }
}
```

## See Also

### Article Layout

- [Planning the Layout for Your Article](../applenews/planning-the-layout-for-your-article.md): Define a layout that supports the look you want for your article.
- [Positioning the Content in Your Article](../applenews/positioning-the-content-in-your-article.md): Align article components with columns in your layout.
- [Wrapping Text Around a Component](../applenews/wrapping-text-around-a-component.md): Define the layout of a text component to wrap around another component.
- [Layout](layout.md): The object for defining columns, gutters, and margins for your article’s designed width.
- [ComponentLayout](componentlayout.md): The object for defining the positioning for a specific component within the article’s column system.
- [Anchor](anchor.md): The object for anchoring one component to another component in your article’s layout.
- [Margin](margin.md): The object for defining the space above and below a component.
- [AutoPlacementLayout](autoplacementlayout.md): Deprecated. The object for defining the margin above and below advertising components.
