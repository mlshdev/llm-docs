> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placelookupoptions/signal](https://developer.apple.com/documentation/mapkitjs/placelookupoptions/signal)

# signal

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 6.0+

A signal object allowing you to cancel the request.

## Declaration

```
signal?: AbortSignal;
```

<a id="Discussion"></a>

## Discussion

Pass an `AbortSignal` from an `AbortController` to allow the controller to cancel a pending place lookup request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Options

- [language](language.md): The language to use for the lookup.
