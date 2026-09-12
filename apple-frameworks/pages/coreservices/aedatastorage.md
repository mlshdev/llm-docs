> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aedatastorage](https://developer.apple.com/documentation/coreservices/aedatastorage)

# AEDataStorage (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an opaque data type that provides storage for an `AEDesc` descriptor.

## Declaration

```swift
typealias AEDataStorage = UnsafeMutablePointer<AEDataStorageType?>
```

<a id="discussion"></a>

## Discussion

The Apple Event Manager defines the `AEDataStorage` data type to serve as a data storage field in the [AEDesc](aedesc.md) structure. Your application doesn’t access the data pointed to by a data storage pointer directly. Rather, you work with the following functions:

- [AEGetDescDataSize(\_:)](1450119-aegetdescdatasize.md)
- [AEGetDescData(\_:\_:\_:)](1444427-aegetdescdata.md)
- [AEGetDescDataRange(\_:\_:\_:\_:)](1446560-aegetdescdatarange.md)
- [AEReplaceDescData(\_:\_:\_:\_:)](1446695-aereplacedescdata.md)

# AEDataStorage (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an opaque data type that provides storage for an `AEDesc` descriptor.

## Declaration

```objectivec
typedef AEDataStorageType *AEDataStorage;
```

<a id="discussion"></a>

## Discussion

The Apple Event Manager defines the `AEDataStorage` data type to serve as a data storage field in the [AEDesc](aedesc.md) structure. Your application doesn’t access the data pointed to by a data storage pointer directly. Rather, you work with the following functions:

- [AEGetDescDataSize](1450119-aegetdescdatasize.md)
- [AEGetDescData](1444427-aegetdescdata.md)
- [AEGetDescDataRange](1446560-aegetdescdatarange.md)
- [AEReplaceDescData](1446695-aereplacedescdata.md)
