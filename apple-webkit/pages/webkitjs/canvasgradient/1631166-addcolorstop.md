> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasgradient/1631166-addcolorstop](https://developer.apple.com/documentation/webkitjs/canvasgradient/1631166-addcolorstop)

# addColorStop

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Adds a color to the gradient.

## Declaration

```
void addColorStop(
    float offset, 
    DOMString color
);
```

## Parameters

- `offset`: A number between 0 and 1, inclusive, representing the position on the gradient object where this color appears.
- `color`: A CSS color.

<a id="discussion"></a>

## Discussion

A gradient is a blend of colors, proceeding from one color stop to the next. You must add a color stop at offset 0 and a color stop at offset 1 before a gradient can be displayed. Adding color stops at 0 and 1 provides a beginning color and an ending color. You may add additional color stops between 0 and 1 to provide intermediate colors.

<a id="1678734"></a>

### Special Considerations

You cannot add a color stop at the same offset as an existing color stop. To change a color stop, obtain a new gradient instance and add the the color stops that you want.
