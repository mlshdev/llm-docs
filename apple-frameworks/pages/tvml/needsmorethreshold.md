> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/needsmorethreshold](https://developer.apple.com/documentation/tvml/needsmorethreshold)

# needsMoreThreshold

**Kind:** Article

Sets the amount of remaining screen lengths before firing the needs more event.

<a id="Overview"></a>

## Overview

Use the `needsMoreThreshold` attribute to specify when the needs more event is dispatched. When the designated threshold is met, the needs more event requests more data. Here’s an example that dispatches the needs more event when there are fewer than two screen lengths of information in the shelf to display.

```xml
<shelf needsMoreThreshold="2">
```

<a id="Values-for-needsMoreThreshold"></a>

### Values for needsMoreThreshold

- **Float**: The number of screen lengths of information left before the needs more event is dispatched.

<a id="Elements-that-Use-needsMoreThreshold"></a>

### Elements that Use needsMoreThreshold

- [grid](grid.md)
- [shelf](shelf.md)
- [stackTemplate](stacktemplate.md)

## See Also

### Binding and DOM Manipulation

- [binding](binding.md): Associates information in a data item with an element.
- [itemID](itemid.md): Mark elements for reuse during DOM updates.
- [prototype](prototype.md): Associates a data item type with an element.
