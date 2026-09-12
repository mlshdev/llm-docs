> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/adding-parallax-behavior](https://developer.apple.com/documentation/applenews/adding-parallax-behavior)

# Adding Parallax Behavior

**Interface language:** Data

**Kind:** Article

Create an illusion of multiple flat layers by causing the article body to overlap the header as the user scrolls.

<a id="overview"></a>

## Overview

**On this page, you’ll learn how to add parallax behavior to your article.**

You’ll first divide the article’s components into two sections. This requires moving a large amount of code. Then, you’ll simply add a `behavior` property on the upper section and complete the effect by giving the lower section an opaque background color.

![Labeled screenshot of an Apple News article with two sections on iPad.](https://developer.apple.com/images/com.apple.applenews/media-3624566@2x.png)

![Side-by-side screenshots of an Apple News article on iPhone. The left image shows the article before scrolling, and the right image shows the effect of scrolling with parallax behavior.](https://developer.apple.com/images/com.apple.applenews/media-3624570@2x.png)

<a id="Divide-the-Article-Content-into-Sections"></a>

### Divide the Article Content into Sections

Add sections to the article’s top-level `components` array and move all existing components into the new sections. This requires moving a large amount of code.

1. Copy the example code [Section Components: Copy This Code](adding-parallax-behavior.md#Section-Components-Copy-This-Code).
2. Paste the code inside the article’s top-level `components` array, after the opening bracket (`[`).
3. In your `article.json` file, cut your `header` component—including all its nested component arrays—to your clipboard. The code you are cutting begins with the opening brace (`{`) before `"role": "header"` and ends with a mix of five alternating braces and brackets (`}]}]}`).
4. In your `article.json` file, select the ellipses (`...`) in the first section.
5. Paste the copied code into `article.json`, replacing the line that you selected in the previous step.
6. In your `article.json` file, cut all components after the second section to your clipboard. The code you are cutting begins with the opening brace (`{`) before `"role": "heading1",` and ends with the closing brace (`}`) that ends your `tweet` component.
7. In your `article.json` file, select the ellipses (`...`) in the second section.
8. Paste the copied code into `article.json`, replacing the line that you selected in the previous step.
9. Delete the extra comma between the closing brace (`}`) that ends the second `section` component and the closing bracket (`]`) that ends the article’s top-level `components` array.

Your code should look like the example code [Section Components: Result (Collapsed)](adding-parallax-behavior.md#Section-Components-Result-Collapsed) and [Section Components: Result (Expanded)](adding-parallax-behavior.md#Section-Components-Result-Expanded).

After you make these changes in your code, you can successfully preview your working `article.json` file in News Preview, but it won’t look any different until you add parallax behavior in [Add Parallax Behavior in the First Section](adding-parallax-behavior.md#Add-Parallax-Behavior-in-the-First-Section).

<a id="Section-Components-Copy-This-Code"></a>

#### Section Components: Copy This Code

```json
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        ...
      ]
    },
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        ...
      ]
    }
```

<a id="Section-Components-Result-Collapsed"></a>

#### Section Components: Result (Collapsed)

Ellipses (`...`) indicate lines of code that have been omitted from this example.

```json
{
  ...
  "components": [
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        ...
      ]
    },
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        ...
      ]
    }
  ],
  ...
}
```

<a id="Section-Components-Result-Expanded"></a>

#### Section Components: Result (Expanded)

Ellipses (`...`) indicate lines of code that have been omitted from this example.

```json
{
  ...
  "components": [
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        {
          "role": "header",
          "layout": "headerImageLayout",
          "style": {
            "fill": {
              "type": "image",
              "URL": "bundle://header.jpg",
              "fillMode": "cover",
              "verticalAlignment": "top",
              "horizontalAlignment": "center"
            }
          },
          "components": [
            {
              "role": "container",
              "layout": "fullBleedLayout",
              "style": "captionBarBackgroundStyle",
              "anchor": {
                "targetAnchorPosition": "bottom"
              },
              "components": [
                {
                  "role": "caption",
                  "textStyle": "captionLight",
                  "layout": "halfMarginBothLayout",
                  "text": "ABOVE: Sed ut pers piciatis unde omnis iste error sit volup tatem accusantium dolor emque, totam rem. (Attribution)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "components": [
        {
          "role": "heading1",
          "layout": "heading1Layout",
          "text": "HEADING"
        },
        ...
        {
          "role": "tweet",
          "layout": "noMarginLayout",
          "URL": "https://twitter.com/Urna_Semper/status/1480968065630285834"
        }
      ]
    }
  ],
...
}
```

<a id="Add-Parallax-Behavior-in-the-First-Section"></a>

### Add Parallax Behavior in the First Section

Your article currently has two sections. You’ll use the first section’s `behavior` property to assign a parallax factor lower than 1, causing the first section to scroll more slowly than the default scroll speed.

1. Copy the example code [Behavior: Copy This Code](adding-parallax-behavior.md#Behavior-Copy-This-Code).
2. Paste the code inside the first `section` component, after the line `"layout": "fullBleedLayout",`

Your code should look like the example code [Behavior: Result](adding-parallax-behavior.md#Behavior-Result).

After you make this change in your code, you can preview your working `article.json` file in News Preview to see the changes in scroll speed. You might notice text becoming illegible as it covers the image. You’ll fix this in [Use the Opaque Background with the Lower Section](adding-parallax-behavior.md#Use-the-Opaque-Background-with-the-Lower-Section) by adding a background color to the lower section.

<a id="Behavior-Copy-This-Code"></a>

#### Behavior: Copy This Code

```json
      "behavior": {
        "type": "parallax",
        "factor": 0.8
      },
```

<a id="Behavior-Result"></a>

#### Behavior: Result

Ellipses (`...`) indicate lines of code that have been omitted from this example.

```json
{
  ...
  "components": [
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "behavior": {
        "type": "parallax",
        "factor": 0.8
      },
      "components": [
        {
          "role": "header",
          "layout": "headerImageLayout",
          "style": {
            "fill": {
              "type": "image",
              "URL": "bundle://header.jpg",
              "fillMode": "cover",
              "verticalAlignment": "top",
              "horizontalAlignment": "center"
            }
          },
          "components": [
            ...
          ]
        }
      ]
    },
    ...
  ],
  ...
}
```

<a id="Define-a-ComponentStyle-Object-for-Background-Color"></a>

### Define a ComponentStyle Object for Background Color

To finish the parallax behavior, you need to add a background color to the lower section. Before you can do that, you must define a `ComponentStyle` object.

1. Copy the example code [bodyBackgroundStyle: Copy This Code](adding-parallax-behavior.md#bodyBackgroundStyle-Copy-This-Code).
2. Paste the code between the closing brace (`}`) of the last `ComponentStyle` object and the closing brace for the whole `componentStyles` property.

Your code should look like the example code [bodyBackgroundStyle: Result](adding-parallax-behavior.md#bodyBackgroundStyle-Result).

<a id="bodyBackgroundStyle-Copy-This-Code"></a>

#### bodyBackgroundStyle: Copy This Code

```json
,
    "bodyBackgroundStyle": {
      "backgroundColor": "#FFF"
    }
```

<a id="bodyBackgroundStyle-Result"></a>

#### bodyBackgroundStyle: Result

Ellipses (`...`) indicate lines of code that have been omitted from this example.

```json
{
  ...
  "componentStyles": {
    ...
    "bodyBackgroundStyle": {
      "backgroundColor": "#FFF"
    }
  },
  ...
}
```

<a id="Use-the-Opaque-Background-with-the-Lower-Section"></a>

### Use the Opaque Background with the Lower Section

As a final step, you need to add a reference to the `ComponentStyle` object you just defined.

To add the reference, in your `article.json` file, inside your second `section` component, add a property named `style` with a value of `"bodyBackgroundStyle"`.

Your code should look like the example code [Opaque Background: Result](adding-parallax-behavior.md#Opaque-Background-Result).

After you make these changes in your code, you can preview your working `article.json` file in News Preview to see that the lower section remains legible as it scrolls past the upper section.

<a id="Opaque-Background-Result"></a>

#### Opaque Background: Result

Ellipses (`...`) indicate lines of code that have been omitted from this example.

```json
{
  ...
  "components": [
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "behavior": {
        "type": "parallax",
        "factor": 0.8
      },
      "components": [
        ...
      ]
    },
    {
      "role": "section",
      "layout": "fullBleedLayout",
      "style": "bodyBackgroundStyle",
      "components": [
        ...
      ]
    }
  ],
  ...
}
```

<a id="Previous"></a>

### Previous

[Creating a Layered Header](creating-a-layered-header.md)

<a id="Next"></a>

### Next

[Viewing the Finished Article for Advanced Design Tutorial 1](viewing-the-finished-article-for-advanced-design-tutorial-1.md)

## See Also

### Related Documentation

- [About Component Behaviors](about-component-behaviors.md): Learn how to affect components’ reactions to device motion and scrolling.
- [Parallax](../applenewsformat/parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
- [ComponentStyle](../applenewsformat/componentstyle.md): The object for setting style properties for components, including background color and fill, borders, and table styles.
- [Section](../applenewsformat/section.md): The component for organizing an article into sections.

### Advanced Design Tutorial 1: Headers and Parallax Behavior

- [Setting Up the Advanced Tutorials](setting-up-the-advanced-tutorials.md): Download the tutorial files, and learn about what you’ll create in the three advanced tutorials.
- [About Containers](about-containers.md): Learn the basic Apple News Format container concepts required for the three advanced tutorials.
- [Creating a Layered Header](creating-a-layered-header.md): Create a header with a caption that’s layered in front of an image.
- [Viewing the Finished Article for Advanced Design Tutorial 1](viewing-the-finished-article-for-advanced-design-tutorial-1.md): See the full JSON code from this tutorial.
