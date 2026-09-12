> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/options/cstringpersonality](https://developer.apple.com/documentation/foundation/nspointerfunctions/options/cstringpersonality)

# cStringPersonality (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use a string hash and `strcmp`; C-string ‘`%s`’ style description.

## Declaration

```swift
static var cStringPersonality: NSPointerFunctions.Options { get }
```

## See Also

### Personality Options

- [integerPersonality](integerpersonality.md): Use unshifted value as hash and equality.
- [objectPersonality](objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [objectPointerPersonality](objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [opaquePersonality](opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [structPersonality](structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](../sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../../nsmaptableobjectpointerpersonality.md): Equivalent to [objectPointerPersonality](objectpointerpersonality.md).

# NSPointerFunctionsCStringPersonality (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use a string hash and `strcmp`; C-string ‘`%s`’ style description.

## Declaration

```objectivec
NSPointerFunctionsCStringPersonality
```

## See Also

### Personality Options

- [NSPointerFunctionsIntegerPersonality](integerpersonality.md): Use unshifted value as hash and equality.
- [NSPointerFunctionsObjectPersonality](objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [NSPointerFunctionsObjectPointerPersonality](objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [NSPointerFunctionsOpaquePersonality](opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [NSPointerFunctionsStructPersonality](structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](../sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../../nsmaptableobjectpointerpersonality.md): Equivalent to [NSPointerFunctionsObjectPointerPersonality](objectpointerpersonality.md).
