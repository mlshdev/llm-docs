> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/write(_:)](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/write(_:))

# write(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes the memory represented by the data object you provide into the write buffers.

## Declaration

```swift
func write(_ data: Data) throws
```

## Parameters

- `data`: The [NSData](https://developer.apple.com/documentation/foundation/nsdata) object that represents the memory the framework uses to the write buffers.

# writeData:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes the memory represented by the data object you provide into the write buffers.

## Declaration

```objectivec
- (BOOL) writeData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: The [NSData](https://developer.apple.com/documentation/foundation/nsdata) object that represents the memory the framework uses to the write buffers.
- `error`: If not `nil`, assigned with the error if the write failed.

<a id="return-value"></a>

## Return Value

`YES` if the write was successful, `NO` otherwise.
