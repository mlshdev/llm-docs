> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmethodsignature/signaturewithobjctypes:](https://developer.apple.com/documentation/foundation/nsmethodsignature/signaturewithobjctypes:)

# signatureWithObjCTypes:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSMethodSignature` object for the given Objective-C method type string.

## Declaration

```objectivec
+ (NSMethodSignature *) signatureWithObjCTypes:(const char *) types;
```

## Parameters

- `types`: An array of characters containing the type encodings for the method arguments.

<a id="return-value"></a>

## Return Value

An `NSMethodSignature` object for the given Objective-C method type string in `types`.
