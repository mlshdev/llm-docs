> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsstatfsresult/blocksize](https://developer.apple.com/documentation/fskit/fsstatfsresult/blocksize)

# blockSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the volume’s block size, in bytes.

## Declaration

```swift
var blockSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

This value defaults to `4096`. Zero isn’t a valid block size.

# blockSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the volume’s block size, in bytes.

## Declaration

```objectivec
@property NSInteger blockSize;
```

<a id="discussion"></a>

## Discussion

This value defaults to `4096`. Zero isn’t a valid block size.
