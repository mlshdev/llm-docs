> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osorderedset/1397833-setoptions

# setOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual unsigned int setOptions(unsigned int options, unsigned int mask, void *context);
```

## Parameters

- `options`: A bitfield whose values turn the options on (1) or off (0).
- `mask`: A mask indicating which bits in `options` to change. Pass 0 to get the whole current options bitfield without changing any settings.
- `context`: Unused.

<a id="return_value"></a>

## Return Value

The options bitfield as it was before the set operation.

<a id="discussion"></a>

## Discussion

Kernel extensions should not call this function.

Child collections' options are changed only if the receiving ordered set's options actually change.
