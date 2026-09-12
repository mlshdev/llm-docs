> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/livephotoskitjs/livephotoskit/livephotoskit_loaded](https://developer.apple.com/documentation/livephotoskitjs/livephotoskit/livephotoskit_loaded)

# LIVEPHOTOSKIT_LOADED

**Interface language:** Data

**Framework:** LivePhotosKit JS  
**Availability:** LivePhotosKit JS 1.0+

An event that is fired when LivePhotosKit JS is loaded.

## Declaration

```
const String LIVEPHOTOSKIT_LOADED;
```

<a id="Discussion"></a>

## Discussion

This event is fired when `livephotoskit.js` is loaded asynchronously. It always has the value `livephotoskitloaded`.

For example, log this event as follows.

```javascript
document.addEventListener('livephotoskitloaded', function(e) {
  console.log('Loaded LivePhotosKit JS');
});
```

## See Also

### Constants

- [VERSION](version.md): The version of LivePhotosKit JS.
