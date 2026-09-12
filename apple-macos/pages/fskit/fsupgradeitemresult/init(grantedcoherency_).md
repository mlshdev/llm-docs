> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsupgradeitemresult/init(grantedcoherency:)](https://developer.apple.com/documentation/fskit/fsupgradeitemresult/init(grantedcoherency:))

# init(grantedCoherency:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates an upgrade-item result.

## Declaration

```swift
init(grantedCoherency: FSVolume.KernelCacheCoherencyType)
```

## Parameters

- `grantedCoherency`: The [FSVolume.KernelCacheCoherencyType](../fsvolume/kernelcachecoherencytype.md) granted by the module after the upgrade.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an upgrade-item result

- [FSVolume.KernelCacheCoherencyType](../fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.

# initWithGrantedCoherency: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates an upgrade-item result.

## Declaration

```objectivec
- (instancetype) initWithGrantedCoherency:(FSKernelCacheCoherencyType) grantedCoherency;
```

## Parameters

- `grantedCoherency`: The [FSKernelCacheCoherencyType](../fsvolume/kernelcachecoherencytype.md) granted by the module after the upgrade.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an upgrade-item result

- [FSKernelCacheCoherencyType](../fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.
