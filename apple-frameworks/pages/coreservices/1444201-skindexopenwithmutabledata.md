> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444201-skindexopenwithmutabledata](https://developer.apple.com/documentation/coreservices/1444201-skindexopenwithmutabledata)

# SKIndexOpenWithMutableData(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Opens an existing, named index for searching and updating.

## Declaration

```swift
func SKIndexOpenWithMutableData(_ inData: CFMutableData!, _ inIndexName: CFString!) -> Unmanaged<SKIndex>!
```

## Parameters

- `inData`: The index to open.
- `inIndexName`: The name of the index. Can be `NULL`, in which case this function attempts to open the index with the default name of `IADefaultIndex`.

<a id="return_value"></a>

## Return Value

The named index, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

An index opened by `SKIndexOpenWithMutableData` may be searched or updated. To open an index for search only, use the [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md) function.

If `inIndexName` is `NULL` and `inData` does not contain an index with the default name, this function returns `NULL`.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

A call to `SKIndexOpenWithMutableData` retains the opened index. When your application no longer needs the index, dispose of it by calling [SKIndexClose(\_:)](1442401-skindexclose.md).

<a id="1680673"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with [SKIndex](skindex.md) objects.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithURL(\_:\_:\_:)](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose(\_:)](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType(\_:)](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID()](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

# SKIndexOpenWithMutableData (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Opens an existing, named index for searching and updating.

## Declaration

```objectivec
SKIndexRef SKIndexOpenWithMutableData(CFMutableDataRef inData, CFStringRef inIndexName);
```

## Parameters

- `inData`: The index to open.
- `inIndexName`: The name of the index. Can be `NULL`, in which case this function attempts to open the index with the default name of `IADefaultIndex`.

<a id="return_value"></a>

## Return Value

The named index, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

An index opened by `SKIndexOpenWithMutableData` may be searched or updated. To open an index for search only, use the [SKIndexOpenWithData](1446398-skindexopenwithdata.md) function.

If `inIndexName` is `NULL` and `inData` does not contain an index with the default name, this function returns `NULL`.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

A call to `SKIndexOpenWithMutableData` retains the opened index. When your application no longer needs the index, dispose of it by calling [SKIndexClose](1442401-skindexclose.md).

<a id="1680673"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with [SKIndexRef](skindexref.md) objects.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithURL](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.
