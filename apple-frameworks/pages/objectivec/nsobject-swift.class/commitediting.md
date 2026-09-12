> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/commitediting](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting)

# commitEditing

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns whether the receiver was able to commit any pending edits.

## Declaration

```objectivec
- (BOOL) commitEditing;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the changes were successfully applied to the model, [NO](../no.md) otherwise.

<a id="Discussion"></a>

## Discussion

A commit is denied if the receiver fails to apply the changes to the model object, perhaps due to a validation error.

## See Also

### Related Documentation

- [discardEditing](discardediting.md): Deprecated. Causes the receiver to discard any changes, restoring the previous values.
