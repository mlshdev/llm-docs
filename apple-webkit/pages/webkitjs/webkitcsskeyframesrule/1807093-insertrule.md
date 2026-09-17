> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkitjs/webkitcsskeyframesrule/1807093-insertrule

# insertRule

**Interface language:** Data

**Framework:** WebKit JS

Adds a keyframe rule to the collection of keyframes.

## Declaration

```
void insertRule (in DOMString rule);
```

## Parameters

- `rule`: A string representing a selector and keyframe, where the selector is a percentage or keyword and the keyframe is a block. The string must follow the format for keyframe blocks in the @-webkit-keyframes CSS rule.

## See Also

### Changing Rules

- [deleteRule](1807097-deleterule.md): Removes a keyframe rule from the collection of keyframes.
- [findRule](1807100-findrule.md): Returns the keyframe rule for the specified selector.
