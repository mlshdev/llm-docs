> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/activityindicator](https://developer.apple.com/documentation/tvml/activityindicator)

# activityIndicator

Displays a spinning indicator and a title.

<a id="Overview"></a>

## Overview

Use the `activityIndicator` to show your users that some sort of activity is taking place. The activity indicator is mostly used to show users that content is currently loading. Here’s an example that displays an activity indicator inside of a loading page.

```xml
<loadingTemplate>
   <activityIndicator>
      <title>Loading requested page</title>
   </activityIndicator>
</loadingTemplate>
```

<a id="Subelements-of-activityIndicator"></a>

### Subelements of activityIndicator

- [title](title.md)

<a id="Elements-that-Use-activityIndicator"></a>

### Elements that Use activityIndicator

- [loadingTemplate](loadingtemplate.md)
- [relatedContent](relatedcontent.md)

## Topics

### Valid TVML Styles

- [margin](margin.md): Specifies the spacing around an element.
- [width](element-shaping-width.md): Specifies how wide an element is.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Overlay Elements

- [progressBar](progressbar.md): Places a progress bar on top of another element.
- [separator](separator.md): Displays a horizontal line.
