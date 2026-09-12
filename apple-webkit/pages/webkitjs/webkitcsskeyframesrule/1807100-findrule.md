> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkitcsskeyframesrule/1807100-findrule](https://developer.apple.com/documentation/webkitjs/webkitcsskeyframesrule/1807100-findrule)

# findRule

**Interface language:** Data

**Framework:** WebKit JS

Returns the keyframe rule for the specified selector.

## Declaration

```
WebKitCSSKeyframeRule findRule (in DOMString key);
```

## Parameters

- `key`: A selector for the rule that is either a percentage or the keyword `from` or `to`.

<a id="return_value"></a>

## Return Value

Returns the keyframe rule corresponding to the given selector if it exists.

## See Also

### Changing Rules

- [insertRule](1807093-insertrule.md): Adds a keyframe rule to the collection of keyframes.
- [deleteRule](1807097-deleterule.md): Removes a keyframe rule from the collection of keyframes.
