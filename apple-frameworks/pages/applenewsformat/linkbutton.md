> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/linkbutton](https://developer.apple.com/documentation/applenewsformat/linkbutton)

# LinkButton

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.11+

The component for opening a link in a button.

## Declaration

```
object LinkButton
```

## Properties

- `role` — `string` (required): Always `link_button` for this component.
  **Allowed values:** `link_button`
- `URL` — `SupportedURLs` (required): The URL to open when a person interacts with the range of text specified in the addition.
- `accessibilityLabel` — `string`: A string that’s read to the user when you enable certain accessibility functionalities.
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation you apply to the component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  To remove a previously set condition, use `none`.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalButton | [ConditionalButton])`: An instance or array of button properties that you can apply conditionally, and the conditions that cause Apple News Format to apply them.
  **Allowed types:** `ConditionalButton`, `[ConditionalButton]`
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: A unique identifier for this component. If you use an identifier, it must be unique across the entire document. An identifier is required if you want to anchor other components to this component.
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` that’s defined at the top level of the document.

  If you don’t define layout, Apple News bases the size and position on various factors, such as the device type, the length of the content, and the `role` of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyl`e object that defines the appearance of this component, or a string reference to a `ComponentStyle` that’s defined at the top level of the document.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`
- `text` — `string`: The text, styled according to the `textStyle` definition.
- `textStyle` — `(ComponentTextStyle | string)`: An inline `ComponentTextStyle` object that contains styling information, or a string reference to a `ComponentTextStyle` object that’s defined at the top level of the document.
  **Allowed types:** `ComponentTextStyle`, `string`

<a id="Discussion"></a>

## Discussion

Use the `LinkButton` component to display a button with a link. The link opens when someone interacts with the button. You can place the `LinkButton` anywhere in the document and style it using [ComponentStyle](componentstyle.md) and [ComponentTextStyle](componenttextstyle.md) properties.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "link_button",
      "URL": "http://apple.com",
      "text": "Read More",
      "style": {
        "backgroundColor": "#DDD",
        "mask": {
          "type": "corners",
          "radius": 25
        }
      },
      "layout": {
        "padding": 10
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

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
- [Divider](divider.md): The component for defining a horizontal line to visually divide parts of your article.
- [ArticleLink](articlelink.md): The container component for creating a link to an article.
- [SupportedArticleIdentifier](supportedarticleidentifier.md): The patterns supported for article identifiers in UUID format.
