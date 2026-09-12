> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/abstractlookaround/readystate](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/readystate)

# readyState

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.79+

A value that represents the loading state of the Look Around object.

## Declaration

```
get readyState(): LookAroundReadyState;
```

<a id="Discussion"></a>

## Discussion

The Look Around view dispatches a `readystatechange` event when the loading state changes.

## See Also

### Getting information about the Look Around object and its state

- [element](element.md): A property that represents the Look Around view’s containing Document Object Model (DOM) element.
- [scene](scene.md): The Look Around scene the framework is displaying.
- [padding](padding.md): The padding options for the Look Around view.
- [LookAroundReadyState](../lookaroundreadystate.md): Values that indicate the state of the Look Around object in the browser.
