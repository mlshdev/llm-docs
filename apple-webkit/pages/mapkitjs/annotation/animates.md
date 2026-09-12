> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/animates](https://developer.apple.com/documentation/mapkitjs/annotation/animates)

# animates

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the framework animates the annotation.

## Declaration

```
get animates(): boolean;
set animates(value: boolean);
```

<a id="Discussion"></a>

## Discussion

When this property is `true`, MapKit JS animates the appearance of the annotation on the map. You’re responsible for implementing an animation using the [appearanceAnimation](appearanceanimation.md) property.

The annotation doesn’t animate when:

- You don’t provide an animation in [appearanceAnimation](appearanceanimation.md).
- The [animates](animates.md) property is `false.`

## See Also

### Getting and setting interaction behavior

- [draggable](draggable.md): A Boolean value that determines whether the user can drag the annotation.
- [selected](selected.md): A Boolean value that indicates whether the map shows the annotation in a selected state.
- [enabled](enabled.md): A Boolean value that determines whether the annotation responds to user interaction.
