> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatarecord/datatypes](https://developer.apple.com/documentation/webkit/wkwebsitedatarecord/datatypes)

# dataTypes (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The types of data associated with the record.

## Declaration

```swift
var dataTypes: Set<String> { get }
```

<a id="Discussion"></a>

## Discussion

Each record contains the set of types that the associated website stores. For a list of possible types, see [Data Store Record Types](../data-store-record-types.md).

## See Also

### Getting the Data Type

- [Data Store Record Types](../data-store-record-types.md): Explore the constants that identify the types of data that websites store.

# dataTypes (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The types of data associated with the record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSString *> * dataTypes;
```

<a id="Discussion"></a>

## Discussion

Each record contains the set of types that the associated website stores. For a list of possible types, see [Data Store Record Types](../data-store-record-types.md).

## See Also

### Getting the Data Type

- [Data Store Record Types](../data-store-record-types.md): Explore the constants that identify the types of data that websites store.
