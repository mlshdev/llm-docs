> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/datarecord/sizeinbytes(oftypes:)](https://developer.apple.com/documentation/webkit/wkwebextension/datarecord/sizeinbytes(oftypes:))

# sizeInBytes(ofTypes:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the size in bytes of the specific data types in this data record.

## Declaration

```swift
func sizeInBytes(ofTypes dataTypes: Set<WKWebExtension.DataType>) -> Int
```

## Parameters

- `dataTypes`: The set of data types to measure the size for.

## See Also

### Related Documentation

- [totalSizeInBytes](totalsizeinbytes.md): The total size in bytes of all data types contained in this data record.

# sizeInBytesOfTypes: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the size in bytes of the specific data types in this data record.

## Declaration

```objectivec
- (NSUInteger) sizeInBytesOfTypes:(NSSet<NSString *> *) dataTypes;
```

## Parameters

- `dataTypes`: The set of data types to measure the size for.

## See Also

### Related Documentation

- [totalSizeInBytes](totalsizeinbytes.md): The total size in bytes of all data types contained in this data record.
