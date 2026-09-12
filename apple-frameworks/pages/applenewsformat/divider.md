> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/divider](https://developer.apple.com/documentation/applenewsformat/divider)

# Divider

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The component for defining a horizontal line to visually divide parts of your article.

## Declaration

```
object Divider
```

## Properties

- `role` — `string` (required): Always `divider` for this component.
  **Allowed values:** `divider`
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation you apply to the component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalDivider | [ConditionalDivider])`: An instance or array of component properties that can be applied conditionally,  and the conditions that cause Apple News Format to apply them.
  **Allowed types:** `ConditionalDivider`, `[ConditionalDivider]`
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If used, this `identifier` must be unique across the entire document. You will need an `identifier` for your component if you want to anchor other components to it.
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that is defined at the top level of the document.

  If `layout` is not defined, size and position are based on various factors, such as the device type, the length of the content, and the `role` of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `stroke` — `(StrokeStyle | string("none"))`: The stroke properties to apply to the horizontal line.

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `StrokeStyle`, `string("none")`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyle` object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that is defined at the top level of the document.

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`

## Mentioned In

- [Positioning the Content in Your Article](../applenews/positioning-the-content-in-your-article.md)

<a id="Discussion"></a>

## Discussion

A `divider` component appears as a horizontal line to create a visual division. The `divider` component can be used to separate title components and section components, and so on.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "heading1",
      "text": "Heading"
    },
    {
      "role": "divider",
      "stroke": {
        "width": 3,
        "color": "#D5B327"
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Related Documentation

- [Adding a Divider](../applenews/adding-a-divider.md): Create a horizontal, styled divider that extends to the right edge of the display.

### Article Structure

- [Nesting Components in an Article](../applenews/nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
- [Adding a Scene to a Chapter or a Section Header](../applenews/adding-a-scene-to-a-chapter-or-a-section-header.md): Add a scene to your article to create special effects.
- [Creating an Article Link](../applenews/creating-an-article-link.md): Link to an article by using the article-linking container component.
- [Displaying Components Side By Side](../applenews/displaying-components-side-by-side.md): Configure a side-by-side, horizontal arrangement of components for your article.
- [Header](header.md): The component for defining the top area of an article, chapter, or section.
- [Container](container.md): Properties shared by all container types.
- [Section](section.md): The component for organizing an article into sections.
- [Chapter](chapter.md): The component for organizing an article into chapters.
- [Aside](aside.md): The component for setting apart content that is not directly related to the article, such as promotional content.
- [CollectionDisplay](collectiondisplay.md): An object used in any container component type to define how the collection of child components is presented.
- [HorizontalStackDisplay](horizontalstackdisplay.md): The object for displaying components side by side in a Container component.
- [FlexibleSpacer](flexiblespacer.md): The component for redistributing empty space inside a horizontal stack collection.
- [ArticleLink](articlelink.md): The container component for creating a link to an article.
- [SupportedArticleIdentifier](supportedarticleidentifier.md): The patterns supported for article identifiers in UUID format.
- [PublisherArticleIdentifier](publisherarticleidentifier.md): The identifier provided by the publisher.
