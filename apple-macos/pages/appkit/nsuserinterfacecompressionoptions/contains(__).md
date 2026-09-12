> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/contains(_:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/contains(_:))

# contains(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Determines whether the supplied compression options are all present in the current instance.

## Declaration

```swift
func contains(_ options: NSUserInterfaceCompressionOptions) -> Bool
```

## Parameters

- `options`: A compression options object to compare with the current instance.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if all the supplied options are present in the instance’s options, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [isEmpty](isempty.md): A Boolean value that denotes whether the option is empty.
- [intersects(\_:)](intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.

# containsOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Determines whether the supplied compression options are all present in the current instance.

## Declaration

```objectivec
- (BOOL) containsOptions:(NSUserInterfaceCompressionOptions *) options;
```

## Parameters

- `options`: A compression options object to compare with the current instance.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if all the supplied options are present in the instance’s options, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [empty](isempty.md): A Boolean value that denotes whether the option is empty.
- [intersectsOptions:](intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.
