> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/about-component-animations](https://developer.apple.com/documentation/applenews/about-component-animations)

# About Component Animations

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Learn how to affect the way in which components come into view.

<a id="overview"></a>

## Overview

An animation is an effect, such as a fade-in, that’s applied to an individual component. Apple News Format has these animations for components:

- [AppearAnimation](../applenewsformat/appearanimation.md). Causes the component to appear.
- [FadeInAnimation](../applenewsformat/fadeinanimation.md). Causes the component to fade into view.
- [MoveInAnimation](../applenewsformat/moveinanimation.md). Causes the component to move into view from the left or right side of the screen.
- [ScaleFadeAnimation](../applenewsformat/scalefadeanimation.md). Causes the component to fade into view and scale up.

An *animation* is different from a *behavior*. An animation occurs only once each time the user views the article, while a behavior is persistent and always in effect as long as the user is viewing the article. See [About Component Behaviors](about-component-behaviors.md).

You can apply a combination of animations and behaviors to a `chapter` or `section` component by using a scene. See [Adding a Scene to a Chapter or a Section Header](adding-a-scene-to-a-chapter-or-a-section-header.md).

## See Also

### Animations

- [ComponentAnimation](../applenewsformat/componentanimation.md): Properties that all types of animations share.
- [AppearAnimation](../applenewsformat/appearanimation.md): An animation type whereby a component appears on the screen.
- [FadeInAnimation](../applenewsformat/fadeinanimation.md): The animation whereby a component fades into view.
- [MoveInAnimation](../applenewsformat/moveinanimation.md): The animation whereby a component moves in from the side of the screen.
- [ScaleFadeAnimation](../applenewsformat/scalefadeanimation.md): The animation in which a component scales up and fades into view.
