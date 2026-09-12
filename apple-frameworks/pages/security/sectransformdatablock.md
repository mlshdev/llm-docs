> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformdatablock](https://developer.apple.com/documentation/security/sectransformdatablock)

# SecTransformDataBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block used to override the default data handling for a transform.

## Declaration

```swift
typealias SecTransformDataBlock = (CFTypeRef) -> Unmanaged<CFTypeRef>?
```

## Parameters

- `data`: The data to be processed. When this block is used to to implement the [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action, the data is the input data that is to be processed into the output data. When this block is used to implement the [kSecTransformActionInternalizeExtraData](ksectransformactioninternalizeextradata.md) action, the data is a [CFDictionary](../corefoundation/cfdictionary.md) that contains the data that needs to be imported.

<a id="return-value"></a>

## Return Value

`NULL` for the [kSecTransformActionInternalizeExtraData](ksectransformactioninternalizeextradata.md) action, the data to be passed to the output attribute for any other action, or a [CFError](../corefoundation/cferror.md) instance on failure.

# SecTransformDataBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block used to override the default data handling for a transform.

## Declaration

```objectivec
typedef const void *(^)(const void *) SecTransformDataBlock;
```

## Parameters

- `data`: The data to be processed. When this block is used to to implement the [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action, the data is the input data that is to be processed into the output data. When this block is used to implement the [kSecTransformActionInternalizeExtraData](ksectransformactioninternalizeextradata.md) action, the data is a [CFDictionaryRef](../corefoundation/cfdictionary.md) that contains the data that needs to be imported.

<a id="return-value"></a>

## Return Value

`NULL` for the [kSecTransformActionInternalizeExtraData](ksectransformactioninternalizeextradata.md) action, the data to be passed to the output attribute for any other action, or a [CFErrorRef](../corefoundation/cferror.md) instance on failure.
