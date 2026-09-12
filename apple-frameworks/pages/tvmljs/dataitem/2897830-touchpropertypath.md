> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem/2897830-touchpropertypath](https://developer.apple.com/documentation/tvmljs/dataitem/2897830-touchpropertypath)

# touchPropertyPath

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Updates the property path.

## Declaration

```
void touchPropertyPath(
    in String path
);
```

## Parameters

- `path`: The dot-separated sequence of properties from the receiver. The path can contain array indexers. For example, `items[0].title` refers to the `title` property stored in index location 0 in the `items` array.

<a id="discussion"></a>

## Discussion

The property path is explicitly updated, and all bound objects are notified.

## See Also

### Working with Property Paths

- [setPropertyPath](2897832-setpropertypath.md): Sets the value associated with a property path.
- [getPropertyPath](2897819-getpropertypath.md): Retrieves the value associated with a property path.
