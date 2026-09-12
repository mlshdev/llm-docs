> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450223-skindexgettypeid](https://developer.apple.com/documentation/coreservices/1450223-skindexgettypeid)

# SKIndexGetTypeID() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the type identifier for Search Kit indexes.

## Declaration

```swift
func SKIndexGetTypeID() -> CFTypeID
```

<a id="return_value"></a>

## Return Value

A [CFTypeID](../corefoundation/cftypeid.md) object containing the type identifier for the [SKIndex](skindex.md) opaque type.

<a id="discussion"></a>

## Discussion

Search Kit represents indexes with the [SKIndex](skindex.md) opaque type. If your code needs to determine whether a particular data type is an index, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the index type ID because it can change from one release of macOS to another.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData(\_:\_:)](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL(\_:\_:\_:)](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose(\_:)](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType(\_:)](1442236-skindexgetindextype.md): Gets the category of an index.

# SKIndexGetTypeID (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the type identifier for Search Kit indexes.

## Declaration

```objectivec
CFTypeID SKIndexGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A [CFTypeID](../corefoundation/cftypeid.md) object containing the type identifier for the [SKIndexRef](skindexref.md) opaque type.

<a id="discussion"></a>

## Discussion

Search Kit represents indexes with the [SKIndexRef](skindexref.md) opaque type. If your code needs to determine whether a particular data type is an index, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the index type ID because it can change from one release of macOS to another.

## See Also

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType](1442236-skindexgetindextype.md): Gets the category of an index.
