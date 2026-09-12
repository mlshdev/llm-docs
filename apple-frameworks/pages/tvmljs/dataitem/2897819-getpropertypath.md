> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem/2897819-getpropertypath](https://developer.apple.com/documentation/tvmljs/dataitem/2897819-getpropertypath)

# getPropertyPath

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Retrieves the value associated with a property path.

## Declaration

```
Object getPropertyPath(
    in String path
);
```

## Parameters

- `path`: The dot-separated sequence of properties from the receiver. The path can contain array indexers. For example, `items[0].title` refers to the `title` property stored in index location 0 in the `items` array.

<a id="return_value"></a>

## Return Value

The data item object contained in the path.

## See Also

### Working with Property Paths

- [setPropertyPath](2897832-setpropertypath.md): Sets the value associated with a property path.
- [touchPropertyPath](2897830-touchpropertypath.md): Updates the property path.
