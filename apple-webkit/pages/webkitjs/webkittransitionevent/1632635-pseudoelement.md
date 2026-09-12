> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkittransitionevent/1632635-pseudoelement](https://developer.apple.com/documentation/webkitjs/webkittransitionevent/1632635-pseudoelement)

# pseudoElement

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An abstract element representing the portion of the CSS render tree on which the transition occurs.

## Declaration

```
readonly attribute DOMString pseudoElement;
```

<a id="discussion"></a>

## Discussion

This element is an empty string if the transition occurs on a non-abstract element.
