> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsstatfsresult/iosize](https://developer.apple.com/documentation/fskit/fsstatfsresult/iosize)

# ioSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the optimal block size with which to perform I/O.

## Declaration

```swift
var ioSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

For best performance, specify an `ioSize` that’s an even multiple of [blockSize](blocksize.md).

# ioSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the optimal block size with which to perform I/O.

## Declaration

```objectivec
@property NSInteger ioSize;
```

<a id="discussion"></a>

## Discussion

For best performance, specify an `ioSize` that’s an even multiple of [blockSize](blocksize.md).
