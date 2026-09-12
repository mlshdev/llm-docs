> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmatchresult/recognized](https://developer.apple.com/documentation/fskit/fsmatchresult/recognized)

# FSMatchResult.recognized (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The probe recognizes the resource but can’t use it.

## Declaration

```swift
case recognized
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module identifies the resource’s format but can’t use it. For example, if the resource uses a newer version than the module supports, the module can name the resource but can’t safely do anything with it.

## See Also

### Working with match results

- [FSMatchResult.usable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResult.usableButLimited](usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResult.notRecognized](notrecognized.md): The probe doesn’t recognize the resource.

# FSMatchResultRecognized (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The probe recognizes the resource but can’t use it.

## Declaration

```objectivec
FSMatchResultRecognized
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module identifies the resource’s format but can’t use it. For example, if the resource uses a newer version than the module supports, the module can name the resource but can’t safely do anything with it.

## See Also

### Working with match results

- [FSMatchResultUsable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResultUsableButLimited](usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResultNotRecognized](notrecognized.md): The probe doesn’t recognize the resource.
