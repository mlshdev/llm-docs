> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/intersects(_:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Determines whether the supplied compression options intersect with the current instance’s options.

## Declaration

```swift
func intersects(_ options: NSUserInterfaceCompressionOptions) -> Bool
```

## Parameters

- `options`: A compression options object to compare with the current instance.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if at least one of the supplied options is present in the instance’s options, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [isEmpty](isempty.md): A Boolean value that denotes whether the option is empty.
- [contains(\_:)](contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.

# intersectsOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Determines whether the supplied compression options intersect with the current instance’s options.

## Declaration

```objectivec
- (BOOL) intersectsOptions:(NSUserInterfaceCompressionOptions *) options;
```

## Parameters

- `options`: A compression options object to compare with the current instance.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if at least one of the supplied options is present in the instance’s options, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [empty](isempty.md): A Boolean value that denotes whether the option is empty.
- [containsOptions:](contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.
