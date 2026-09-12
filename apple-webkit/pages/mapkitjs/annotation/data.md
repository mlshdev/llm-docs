> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/data](https://developer.apple.com/documentation/mapkitjs/annotation/data)

# data

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

Data that you define that’s specific to an annotation.

## Declaration

```
get data(): object;
set data(data: object);
```

<a id="Discussion"></a>

## Discussion

This is data of your choosing that you can assign to the annotation. It can be any JavaScript value, and defaults to an empty object.

## See Also

### Getting and setting data, titles, and the accessibility label

- [title](title.md): The text to display in the annotation’s callout.
- [subtitle](subtitle.md): The text to display as a subtitle on the second line of an annotation’s callout.
- [accessibilityLabel](accessibilitylabel.md): Accessibility text for the annotation.
