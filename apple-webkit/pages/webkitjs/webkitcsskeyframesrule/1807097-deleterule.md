> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkitcsskeyframesrule/1807097-deleterule](https://developer.apple.com/documentation/webkitjs/webkitcsskeyframesrule/1807097-deleterule)

# deleteRule

**Interface language:** Data

**Framework:** WebKit JS

Removes a keyframe rule from the collection of keyframes.

## Declaration

```
void deleteRule (in DOMString key);
```

## Parameters

- `key`: A selector for the rule that is either a percentage or the keyword `from` or `to`.

## See Also

### Changing Rules

- [insertRule](1807093-insertrule.md): Adds a keyframe rule to the collection of keyframes.
- [findRule](1807100-findrule.md): Returns the keyframe rule for the specified selector.
