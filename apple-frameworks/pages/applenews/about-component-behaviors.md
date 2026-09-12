> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/about-component-behaviors](https://developer.apple.com/documentation/applenews/about-component-behaviors)

# About Component Behaviors

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Learn how to affect components’ reactions to device motion and scrolling.

<a id="overview"></a>

## Overview

In Apple News Format, a behavior defines the physics of a component and its context and determines how a component responds to user actions. A behavior can specify the gravitational effect of a component or how the component reacts to the motion of the device. For example, a behavior can move the background of a component slightly more slowly than the user is scrolling.

Apple News Format has these behaviors for components:

- [BackgroundMotion](../applenewsformat/backgroundmotion.md). Causes the background of a component to move in the opposite direction from the motion of the device.
- [BackgroundParallax](../applenewsformat/backgroundparallax.md). Causes the background of a component to move slightly more slowly than the user’s scroll speed.
- [Motion](../applenewsformat/motion.md). Causes a component to react to movement of the device.
- [Parallax](../applenewsformat/parallax.md). Causes a component to move at a specific speed.
- [Springy](../applenewsformat/springy.md). Causes a component to act as if it is held in place with a short spring.

A *behavior* is different from an *animation*. A behavior is persistent and always in effect as long as the user is viewing the article. An animation occurs only once each time the user views the article. See [About Component Animations](about-component-animations.md).

## See Also

### Related Documentation

- [Adding Parallax Behavior](adding-parallax-behavior.md): Create an illusion of multiple flat layers by causing the article body to overlap the header as the user scrolls.

### Behaviors

- [Behavior](../applenewsformat/behavior.md): Properties shared by all the behaviors you can use to affect how components react to device motion and scrolling.
- [BackgroundMotion](../applenewsformat/backgroundmotion.md): The behavior whereby the background of a component moves in the opposite direction from the motion of the device.
- [BackgroundParallax](../applenewsformat/backgroundparallax.md): The behavior whereby the background of a component moves slightly slower than a person’s scroll speed.
- [Motion](../applenewsformat/motion.md): The behavior whereby a component reacts to the motion of the person’s device.
- [Parallax](../applenewsformat/parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
- [Springy](../applenewsformat/springy.md): The behavior whereby a component acts as if it’s on a short spring.
