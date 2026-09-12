> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/title](https://developer.apple.com/documentation/mapkitjs/annotation/title)

# title

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The text to display in the annotation’s callout.

## Declaration

```
get title(): string | null;
set title(value: string | null | undefined);
```

<a id="Discussion"></a>

## Discussion

If the title is empty, MapKit JS can’t show the standard callout.

## See Also

### Getting and setting data, titles, and the accessibility label

- [data](data.md): Data that you define that’s specific to an annotation.
- [subtitle](subtitle.md): The text to display as a subtitle on the second line of an annotation’s callout.
- [accessibilityLabel](accessibilitylabel.md): Accessibility text for the annotation.
