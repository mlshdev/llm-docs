> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/scene](https://developer.apple.com/documentation/applenewsformat/scene)

# Scene

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

A combination of animations and behaviors to use in sections and chapters that have headers.

## Declaration

```
object Scene
```

## Properties

- `type` — `string` (required): The type of scene. For example, `parallax_scale` for a Parallax Scale Header scene or `fading_sticky_header` for a Fading Sticky Header.

  Version 1.0  
  **Allowed values:** `fading_sticky_header`, `parallax_scale`

<a id="Discussion"></a>

## Discussion

A scene is a combination of animations and behaviors that lets you create special effects for the `section` and `chapter` components in an article. You don’t use the `Scene` object directly, but instead use the specific objects that extend scene:

- [FadingStickyHeader](fadingstickyheader.md)
- [ParallaxScaleHeader](parallaxscaleheader.md)

> **Tip**

>  To use a scene, create a child `header` component within your section or chapter, and then specify which scene you want to use in the `scene` property of the section or chapter.

You can use this object in [Chapter](chapter.md) and [Section](section.md).

## Relationships

### Inherited By

- [FadingStickyHeader](fadingstickyheader.md)
- [ParallaxScaleHeader](parallaxscaleheader.md)

## See Also

### Scene Types

- [FadingStickyHeader](fadingstickyheader.md): The scene that briefly keeps a header at the top of the screen as the person scrolls through the article.
- [ParallaxScaleHeader](parallaxscaleheader.md): The scene that gives the impression of a parallax effect by zooming out and scrolling slightly more slowly than the person’s action.
