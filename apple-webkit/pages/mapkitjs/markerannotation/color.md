> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotation/color](https://developer.apple.com/documentation/mapkitjs/markerannotation/color)

# color

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The background color of the balloon.

## Declaration

```
get color(): string;
set color(value: string);
```

<a id="Discussion"></a>

## Discussion

This property accepts either a color name, such as `"rebeccapurple"`, or a hexadecimal color value, such as `"#663399"` (here, the equivalent of the named color). For more information about standardized colors, see the CSS working group’s list of [common color names and values](https://drafts.csswg.org/css-color/#named-colors). The default value is `"#ff5b40"` (a shade of red).

## See Also

### Setting appearance

- [glyphColor](glyphcolor.md): The fill color of the glyph.
