> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450119-aegetdescdatasize](https://developer.apple.com/documentation/coreservices/1450119-aegetdescdatasize)

# AEGetDescDataSize(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the size, in bytes, of the data in the specified descriptor.

## Declaration

```swift
func AEGetDescDataSize(_ theAEDesc: UnsafePointer<AEDesc>!) -> Size
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to obtain the data size for. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

Returns the size, in bytes, of the data in the specified descriptor.

<a id="discussion"></a>

## Discussion

This function works only with value descriptors created by [AECreateDesc(\_:\_:\_:\_:)](1448535-aecreatedesc.md). You cannot get the data size of an [AERecord](aerecord.md) or [AEDescList](aedesclist.md), for example.

<a id="1770213"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescData(\_:\_:\_:)](1444427-aegetdescdata.md): Gets the data from the specified descriptor.
- [AEGetDescDataRange(\_:\_:\_:\_:)](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData(\_:\_:\_:\_:)](1446695-aereplacedescdata.md): Copies the specified data into the specified descriptor, replacing any previous data.

# AEGetDescDataSize (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the size, in bytes, of the data in the specified descriptor.

## Declaration

```objectivec
Size AEGetDescDataSize(const AEDesc *theAEDesc);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to obtain the data size for. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

Returns the size, in bytes, of the data in the specified descriptor.

<a id="discussion"></a>

## Discussion

This function works only with value descriptors created by [AECreateDesc](1448535-aecreatedesc.md). You cannot get the data size of an [AERecord](aerecord.md) or [AEDescList](aedesclist.md), for example.

<a id="1770213"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescData](1444427-aegetdescdata.md): Gets the data from the specified descriptor.
- [AEGetDescDataRange](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData](1446695-aereplacedescdata.md): Copies the specified data into the specified descriptor, replacing any previous data.
