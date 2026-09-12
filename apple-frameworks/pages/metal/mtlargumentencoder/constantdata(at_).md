> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/constantdata(at:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/constantdata(at:))

# constantData(at:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a pointer to an inline, constant-data argument within the argument buffer.

## Declaration

```swift
func constantData(at index: Int) -> UnsafeMutableRawPointer
```

## Parameters

- `index`: The index of an inline, constant-data argument within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A pointer to the location in the buffer to which you should write the constant data.

<a id="discussion"></a>

## Discussion

Constants declared contiguously in the Metal shading language (in an array or structure) are contiguous in memory. You can encode contiguous ranges of inlined constant data through a pointer to the first constant.

To encode inlined constant data into the argument buffer, perform a memory copy operation from your data’s source pointer to the returned destination pointer.

**Swift**

```swift
let sourceConstants: [SourceConstants] = [
    // Inlined constant data.
    /* ... */
]
let destinationPointer = abEncoder.constantData(: 0)
destinationPointer.copyBytes(from: sourceConstants, count: MemoryLayout<SourceConstants>.size)
```

**Objective-C**

```objective-c
static const SourceConstants sourceConstants[] =
{    
    // Inlined constant data.
    /* ... */
};
void *destinationPointer = [abEncoder constantDataAtIndex:0];
memcpy(destinationPointer, sourceConstants, sizeof(SourceConstants));
```

# constantDataAtIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a pointer to an inline, constant-data argument within the argument buffer.

## Declaration

```objectivec
- (void *) constantDataAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of an inline, constant-data argument within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A pointer to the location in the buffer to which you should write the constant data.

<a id="discussion"></a>

## Discussion

Constants declared contiguously in the Metal shading language (in an array or structure) are contiguous in memory. You can encode contiguous ranges of inlined constant data through a pointer to the first constant.

To encode inlined constant data into the argument buffer, perform a memory copy operation from your data’s source pointer to the returned destination pointer.

**Swift**

```swift
let sourceConstants: [SourceConstants] = [
    // Inlined constant data.
    /* ... */
]
let destinationPointer = abEncoder.constantData(: 0)
destinationPointer.copyBytes(from: sourceConstants, count: MemoryLayout<SourceConstants>.size)
```

**Objective-C**

```objective-c
static const SourceConstants sourceConstants[] =
{    
    // Inlined constant data.
    /* ... */
};
void *destinationPointer = [abEncoder constantDataAtIndex:0];
memcpy(destinationPointer, sourceConstants, sizeof(SourceConstants));
```
