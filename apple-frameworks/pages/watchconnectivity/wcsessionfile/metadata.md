> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionfile/metadata](https://developer.apple.com/documentation/watchconnectivity/wcsessionfile/metadata)

# metadata (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of additional information that was sent with the file.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys of the dictionary are strings. The values are property-list object types.

## See Also

### Getting the File Information

- [fileURL](fileurl.md): The URL of the file that was received.

# metadata (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of additional information that was sent with the file.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The keys of the dictionary are strings. The values are property-list object types.

## See Also

### Getting the File Information

- [fileURL](fileurl.md): The URL of the file that was received.
