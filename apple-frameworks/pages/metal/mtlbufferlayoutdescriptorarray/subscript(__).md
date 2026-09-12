> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the state of the specified buffer layout.

## Declaration

```swift
subscript(index: Int) -> MTLBufferLayoutDescriptor! { get set }
```

## Parameters

- `index`: A specified index in the array of buffer layouts.

<a id="return-value"></a>

## Return Value

The buffer layout descriptor for the buffer bound to the given attribute table index.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the state of the specified buffer layout.

## Declaration

```objectivec
- (MTLBufferLayoutDescriptor *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: A specified index in the array of buffer layouts.

<a id="return-value"></a>

## Return Value

The buffer layout descriptor for the buffer bound to the given attribute table index.

## See Also

### Array accessors

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the state of the specified buffer layout.
