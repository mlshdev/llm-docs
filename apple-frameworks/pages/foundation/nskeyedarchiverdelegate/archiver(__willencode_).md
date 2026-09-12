> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverdelegate/archiver(_:willencode:)](https://developer.apple.com/documentation/foundation/nskeyedarchiverdelegate/archiver(_:willencode:))

# archiver(\_:willEncode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that `object` is about to be encoded.

## Declaration

```swift
optional func archiver(_ archiver: NSKeyedArchiver, willEncode object: Any) -> Any?
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object that is about to be encoded. This value is never `nil`.

<a id="return-value"></a>

## Return Value

Either `object` or a different object to be encoded in its stead. The delegate can also modify the coder state. If the delegate returns `nil`, `nil` is encoded.

<a id="Discussion"></a>

## Discussion

This method is called after the original object may have replaced itself with [replacementObject(for:)](../../objectivec/nsobject-swift.class/replacementobject%28for_%29-60vwc.md):.

This method is called whether or not the object is being encoded conditionally.

This method is not called for an object once a replacement mapping has been set up for that object (either explicitly, or because the object has previously been encoded). This method is also not called when `nil` is about to be encoded.

## See Also

### Encoding Data and Objects

- [archiver(\_:didEncode:)](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish(\_:)](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiverWillFinish(\_:)](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver(\_:willReplace:with:)](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.

# archiver:willEncodeObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that `object` is about to be encoded.

## Declaration

```objectivec
- (id) archiver:(NSKeyedArchiver *) archiver willEncodeObject:(id) object;
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object that is about to be encoded. This value is never `nil`.

<a id="return-value"></a>

## Return Value

Either `object` or a different object to be encoded in its stead. The delegate can also modify the coder state. If the delegate returns `nil`, `nil` is encoded.

<a id="Discussion"></a>

## Discussion

This method is called after the original object may have replaced itself with [replacementObjectForKeyedArchiver:](../../objectivec/nsobject-swift.class/replacementobject%28for_%29-60vwc.md):.

This method is called whether or not the object is being encoded conditionally.

This method is not called for an object once a replacement mapping has been set up for that object (either explicitly, or because the object has previously been encoded). This method is also not called when `nil` is about to be encoded.

## See Also

### Encoding Data and Objects

- [archiver:didEncodeObject:](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish:](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiverWillFinish:](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver:willReplaceObject:withObject:](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.
