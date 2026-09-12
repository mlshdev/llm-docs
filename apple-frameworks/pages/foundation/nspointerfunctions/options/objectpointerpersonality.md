> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/options/objectpointerpersonality](https://developer.apple.com/documentation/foundation/nspointerfunctions/options/objectpointerpersonality)

# objectPointerPersonality (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.

## Declaration

```swift
static var objectPointerPersonality: NSPointerFunctions.Options { get }
```

<a id="Discussion"></a>

## Discussion

As a special case, if you do not use garbage collection and specify this value in conjunction with [strongMemory](strongmemory.md) then the `NSPointerFunctions` object uses `retain` and `release`.

## See Also

### Personality Options

- [cStringPersonality](cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [integerPersonality](integerpersonality.md): Use unshifted value as hash and equality.
- [objectPersonality](objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [opaquePersonality](opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [structPersonality](structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](../sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../../nsmaptableobjectpointerpersonality.md): Equivalent to [objectPointerPersonality](objectpointerpersonality.md).

# NSPointerFunctionsObjectPointerPersonality (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.

## Declaration

```objectivec
NSPointerFunctionsObjectPointerPersonality
```

<a id="Discussion"></a>

## Discussion

As a special case, if you do not use garbage collection and specify this value in conjunction with [NSPointerFunctionsStrongMemory](strongmemory.md) then the `NSPointerFunctions` object uses `retain` and `release`.

## See Also

### Personality Options

- [NSPointerFunctionsCStringPersonality](cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [NSPointerFunctionsIntegerPersonality](integerpersonality.md): Use unshifted value as hash and equality.
- [NSPointerFunctionsObjectPersonality](objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [NSPointerFunctionsOpaquePersonality](opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [NSPointerFunctionsStructPersonality](structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](../sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../../nsmaptableobjectpointerpersonality.md): Equivalent to [NSPointerFunctionsObjectPointerPersonality](objectpointerpersonality.md).
