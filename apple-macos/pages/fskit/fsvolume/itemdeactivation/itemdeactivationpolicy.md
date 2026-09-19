> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivation/itemdeactivationpolicy

# itemDeactivationPolicy (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+ (deprecated in 27.0)

A property that tells FSKit to which types of items the deactivation applies, if any.

## Declaration

```swift
var itemDeactivationPolicy: FSVolume.ItemDeactivationOptions { get }
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

## See Also

### Setting deactivation policy

- [FSVolume.ItemDeactivationOptions](../itemdeactivationoptions.md): Options to specify the item deactivation policy.

# itemDeactivationPolicy (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+ (deprecated in 27.0)

A property that tells FSKit to which types of items the deactivation applies, if any.

## Declaration

```objectivec
@property (readonly) FSItemDeactivationOptions itemDeactivationPolicy;
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

## See Also

### Setting deactivation policy

- [FSItemDeactivationOptions](../itemdeactivationoptions.md): Options to specify the item deactivation policy.
