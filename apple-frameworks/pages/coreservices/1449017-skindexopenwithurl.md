> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449017-skindexopenwithurl](https://developer.apple.com/documentation/coreservices/1449017-skindexopenwithurl)

# SKIndexOpenWithURL(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Opens an existing, named index stored in a file whose location is specified with a CFURL object.

## Declaration

```swift
func SKIndexOpenWithURL(_ inURL: CFURL!, _ inIndexName: CFString!, _ inWriteAccess: Bool) -> Unmanaged<SKIndex>!
```

## Parameters

- `inURL`: The location of the index.
- `inIndexName`: The name of the index. Can be `NULL`, in which case this function attempts to open the index with the default name of `IADefaultIndex`.
- `inWriteAccess`: A Boolean value indicating whether the index is open for updating. To open an index for searching only, pass `false` (`0` or `kCFBoolenFalse`). To open it for searching and updating, pass `true` (`1` or `kCFBooleanTrue`).

<a id="return_value"></a>

## Return Value

The named index, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

If `inIndexName` is `NULL` and `inData` does not contain an index with the default name, this function returns `NULL`.

A call to `SKIndexOpenWithURL` retains the opened index. When your application no longer needs the index, dispose of it by calling [SKIndexClose(\_:)](1442401-skindexclose.md).

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

<a id="1680695"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with [SKIndex](skindex.md) objects.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData(\_:\_:)](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexClose(\_:)](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType(\_:)](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID()](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

# SKIndexOpenWithURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Opens an existing, named index stored in a file whose location is specified with a CFURL object.

## Declaration

```objectivec
SKIndexRef SKIndexOpenWithURL(CFURLRef inURL, CFStringRef inIndexName, Boolean inWriteAccess);
```

## Parameters

- `inURL`: The location of the index.
- `inIndexName`: The name of the index. Can be `NULL`, in which case this function attempts to open the index with the default name of `IADefaultIndex`.
- `inWriteAccess`: A Boolean value indicating whether the index is open for updating. To open an index for searching only, pass `false` (`0` or `kCFBoolenFalse`). To open it for searching and updating, pass `true` (`1` or `kCFBooleanTrue`).

<a id="return_value"></a>

## Return Value

The named index, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

If `inIndexName` is `NULL` and `inData` does not contain an index with the default name, this function returns `NULL`.

A call to `SKIndexOpenWithURL` retains the opened index. When your application no longer needs the index, dispose of it by calling [SKIndexClose](1442401-skindexclose.md).

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

<a id="1680695"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with [SKIndexRef](skindexref.md) objects.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexClose](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.
