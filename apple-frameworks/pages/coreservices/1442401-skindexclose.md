> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442401-skindexclose](https://developer.apple.com/documentation/coreservices/1442401-skindexclose)

# SKIndexClose(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Closes an index.

## Declaration

```swift
func SKIndexClose(_ inIndex: SKIndex!)
```

## Parameters

- `inIndex`: The index to close.

<a id="discussion"></a>

## Discussion

When your application no longer needs an index that it has opened or created, call [SKIndexClose(\_:)](1442401-skindexclose.md). Calling this function is equivalent to calling [CFRelease](../corefoundation/cfrelease.md) on an index.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData(\_:\_:)](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL(\_:\_:\_:)](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexGetIndexType(\_:)](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID()](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

# SKIndexClose (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Closes an index.

## Declaration

```objectivec
void SKIndexClose(SKIndexRef inIndex);
```

## Parameters

- `inIndex`: The index to close.

<a id="discussion"></a>

## Discussion

When your application no longer needs an index that it has opened or created, call [SKIndexClose](1442401-skindexclose.md). Calling this function is equivalent to calling [CFRelease](../corefoundation/cfrelease.md) on an index.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexGetIndexType](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.
