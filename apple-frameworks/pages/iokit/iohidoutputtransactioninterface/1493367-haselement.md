> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493367-haselement

# hasElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Checks whether an element has been added to the transaction.

## Declaration

```objectivec
Boolean (*hasElement)(void *self, IOHIDElementCookie elementCookie);
```

## Parameters

- `elementCookie`: The element of interest.

<a id="return_value"></a>

## Return Value

Returns a Boolean value.

<a id="discussion"></a>

## Discussion

Will return true if present, otherwise will return false.
