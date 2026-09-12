> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostabortoption/synchronous](https://developer.apple.com/documentation/iousbhost/iousbhostabortoption/synchronous)

# IOUSBHostAbortOption.synchronous (Swift)

**Framework:** IOUSBHost  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The option to abort input/output requests synchronously.

## Declaration

```swift
case synchronous
```

<a id="Discussion"></a>

## Discussion

This is the default argument for functions that abort pending input/output requests. All input/output requests must abort before functions can return.

## See Also

### Options

- [IOUSBHostAbortOption.asynchronous](asynchronous.md): The option to abort input/output requests asynchronously.

# IOUSBHostAbortOptionSynchronous (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The option to abort input/output requests synchronously.

## Declaration

```objectivec
IOUSBHostAbortOptionSynchronous
```

<a id="Discussion"></a>

## Discussion

This is the default argument for functions that abort pending input/output requests. All input/output requests must abort before functions can return.

## See Also

### Options

- [IOUSBHostAbortOptionAsynchronous](asynchronous.md): The option to abort input/output requests asynchronously.
