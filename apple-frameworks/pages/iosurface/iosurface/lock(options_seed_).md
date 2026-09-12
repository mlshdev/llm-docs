> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurface/lock(options:seed:)](https://developer.apple.com/documentation/iosurface/iosurface/lock(options:seed:))

# lock(options:seed:) (Swift)

**Framework:** IOSurface  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func lock(options: IOSurfaceLockOptions = [], seed: UnsafeMutablePointer<UInt32>?) -> kern_return_t
```

## See Also

### Instance Methods

- [allAttachments()](allattachments%28%29.md)
- [attachment(forKey:)](attachment%28forkey_%29.md)
- [baseAddressOfPlane(at:)](baseaddressofplane%28at_%29.md)
- [bytesPerElementOfPlane(at:)](bytesperelementofplane%28at_%29.md)
- [bytesPerRowOfPlane(at:)](bytesperrowofplane%28at_%29.md)
- [decrementUseCount()](decrementusecount%28%29.md)
- [elementHeightOfPlane(at:)](elementheightofplane%28at_%29.md)
- [elementWidthOfPlane(at:)](elementwidthofplane%28at_%29.md)
- [heightOfPlane(at:)](heightofplane%28at_%29.md)
- [incrementUseCount()](incrementusecount%28%29.md)
- [removeAllAttachments()](removeallattachments%28%29.md)
- [removeAttachment(forKey:)](removeattachment%28forkey_%29.md)
- [setAllAttachments(\_:)](setallattachments%28__%29.md)
- [setAttachment(\_:forKey:)](setattachment%28__forkey_%29.md)
- [setPurgeable(\_:oldState:)](setpurgeable%28__oldstate_%29.md)

# lockWithOptions:seed: (Objective-C)

**Framework:** IOSurface  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (kern_return_t) lockWithOptions:(IOSurfaceLockOptions) options seed:(uint32_t *) seed;
```

## See Also

### Instance Methods

- [allAttachments](allattachments%28%29.md)
- [attachmentForKey:](attachment%28forkey_%29.md)
- [baseAddressOfPlaneAtIndex:](baseaddressofplane%28at_%29.md)
- [bytesPerElementOfPlaneAtIndex:](bytesperelementofplane%28at_%29.md)
- [bytesPerRowOfPlaneAtIndex:](bytesperrowofplane%28at_%29.md)
- [decrementUseCount](decrementusecount%28%29.md)
- [elementHeightOfPlaneAtIndex:](elementheightofplane%28at_%29.md)
- [elementWidthOfPlaneAtIndex:](elementwidthofplane%28at_%29.md)
- [heightOfPlaneAtIndex:](heightofplane%28at_%29.md)
- [incrementUseCount](incrementusecount%28%29.md)
- [removeAllAttachments](removeallattachments%28%29.md)
- [removeAttachmentForKey:](removeattachment%28forkey_%29.md)
- [setAllAttachments:](setallattachments%28__%29.md)
- [setAttachment:forKey:](setattachment%28__forkey_%29.md)
- [setPurgeable:oldState:](setpurgeable%28__oldstate_%29.md)
