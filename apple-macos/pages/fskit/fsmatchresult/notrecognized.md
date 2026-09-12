> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmatchresult/notrecognized](https://developer.apple.com/documentation/fskit/fsmatchresult/notrecognized)

# FSMatchResult.notRecognized (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The probe doesn’t recognize the resource.

## Declaration

```swift
case notRecognized
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module determines that the resource uses a completely different format.

## See Also

### Working with match results

- [FSMatchResult.usable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResult.usableButLimited](usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResult.recognized](recognized.md): The probe recognizes the resource but can’t use it.

# FSMatchResultNotRecognized (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The probe doesn’t recognize the resource.

## Declaration

```objectivec
FSMatchResultNotRecognized
```

<a id="discussion"></a>

## Discussion

This match result is appropriate when the file system module determines that the resource uses a completely different format.

## See Also

### Working with match results

- [FSMatchResultUsable](usable.md): The probe recognizes the resource and is ready to use it.
- [FSMatchResultUsableButLimited](usablebutlimited.md): The probe recognizes the resource and is ready to use it, but only in a limited capacity.
- [FSMatchResultRecognized](recognized.md): The probe recognizes the resource but can’t use it.
