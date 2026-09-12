> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442236-skindexgetindextype](https://developer.apple.com/documentation/coreservices/1442236-skindexgetindextype)

# SKIndexGetIndexType(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the category of an index.

## Declaration

```swift
func SKIndexGetIndexType(_ inIndex: SKIndex!) -> SKIndexType
```

## Parameters

- `inIndex`: The index whose category you want to know.

<a id="return_value"></a>

## Return Value

The category of the index. See the [SKIndexType](skindextype.md) enumeration for a list of the various index categories. On failure, returns a value of `kSKIndexUnknown`.

<a id="discussion"></a>

## Discussion

As described in [SKIndexType](skindextype.md), Search Kit offers four categories of index, each optimized for one or more types of searching.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData(\_:\_:)](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL(\_:\_:\_:)](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose(\_:)](1442401-skindexclose.md): Closes an index.
- [SKIndexGetTypeID()](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

# SKIndexGetIndexType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the category of an index.

## Declaration

```objectivec
SKIndexType SKIndexGetIndexType(SKIndexRef inIndex);
```

## Parameters

- `inIndex`: The index whose category you want to know.

<a id="return_value"></a>

## Return Value

The category of the index. See the [SKIndexType](skindextype.md) enumeration for a list of the various index categories. On failure, returns a value of `kSKIndexUnknown`.

<a id="discussion"></a>

## Discussion

As described in [SKIndexType](skindextype.md), Search Kit offers four categories of index, each optimized for one or more types of searching.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose](1442401-skindexclose.md): Closes an index.
- [SKIndexGetTypeID](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.
