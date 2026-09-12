> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmatchresult/usablebutlimited](https://developer.apple.com/documentation/fskit/fsmatchresult/usablebutlimited)

# FSMatchResult.usableButLimited (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The probe recognizes the resource and is ready to use it, but only in a limited capacity.

## Declaration

```swift
case usableButLimited
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module identifies the resource’s format but also identifies incompatibilities. For example, if the module determines the resource uses new features that the module doesn’t support, the module may only offer read-only access.

## See Also

### Working with match results

- [FSMatchResult.usable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResult.recognized](recognized.md): The probe recognizes the resource but can’t use it.
- [FSMatchResult.notRecognized](notrecognized.md): The probe doesn’t recognize the resource.

# FSMatchResultUsableButLimited (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The probe recognizes the resource and is ready to use it, but only in a limited capacity.

## Declaration

```objectivec
FSMatchResultUsableButLimited
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module identifies the resource’s format but also identifies incompatibilities. For example, if the module determines the resource uses new features that the module doesn’t support, the module may only offer read-only access.

## See Also

### Working with match results

- [FSMatchResultUsable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResultRecognized](recognized.md): The probe recognizes the resource but can’t use it.
- [FSMatchResultNotRecognized](notrecognized.md): The probe doesn’t recognize the resource.
