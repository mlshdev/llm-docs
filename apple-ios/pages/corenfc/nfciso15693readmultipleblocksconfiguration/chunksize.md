> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693readmultipleblocksconfiguration/chunksize](https://developer.apple.com/documentation/corenfc/nfciso15693readmultipleblocksconfiguration/chunksize)

# chunkSize (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
var chunkSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

Number of blocks to read per Read Multiple Blocks command. This may be limited by the tag hardware.

# chunkSize (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger chunkSize;
```

<a id="discussion"></a>

## Discussion

Number of blocks to read per Read Multiple Blocks command. This may be limited by the tag hardware.
