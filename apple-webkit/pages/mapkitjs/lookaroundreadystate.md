> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaroundreadystate](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate)

# LookAroundReadyState

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.79+

Values that indicate the state of the Look Around object in the browser.

## Declaration

```
const LookAroundReadyState: Readonly<{
    readonly Loading: "loading";
    readonly Complete: "complete";
    readonly Error: "error";
    readonly Destroyed: "destroyed";
}>
type LookAroundReadyState =
    (typeof LookAroundReadyState)[keyof typeof LookAroundReadyState];
```

## Topics

### Look Around object states

- [Complete](lookaroundreadystate/complete.md): A value that indicates the Look Around view has completed loading.
- [Destroyed](lookaroundreadystate/destroyed.md): A value that indicates the Look Around object is destroyed.
- [Error](lookaroundreadystate/error.md): A value that indicates the Look Around view encountered an error while loading.
- [Loading](lookaroundreadystate/loading.md): A value that indicates the Look Around view is loading.

## See Also

### Getting information about the Look Around object and its state

- [element](abstractlookaround/element.md): A property that represents the Look Around view’s containing Document Object Model (DOM) element.
- [scene](abstractlookaround/scene.md): The Look Around scene the framework is displaying.
- [padding](abstractlookaround/padding.md): The padding options for the Look Around view.
- [readyState](abstractlookaround/readystate.md): A value that represents the loading state of the Look Around object.
